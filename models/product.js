const mongoose = require('mongoose');
const { database } = require('../config/mongodb');

const productSchema = mongoose.Schema({
    title: { type: String, required: true, maxLength: 100 },
    product_url: { type: String, required: true, maxLength: 100 },
    price: { type: Number, required: true },
    video_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "videos",
        required: true
    },

},
    { timestamps: true });


const Product = mongoose.model('products', productSchema);

module.exports = Product
