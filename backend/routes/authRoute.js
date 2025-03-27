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
        { id: this._id, isAdmin: this.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
    res.redirect(`${process.env.FRONTEND_URL}/?token=${token}`);
  }
);

module.exports = router;
