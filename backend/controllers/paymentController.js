const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * @desc   Create Checkout Session
 * @router /create-checkout-session
 * @method POST
 * @access private(Only Logged in users)
 */

module.exports.createCheckoutSession = asyncHandler(async (req, res) => {
  const { products, quantities } = req.body;
  const lineItems = products.map((product, index) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.title,
        images: [product.mainImage],
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: quantities[index],
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.FRONTEND_URL}/success`,
    cancel_url: `${process.env.FRONTEND_URL}/cancel`,
  });
  const id = session.id;
  res.json({ id });
});
