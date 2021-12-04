import { useState, useEffect } from "react";

export function Consumo() {
    const [posts, setPost] = useState()

    const url = "https://jsonplaceholder.typicode.com/todos" //retorna un json 
    const fetchApi = async () => {
        const respuesta = await fetch(url)
        const respuestaJSON = await respuesta.json()
        setPost(respuestaJSON)

        console.log(respuestaJSON)
        console.log(respuesta.status)
    }


    useEffect(
        () => { fetchApi() }  // un efecto que invoque la función 
        , []);
    return (
        <>
            <div> Hola mundo desde la función de consumo Api</div>
            <ul>
                {!posts ? "Cargando los post..." :
                    posts.map((post, index) => {
                        return <li key= {index}>{post.title} {post.completed? "🟢":"⚠️"}</li>
                    })
                }
            </ul>

        </>
    );
}