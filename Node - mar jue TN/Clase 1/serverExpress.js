import express from "express"

const app = express()

// get -> metodo a escuchar / existen otros como post
app.get( "/home", (req, res)=>{
    res.send( "<h1>HOME!</h1>" )
    // res.json()
    // res.sendFile()
    // res.render()
} )

app.get( "/users", (req, res)=>{
    res.send("<h1>USERS!</h1>")
} )

app.get( "/products", (req, res)=>{
    res.send("<h1>PRODUCTS!</h1>")
} )

app.listen(8080)