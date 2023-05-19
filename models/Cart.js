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
    type: String,
    required: true,
  },
  Displayimage: {
    type: String,
  },
});

module.exports = Cart = mongoose.model("cart", CartSchema);
