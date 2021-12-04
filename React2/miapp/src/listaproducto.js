import styles from "./listaproducto.module.css";


export function ListaProducto ({produto}){
    const imagenUrl="https://raw.githubusercontent.com/DiegOliveros/MISION_TIC_CICLO_4/main/elclondelprofe/" +produto.id+".jpg";
    return <li className={styles.productCard}>
        <img className= {styles.productImage} src={imagenUrl} alt={produto.nombre}/>
        {produto.nombre}
        </li>;
}