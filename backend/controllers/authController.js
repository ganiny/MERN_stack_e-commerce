const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const {
  User,
  validateSignupUser,
  validateSigninUser,
} = require("../models/User");

/**
 * @desc   Signup New User
 * @router /api/auth/signup
 * @method POST
 * @access public
 */
module.exports.signupUserCtrl = asyncHandler(async (req, res) => {
  // Validation
  const { error } = validateSignupUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Is user already exist
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(409).json({ message: "User already exists." });
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // new user
  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  // save it to db
  await user.save();

  //TODO - Sending Email(verify account)

  // Generate token
  const token = user.generateAuthToken();

  // make the user without password to send it in response
  const { password, ...userWithoutPassword } = user._doc;

  // send response to client
  res.status(201).json({ userWithoutPassword, token });
});

/**
 * @desc   Signin User
 * @router /api/auth/signin
 * @method POST
 * @access public
 */
module.exports.signinUserCtrl = asyncHandler(async (req, res) => {
  // Validation
  const { error } = validateSigninUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Is user already exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ message: "Invalid Email or Password!" });
  }

  // compare password from client and password in database
  const isPasswordMatch = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordMatch) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  //TODO - Sending Email(verify account if not verified)

  // Generate token
  const token = user.generateAuthToken();

  // make the user without password to send it in response
  const { password, ...userWithoutPassword } = user._doc;

  // send response to client
  res.status(200).json({ userWithoutPassword, token });
});
