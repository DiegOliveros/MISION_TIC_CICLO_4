import Producto from "../../models/Producto.js";

const Mutation = {
    createProducto: async (_, { nombre, descrip, almacen }) => {
        const newProducto = new Producto({ nombre, descrip, almacen })
        return await newProducto.save();
    }

}

export default Mutation;