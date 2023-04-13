import express from "express"
import jwt from "jsonwebtoken"

const tokenKey = "1lkj23lkJ=)(=)klJK=)(=)ioijk=)(I9opijOJI=)("

const app = express() 

const AuthenticationMiddleware = (req, res, next ) => {
    const token = req.header("Authorization")

    try{
        //jwt.verify(token, tokenKey, (err, data)=>{} )
        //const payload = jwt.verify(token, tokenKey)
        req.payloadToken = jwt.verify(token, tokenKey)

        const newPayload = { ...req.payload }
        delete newPayload.iat //fecha de creacion
        delete newPayload.exp //fecha de vencimiento

        req.newToken = jwt.sign(newPayload, tokenKey, {expiresIn: "8d"})
        req.correctToken = true
        //next()
    }
    catch(error){
        //res.json({ok: false, error})
        req.correctToken = false
    }
    next()
}


const isAuth = (req, res, next) => {
    if( req.correctToken ){
        next()
    } 
    else {
        res.json({ok: false, errorMsg: "El token es obligatorio"})
    }
}


//Authentication middleware se ejecuta en todas las rutas
app.use( AuthenticationMiddleware )


app.get("/", (req, res) => {
    res.send(" <h1> JWT </h1> ")
})

//username + password 
//  body de la peticion (JSON o Form)
//  URL de la peticion ( /:username/:password  ó  ?username=aaa&password=aaa)

app.post("/login", (req, res) => {
    //Valido las credenciales 
    const payload = {
        username: "calitos_"
    }

    const token = jwt.sign(payload, tokenKey, {expiresIn: "8d"})

    //res.json({ ok: true , token: token })
    res.json({ ok: true , token })
})




// isAuth se utiliza en ciertas rutas donde necesito verificar si posee un token valido
app.get("/verToken", isAuth, (req, res) => {
    res.json( req.payloadToken )
})


app.get("/algo", (req, res) => {
    return res.json({  dato: "adasdasdasd",   token: req.newToken  })
})

app.listen(8080)





// {
//     const originalFetch = fetch 

//     window.fetch = async function (url, config = {}){
//         config.headers.Authorization = localStorage.token
//         const response = await originalFetch(url, config)

//         const data = await response.json()
//         localStorage.token = data.token 

//         return data
//     }
// }

// fetch("url...", {method:"POST"} )