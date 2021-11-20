import {server} from "./server"
import "./database"

server.start({port:300}, ({port})=>{
    console.log("El servicio está em el puerto", port);
})