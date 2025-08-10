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
  const page = Math.max(parseInt(pageNumber || 1, 10), 1);

  const filter = {};
  if (category) {
    filter.category = category;
  }
  if (keyword) {
    filter.$or = [
      { title: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } },
    ];
  }

  const query = Product.find(filter).sort({ createdAt: -1 });
  const totalItems = await Product.countDocuments(filter);

  const products = await query
    .skip((page - 1) * PRODUCTS_PER_PAGE)
    .limit(PRODUCTS_PER_PAGE);

  const totalPages = Math.ceil(totalItems / PRODUCTS_PER_PAGE) || 1;

  res.status(200).json({
    products,
    pagination: { page, pageSize: PRODUCTS_PER_PAGE, totalItems, totalPages },
  });
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
