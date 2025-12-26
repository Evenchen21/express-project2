const monsgoose = require("mongoose");
const productSchema = new monsgoose.Schema({
  productid: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Product = monsgoose.model("Product", productSchema);
module.exports = Product;
