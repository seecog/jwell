const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductModel = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    name: { type: String },
    description: { type: String },
    image: { type: String },
    price: {
        type: Number
    }
});

module.exports = mongoose.model('Product', ProductModel);