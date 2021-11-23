import {server} from "./server.js"
import "./database.js"

server.start({port:4000}, ({port})=>{
    console.log("El servicio está em el puerto", port);
})
console.log("hola")