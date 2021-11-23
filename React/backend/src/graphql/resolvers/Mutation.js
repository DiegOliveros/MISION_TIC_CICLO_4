import Producto from "../../models/Producto.js";
import Persona from "../../models/Person.js";
import Post from "../../models/Post.js";

const Mutation = {
    createProducto: async (_, { nombre, descrip, almacen }) => {
        const newProducto = new Producto({ nombre, descrip, almacen })
        return await newProducto.save();
      
    },
    createPerson: async (_, { name, age, post }) => {
        const newPersona= new Persona({ name, age, post  })
        return await newPersona.save(); },

    createPost: async (_, {title, autor}) => {
        const newPost= new Post({ title, autor})
        return await newPost.save(); }    
}
    

export default Mutation;