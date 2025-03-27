const asyncHandler = require("express-async-handler");
const { Product } = require("../models/Product");

/**
 * @desc   Get All Products
 * @router /api/products
 * @method GET
 * @access public
 */
module.exports.getAllProductsCtrl = asyncHandler(async (req, res) => {
  const { pageNumber, category, keyword } = req.query;

  const PRODUCTS_PER_PAGE = 8;

  let products;

  if (pageNumber) {
    products = await Product.find()
      .skip((pageNumber - 1) * PRODUCTS_PER_PAGE)
      .limit(PRODUCTS_PER_PAGE)
      .sort({ createdAt: -1 });
  } else if (category) {
    products = await Product.find({ category }).sort({ createdAt: -1 });
  } else if (keyword) {
    products = await Product.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    }).sort({ createdAt: -1 });
  } else if (keyword && pageNumber) {
    products = await Product.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    })
      .skip((pageNumber - 1) * PRODUCTS_PER_PAGE)
      .limit(PRODUCTS_PER_PAGE)
      .sort({ createdAt: -1 });
  } else if (category && pageNumber) {
    products = await Product.find({ category })
      .skip((pageNumber - 1) * PRODUCTS_PER_PAGE)
      .limit(PRODUCTS_PER_PAGE)
      .sort({ createdAt: -1 });
  } else {
    products = await Product.find().sort({ createdAt: -1 });
  }
  res.status(200).json({ products });
});

/**
 * @desc   Get Single Product
 * @router /api/products/:id
 * @method GET
 * @access public
 */
module.exports.getSingleProductCtrl = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found!" });
  }
  res.status(200).json({ product });
});
