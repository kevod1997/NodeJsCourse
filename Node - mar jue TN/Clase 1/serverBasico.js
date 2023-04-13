import http from "http"

//const app = http.createServer( (request, response)=>{} )
const app = http.createServer( (req, res)=>{
    //res.end("<h1>Hola! esto es un server HTTP</h1>")

    switch (req.url) {
        case "/home":
            res.end("<h1>HOME</h1>")
            break

        case "/products":
            res.end("<h1>PRODUCTS</h1>")
            break

        case "/users":
            res.end("<h1>USERS</h1>")
            break

        case "/contact":
            res.end("<h1>CONTACT</h1>")
            break
            
        default:
            res.end("<p>Ruta no definida</p>")

    }
} )

app.listen(8080)