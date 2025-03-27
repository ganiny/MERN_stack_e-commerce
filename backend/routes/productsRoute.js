const router = require("express").Router();
const {getAllProductsCtrl, getSingleProductCtrl} = require("../controllers/productsController");
const validateObjectId = require("../middlewares/validateObjectId");

// /api/products
router
  .route("/")
  .get(getAllProductsCtrl);

// /api/products/:id
router
  .route("/:id")
  .get(getSingleProductCtrl);

module.exports = router;