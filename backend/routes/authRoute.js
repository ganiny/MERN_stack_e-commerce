const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const {
  signupUserCtrl,
  signinUserCtrl,
} = require("../controllers/authController");
const {
  requestPasswordResetCtrl,
  resetPasswordCtrl,
} = require("../controllers/passwordController");

// /api/auth/signup
router.post("/signup", signupUserCtrl);

// /api/auth/signin
router.post("/signin", signinUserCtrl);

// /api/auth/forgot-password
router.post("/forgot-password", requestPasswordResetCtrl);

// /api/auth/reset-password/:userId/:token
router.post("/reset-password/:userId/:token", resetPasswordCtrl);

// /api/auth/google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

// /api/auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id, isAdmin: req.user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.redirect(`${process.env.FRONTEND_URL}/oauth-success?token=${token}`);
  }
);

module.exports = router;
