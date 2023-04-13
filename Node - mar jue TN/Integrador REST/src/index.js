import express from "express"
import ProductRouter from "./products/Products.routes.js"
import UserRouter from "./users/User.routes.js"
import mongoose from "mongoose"
import multer from "multer"
//mongoose
await mongoose.connect("mongodb://127.0.0.1:27017/proyecto")

const app = express() 
 
//Middlewares
app.use( express.urlencoded({extended:true}) ) //formularios urlencoded
app.use( express.json() ) //json
app.use( multer().none() ) //formularios multipart/form-data

//Router
app.get("/", (req, res)=>{
    res.send( "<h1>API</h1>" )
})

app.use( ProductRouter )
app.use( UserRouter )


app.listen(8080)