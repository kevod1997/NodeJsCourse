import express from "express"
import cookieParser from "cookie-parser"

const app = express()

app.use( cookieParser() )

app.use( (req, res, next) => {
    if(!req.cookies.cart){
        //Generar un nuevo carrito ....
        res.cookie("cart", "kijh12kj3h1lkj2h3kl1j23kj1lh23")
    }

    next()
} )



app.get("/generarCookie", (req, res) => {
    //res.header("Set-Cookie: ejemplo=123").send("Hola!")

    res.cookie("ejemplo", 123, {expires: new Date( Date.now() + 1000*60*60*24*5)})
    res.cookie("otra", 456)
    res.send("hola")
})

app.get("/verCookies", (req, res) => {
    //console.log(req.cookies)
    res.json( req.cookies )
})


app.listen(8080)