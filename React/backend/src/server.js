import {GraphQLServer} from "graphql-yoga"
import resolvers from "./graphql/resolvers/index.js"

//administrar rutas
import { fileURLToPath } from 'url';
import path from "path"
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//configuración del server

export const server = new GraphQLServer({
    typeDefs: path.join(__dirname, "graphql/schema.graphql"),
    resolvers
})
