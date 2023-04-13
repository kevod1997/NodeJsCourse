import { json } from "express"
import Product from "./Product.model.js"
/* -------------------------------------
    All -> list all resource
   ---------------------------------------*/ 
export const all = async (req, res)=>{
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(error){
        res.status(403).json( {error: true, errorMsg: error.message} )
    }
}

/* -------------------------------------
    one -> get one resource
   ---------------------------------------*/
export const one = async (req, res)=>{
    const _id = req.params.id

    try{
        const product = await Product.findOne( { _id } )
        res.json( product ?? {} )
    }
    catch(error){
        // console.log(error)
        //res.json( {error: true, errorInfo: error} )
        res.status(403).json( {error: true, errorMsg: error.message} )
    }
    
}

/* -------------------------------------
    create -> get one resource
   ---------------------------------------*/
export const create = async (req, res)=>{
    //const body = req.body
    const {body} = req 

    if( body.imgs && req.header("Content-Type") !== "application/json" ){
        const {imgs} = body 
        const arrayImgs = []

        for( let i = 0 ; i < imgs.url.length ; i++ ){
            const img = {
                url: imgs.url[i],
                alt: imgs.alt[i]
            }

            arrayImgs.push( img )
        }

        body.imgs = arrayImgs
    }

    try {
        const product = await Product.create( body )
        res.json( product )

    } catch (error) {
        res.status(403).json( {error: true, errorMsg: error.message, errorInfo: error.errors} )
    }
}

/* -------------------------------------
    one -> get one resource
   ---------------------------------------*/
export const update = async (req, res)=>{
    const _id = req.params.id
    const {body} = req 
    //coleccion.update({_id}, {brand: "asdasd"}) === Model.resave  -> PUT
    //coleccion.update({_id}, { $set:{brand: "asdasd"}}) === Model.update -> PATCH
    if( body.imgs && req.header("Content-Type") !== "application/json" ){
        const {imgs} = body 
        const arrayImgs = []

        for( let i = 0 ; i < imgs.url.length ; i++ ){
            const img = {
                url: imgs.url[i],
                alt: imgs.alt[i]
            }

            arrayImgs.push( img )
        }

        body.imgs = arrayImgs
    }

    try {
        const product = await Product.findOneAndUpdate({_id}, body, {new: true})

        res.json(product)
    } catch (error) {
        res.status(403).json( {error: true, errorMsg: error.message, errorInfo: error.errors} )
    }
}


/* -------------------------------------
    one -> get one resource
   ---------------------------------------*/
export const destroy = async (req, res)=>{
    const _id = req.params.id

    try {
        const result = await Product.deleteOne( {_id} )
        if(result.deletedCount){//1
            res.json({})
        }
        else{
            res.status(403).json( {error: true, errorMsg: "No se pudo borrar el registro"} )
        }
    } catch (error) {
        res.status(403).json( {error: true, errorMsg: error.message, errorInfo: error.errors} )
    }
}






// const form = document.querySelector("form")
// form.addEventListener("submit", ev => {
//     //validacion

//     //AJAX con multipart/form-data
//     const formData = new FormData(form)

//     fetch("dominio.com/api/products",{
//         method: "POST",
//         body: formData
//     })

//     //AJAX con JSON
//     const data = {
//         name: form.name.value,
//         email: form.email.value ,
//         age: form.age.value
//     }
//     fetch("dominio.com/api/products",{
//         method: "POST",
//         body: JSON.stringify( data ),
//         headers: {
//             "content-type": "application/json"
//         }
//     })
// })


// imgs[] 
// imgs[] 
// imgs = ["asdasd", "qweqwe"]

// imgs[url]
// imgs[alt]

// imgs = {
//     url: ["imagen1.jpg", "imagen2.jpg"],
//     alt: ["buena foto", ""]
// }

// //codigo magico 

// imgs = [
//     {url: "imagen1.jpg", alt: "buena foto"},
//     {url: "imagen2.jpg", alt: ""},
// ]