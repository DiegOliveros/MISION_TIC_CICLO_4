import React, {useState} from "react";

const lifecycle =()=>{
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
return(
<div>
<h1> El número de clicks del boton 1 es: {contador1}</h1>
<h1> El número de clicks del boton 2 es: {contador2}</h1>
<button onClick={()=> setContador1(contador1+1)}> Incrementar el contador 1</button>
<button onClick={()=> setContador2(contador2+1)}> Incrementar el contador 2 </button>


</div>



)
}


