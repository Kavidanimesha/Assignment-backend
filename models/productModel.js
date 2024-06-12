const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    { 
        sku: {
            type: String,
            required: true
        }, 
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        qty:{
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        images: [
            {
              filename: { type: String, required: true },
              path: { type: String, required: true },
              isMain: { type: Boolean, default: false },
            },
          ],

    });

    module.exports = mongoose.model('ProductSchema', productSchema)