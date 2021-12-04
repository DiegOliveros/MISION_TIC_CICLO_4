import { ListaProducto } from "./listaproducto";
import productos from "./productos.json"
import styles from "./listaproducto.module.css";

export function ProductosGrid() {
    console.log(productos);
    return (
<>
         <ul>
               {productos.map(function (producto) {
                   return <li key={producto.id}>{producto.nombre}</li>
               })
               }
           </ul>
         <h1>Con un componente interno:</h1>
        <ul className={styles.productGrid}>
            {productos.map((producto) => (
                <ListaProducto key={producto.id} produto={producto} />
            ))
            }
        </ul>
</>
    );

}