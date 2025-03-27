const mongoose = require("mongoose");

// Product Schema
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number },
    category: {
      type: String,
    },
    brand: { type: String },
    mainImage: { type: String },
    images: [{ type: String }],
    rating: { type: Number, min: 1, max: 5 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

// Product Model
module.exports.Product = mongoose.model("Product", ProductSchema);
