const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  oldid: {
    type: String,
    required: true,
  },
  ItemName: {
    type: String,
    required: true,
  },
  Itemprice: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = Cart = mongoose.model("cart", CartSchema);
