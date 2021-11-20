import Producto from "../../models/Producto.js"

const Query = {

    hola() {
        return "Esta es la respuesta de la query hola"
    },
    productos: async () => {
        return await Producto.find()
    }

}

export default Query;