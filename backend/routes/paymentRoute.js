const router = require("express").Router();
const {createCheckoutSession} = require("../controllers/paymentController");

// /create-checkout-session
router.route("/").post(createCheckoutSession);



module.exports = router;