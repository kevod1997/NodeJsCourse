import express from "express"
import fs from "fs"
import inicioHtml, {customMessage} from "./inicio.template.js"
import {create} from "express-handlebars"

const hbs = create({ //Fabrica el motor ya configurado
    extname: ".hbs",
    helpers: {}
})


const app = express()

//Configurar el motor de plantillas en express
app.engine( "hbs", hbs.engine )//Le dice a express que prenda el motor y le da un nombre

app.set("view engine", "hbs")//Indico cual es mi motor predeterminado -> tiene que coincidir con el nombre de la linea anterior

app.set("views", "./Clase 2/views")




app.get("/", (req, res)=>{
    //const html = fs.readFileSync("./Clase 2/inicio.html")
    //res.send(  customMessage("Este es un mensaje personalizado")  )
    res.render("inicio", {})
})

app.get("/contact", (req, res) => {
    res.render("contact", /*{layout: "otroLayout"}*/)
})

app.get("/muestra", (req, res)=>{
    res.render("muestra", {
        nombre: "Carlos",
        html: "<em>Sanchez</em>", //Usa triple llave  {{{variable}}}
        direccion:{
            calle: "San Martin",
            numero: 1550,
            ciudad: "Mendoza"
        },
        //mensaje: "Hola, esto es un mensaje",
        colores: ["grey", "green", "blue", "pink"],
        users:[
            {
                id: 1,
                name: "Carlos Perez",
                email: "calitos@gmail.com"
            },
            {
                id: 2,
                name: "Juana Gomez",
                email: "juanaG@gmail.com"
            },
            {
                id: 3,
                name: "Mara Rodriguez",
                email: "MaraR@gmail.com"
            }
        ]
    })
})


app.get("/helpers", (req, res)=>{
    
    res.render("helpers", {
        // otros parametros...
        nombre: "Juan",
        //saludar: ....
        helpers: {
            saludar: (nombre, apellido)=>{
                return `Hola ${nombre} ${apellido}! Bienvenid@ al sitio`
            }
        }
    })
})

app.listen(8080)


//Front Controller (Patron Arquitectonico) -> las rutas no reflejan las carpetas
/**
 
MVC -> url 
    /Controlador/Accion/param1/param2/param3 
    /product -> el index de todos los productos

    /product/create -> form de creacion 
    /product/insert -> guarda los datos del form en la BBDD (post)

    /product/edit/1 -> form de edicion
    /product/update/1 -> guardar le form 

    /product/category/heladeras
    /product?category=heladeras

    /product/search?q=samsun
    /product/categories

    /cart/IDCART/addProduct/ID 
    /cart/deleteProduct/ID 
    /cart/checkout

    /user/login 
    /user/create

REST -> url + method
    get:    /products -> todos los productos
    get:    /products/1 -> productos con id 1
    get:    /products?category=heladera -> todas las heladeras

    get:    /categories/1/products
    get:    /users/25/carts
    get:    /users/25/creditCards

    post:   /products -> recibe un form urlencoded o un JSON y CREA un registro en BBDD

    put:    /products/1 -> recibe un form urlencoded o un JSON y modifica el producto con id 1 (RECREA -> similar a post, solo mantiene el id)

    patch:  /products/1 -> recibe un form urlencoded o un JSON y modifica el producto con id 1 (EMPARCHA -> modifica solo lo que recibe)

    delete: /products/1 -> borra el producto 1


 */