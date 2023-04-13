import express from "express"
// import * as dotenv from "dotenv"
import {config} from "dotenv"
// dotenv.config("./tal/.env")
config()

//console.log( process.env )

const app = express() 

const PORT = process.env.HTTP_PORT || 3000
app.listen( PORT, (err)=>{ 
    if(err) {throw err}

    console.log("Server OK en puerto "+PORT)
} )

// //Si la primer var tiene un dato equivalente a true, entonces devuelve el ulto termino
// variable && "valorADevolver"

// //Si la primer var tiene un dato equivalente a true, entonces devuelve ese dato, sino devuelve el siguiente / Se usa para tener una especie de valor por default
// variable || "valorADevolver"
// "dato" || "valorADevolver" //dato
// undefined || "valorADevolver" //valorADevolver
// "" || "valorADevolver" //valorADevolver

// //Si la primer var tiene un dato equivalente a true, entonces devuelve ese dato, si tiene un valor undefined o null devuelve el siguiente / Se usa para tener una especie de valor por default
// variable ?? "valorADevolver"
// undefined ?? "valorADevolver" // "valorADevolver"
// "" ?? "valorADevolver" // ""
