import mongoose from "mongoose"

const categories = [
    "smartphone",
    "tablet",
    "tv",
    "pc",
]

const productSchema = new mongoose.Schema( {
    brand: {type: String, required: true, match: /^[\w\s\.ñáéíóúüÑÁÉÍÓÚÜ]{2,60}$/ },
    model: {type: String, required: true, match: /^[\w\s\.ñáéíóúüÑÁÉÍÓÚÜ]{2,60}$/ },
    price: {type: Number, required: true, min: 0},
    category: {type: String, required: true, enum: categories},
    description: {type: String, default: "No description"},
    imgs: {
        type: [ {
            url: String,
            alt: String
        } ],
        required: true,
        validate: value => value.length > 0,
    },
    extras: {}
} )

const Product = mongoose.model( "Product", productSchema )

export default Product