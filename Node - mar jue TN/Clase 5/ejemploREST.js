import express from "express"

const app = express()

//Middleware es un fragmento de codigo que esta en el medio de otros middlewares
//app.use( MIDDLEWARE! ) 

app.use( (req, res, next)=>{
    console.log("Soy un middleware")
    next()
} )

app.use( express.urlencoded({extended: true}) )
app.use( express.json() )


//El router es un middleware
app.get("/", (req, res) => {
    res.send("<h1> EJEMPLO REST </h1>")
})

// get: /products -> todos los productos
// get: /products?category=heladera -> todas las heladeras
app.get("/products", (req, res)=>{
    //res.header("Content-Type: application/json").end( JSON.parse({}) )
    
    res.json(["product1", "product2"])
})
// products?marca=Samsung&categoria=Heladera  / Esto no es bloque de captura, sino que es la info de la query

//EN LOS BLOQUES DE CAPTURA DEPENDEMOS DEL ORDEN    /algo/bloque1/algo/bloque2    
    // /products/a54sd54as3d54asd/heladera
// get: /products/6407db5468fa52b7db837a93 -> productos con id 1
// get: /products/6407db5468ab6a5b6a5b6a5b -> productos con id 1
app.get("/products/:id", (req, res)=>{
    const id = req.params.id
    res.json({text: "Producto "+id })
})

// post: /products -> recibe un form urlencoded o un JSON y CREA un registro en BBDD
app.post("/products", (req, res)=>{
    //Recibir la info via form (urlencoded / multipart/form-data)
    //Recibir la info via json
    console.log( req.body )
    res.json({text: "Producto creado"})
} )

// put: /products/1 -> recibe un form urlencoded o un JSON y modifica el producto con id 1(RECREA -> similar a post, solo mantiene el id)
app.put("/products/:id", (req, res)=>{
    const id = req.params.id
    console.log( req.body )
    res.json({text: "Editar producto "+id})
} )


// patch: /products/1 -> recibe un form urlencoded o un JSON y modifica el producto con id 1(EMPARCHA -> modifica solo lo que recibe)
app.patch("/products/:id", (req, res)=>{
    const id = req.params.id
    console.log( req.body )
    res.json({text: "Editar producto "+id})
} )

// delete: /products/1 -> borra el producto 1
app.delete("/products/:id", (req, res)=>{
    const id = req.params.id
    res.json({text: "Borrar el producto "+id })
})

app.listen(8080)

