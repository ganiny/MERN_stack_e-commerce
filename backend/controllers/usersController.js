const asyncHandler = require("express-async-handler");
const { Product } = require("../models/Product");
const { User } = require("../models/User");

/**
 * @desc   Toggle Wishlist Item
 * @router /api/users/wishlist/:id (productId)
 * @method PUT
 * @access private(Only Logged in users)
 */
module.exports.toggleWishlistItemCtrl = asyncHandler(async (req, res) => {
  const loggedInUserId = req.user.id;
  let product = await Product.findById(req.params.id);

  let user = await User.findById(loggedInUserId);

  if (!product) {
    return res.status(404).json({ message: "Product not found!" });
  }

  const isProductAlreadyAddedInWishlistFromSpecificUser = user.wishlist.some(
    (itemId) => itemId.toString() === req.params.id
  );

  if (isProductAlreadyAddedInWishlistFromSpecificUser) {
    user = await User.findByIdAndUpdate(
      loggedInUserId,
      {
        $pull: {
          wishlist: product._id,
        },
      },
      { new: true }
    ).populate("wishlist");
  } else {
    user = await User.findByIdAndUpdate(
      loggedInUserId,
      {
        $addToSet: {
          wishlist: product._id,
        },
      },
      { new: true }
    ).populate("wishlist");
  }
  const { wishlist } = user;

  res.status(200).json({ wishlist });
});

/**
 * @desc   Add Item To Cart
 * @router /api/users/cart/add/:id (productId)
 * @method PUT
 * @access private(Only Logged in users)
 */
module.exports.addItemToCartCtrl = asyncHandler(async (req, res) => {
  const loggedInUserId = req.user.id;
  let product = await Product.findById(req.params.id);

  let user = await User.findById(loggedInUserId);

  if (!product) {
    return res.status(404).json({ message: "Product not found!" });
  }

  const isProductAlreadyAddedInCartFromSpecificUser = user.cart.some(
    (itemId) => itemId.toString() === req.params.id
  );

  if (isProductAlreadyAddedInCartFromSpecificUser) {
    // Return current cart without modifying to avoid hanging the request
    const populatedUser = await User.findById(loggedInUserId).populate("cart");
    return res.status(200).json({ cart: populatedUser.cart });
  } else {
    user = await User.findByIdAndUpdate(
      loggedInUserId,
      {
        $addToSet: {
          cart: product._id,
        },
      },
      { new: true }
    ).populate("cart");
  }
  const { cart } = user;

  res.status(200).json({ cart });
});

/**
 * @desc   Remove Item From Cart
 * @router /api/users/cart/remove/:id (productId)
 * @method PUT
 * @access private(Only Logged in users)
 */
module.exports.removeItemFromCartCtrl = asyncHandler(async (req, res) => {
  const loggedInUserId = req.user.id;
  let product = await Product.findById(req.params.id);

  let user = await User.findById(loggedInUserId);

  if (!product) {
    return res.status(404).json({ message: "Product not found!" });
  }

  user = await User.findByIdAndUpdate(
    loggedInUserId,
    {
      $pull: {
        cart: product._id,
      },
    },
    { new: true }
  ).populate("cart");

  const { cart } = user;

  res.status(200).json({ cart });
});
