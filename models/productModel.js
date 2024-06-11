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
            type: number,
            required: true
        },
        qty:{
            type: number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        images: []

    });

    module.exports = mongoose.model(productSchema)