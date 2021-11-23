import Producto from "../../models/Producto.js"
import Persona from "../../models/Person.js"
const Query = {

    hola() {
        return "Esta es la respuesta de la query hola"
    },
    productos: async () => {
        return await Producto.find()
    },
    personas: async () => {
        return await Persona.find()
    },
}

export default Query;