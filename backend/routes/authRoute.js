const router = require("express").Router();
const passport = require("passport");
const {
  signupUserCtrl,
  signinUserCtrl,
} = require("../controllers/authController");

// /api/auth/signup
router.post("/signup", signupUserCtrl);

// /api/auth/signin
router.post("/signin", signinUserCtrl);

// /api/auth/google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
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
