const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, validateEmail, validateNewPassword } = require("../models/User");

/**
 * @desc   Request password reset link
 * @route  POST /api/auth/forgot-password
 * @access Public
 */
module.exports.requestPasswordResetCtrl = asyncHandler(async (req, res) => {
  const { error } = validateEmail(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(200)
      .json({ message: "If that email exists, we've sent a reset link." });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
  user.resetPasswordToken = token;
  user.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000);
  await user.save();

  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${user._id}/${token}`;
  res.status(200).json({ message: "Password reset link generated.", resetUrl });
});

/**
 * @desc   Reset password
 * @route  POST /api/auth/reset-password/:userId/:token
 * @access Public
 */
module.exports.resetPasswordCtrl = asyncHandler(async (req, res) => {
  const { userId, token } = req.params;
  const { error } = validateNewPassword(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const user = await User.findById(userId);
  if (!user || !user.resetPasswordToken)
    return res.status(400).json({ message: "Invalid or expired reset token." });

  if (
    user.resetPasswordToken !== token ||
    !user.resetPasswordExpires ||
    user.resetPasswordExpires < new Date()
  ) {
    return res.status(400).json({ message: "Invalid or expired reset token." });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return res.status(400).json({ message: "Invalid or expired reset token." });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  user.password = hashedPassword;
  user.resetPasswordToken = null;
  user.resetPasswordExpires = null;
  await user.save();

  res
    .status(200)
    .json({ message: "Password reset successful. You can now sign in." });
});
