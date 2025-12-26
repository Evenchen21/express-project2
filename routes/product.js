const express = require("express");
const joi = require("joi");
const Product = require("../models/Product");
const router = express.Router();
//----------------------------------------------//
const checkProductSchema = joi.object({
  productid: joi.number().required(),
  name: joi.string().required(),
  price: joi.number().required(),
  category: joi.string().required(),
  description: joi.string().optional(),
});
//----------------------------------------------//
// get all products //
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: "Server Error", error: error.message });
  }
});
//----------------------------------------------//
// create a new product //
router.post("/", async (req, res) => {
  try {
    const { error, value } = checkProductSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    let product = await Product.findOne({ productid: value.productid });
    if (product) {
      return res
        .status(400)
        .send({ message: "Product with this ID already exists" });
    }
    product = new Product(value);
    await product.save();
    // respond with the created product //
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ message: "Server Error", error: error.message });
  }
});
//----------------------------------------------//
// get specific product by productId //
router.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findOne({ productid: req.params.productId });
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: "Server Error", error: error.message });
  }
});
//----------------------------------------------//
// update product by productId //
router.put("/:productId", async (req, res) => {
  try {
    const { error } = checkProductSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const product = await Product.findOneAndUpdate(
      { productid: req.params.productId },
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: "Server Error", error: error.message });
  }
});
//----------------------------------------------//
// delete product by productId //
router.delete("/:productId", async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      productid: req.params.productId,
    });
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Server Error", error: error.message });
  }
});

//----------------------------------------------//
module.exports = router;
