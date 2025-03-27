const router = require("express").Router();
const {toggleWishlistItemCtrl, addItemToCartCtrl, removeItemFromCartCtrl} = require("../controllers/usersController");
const validateObjectId = require("../middlewares/validateObjectId");
const {verifyToken} = require("../middlewares/verifyToken");

// /api/users/wishlist/:id
router.route("/wishlist/:id").put(validateObjectId, verifyToken, toggleWishlistItemCtrl);

// /api/users/cart/add/:id
router.route("/cart/add/:id").put(validateObjectId, verifyToken, addItemToCartCtrl);

// /api/users/cart/remove/:id
router.route("/cart/remove/:id").put(validateObjectId, verifyToken, removeItemFromCartCtrl);

module.exports = router;