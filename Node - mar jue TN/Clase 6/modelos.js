import express from "express"
import mongoose from "mongoose"

// Conection
await mongoose.connect("mongodb://127.0.0.1:27017/proyecto")

//Schema + Models
//const productSchema = new mongoose.Schema( {} )
const productSchema = new mongoose.Schema( {
    //brand: String,
    brand: {type: String, required: true, match: /^[\w\s\.ñáéíóúüÑÁÉÍÓÚÜ]{2,60}$/ },
    model: {type: String, required: true, match: /^[\w\s\.ñáéíóúüÑÁÉÍÓÚÜ]{2,60}$/ },
    price: {type: Number, required: true, min: 0},
    category: {type: String, required: true},
    description: {type: String, default: "No description"},
    // imgs: [ {
    //     url: String,
    //     alt: String
    // } ],
    imgs: {
        type: [ {
            url: String,
            alt: String
        } ],
        required: true,
        validate: value => value.length > 0,
    },
    // extras: {
    //     RAM: {type:String, required:true}
    // }
    extras: {}
} )


// Si la coleccion es products el nombre del modelo sera Product
const ProductModel = mongoose.model( "Product", productSchema )

const product = await ProductModel.create({
    brand: "Samsung",
    model: "A35",
    price: 120000,
    category: "Smartpones",
    description: "Un celu genial",
    imgs: [{url: "samsung.jpg", alt:"Fotografia del celular"}],
    // imgs: [],
    extras:{
        proccessor: "Snapdragon",
        ram: "32gb"
    }
})

console.log( product )

const app = express()

app.get("/", (req, res)=> {
    res.send("<h1>Modelos</h1>")
})

app.listen(8080)





// product.extras = {RAM: "32gb", proccessor: "Snapdragon"}
// product.extras.RAM

// product.extras = [{key: "RAM", value:"32GB"},{key: "proccessor", value:"Snapdragon"}]
// //product.extras.find(()=>{})

// product.imgs = [
//     {
//         url: "/tal/miFoto.jpg",
//         alt: "una foto genial sobre el mar"
//     }
// ]