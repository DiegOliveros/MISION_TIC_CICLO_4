import productos from "./productos.json"
export function Grid(){
    console.log(productos)
return (
    <ul className="productGrid">
      {productos.map((producto)=>{
          return <li key={producto.id}>{producto.nombre}</li>
      })}
    </ul>
)

}