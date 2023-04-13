prof.cristian.t@gmail.com


Node JS -> es una plataforma de ejecucion de JS por fuera del navegador, usando el motor de Chrome 

No posee ninguna de la apis del front-end (window, document), tiene sus propias apis para manejo de archivos, DNS, puertos, HTTP, etc 


Ejecutar Node -> es igual a la consola del navegador 


NPM -> Node Package Manager -> Gestor de paquetes para Node 
    YARN -> es de facebook 
    PNPM -> liviano

    npm init -y  -> esto inicializa un proyecto nuevo -> genera un archivo llamado package.json


    npm install nodemon -D -g
    npm i nodemon -D -g


    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser 

    nodemon .

//CommonJS -> Node
    const http = require("http")

//ECMAScript Modules -> ECMA 
    import http from "http"




Express -> framework -> Regula solo algunos aspectos del desarrollo 
    Permite libertad respecto de los patrones arquitectonicos a usar 
    Tambien funciona como base para otros frameworks -> Nest  /  Express con Arq Hexagonal

    npm i express


Stack MERN -> Mongo Express React Node

Back-end Node -> Nest 