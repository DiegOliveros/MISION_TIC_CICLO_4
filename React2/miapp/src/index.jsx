import ReactDOM from 'react-dom';
import {Consumo} from "./Consumo.jsx"
//import React from 'react';
import React,{ useState, useEffect } from "react";

import Listaproductos from "./Listaproductos.jsx"
import { ApolloProvider } from '@apollo/client';
import {ApolloClient,InMemoryCache,useQuery, gql } from "@apollo/client";

//import { useState } from 'react/cjs/react.development';

/*
class Coordenadas extends React.Component {
    state = {
        var1: null,
        var2: null,
        var3: null,
    };
    render() {
        console.log("Se está montando el componente")
        console.log(this.state.var1)
        console.log(this.state.var2)
        return this.state.var1 == null ? (<div>Cargando la información... </div>) : (<div>
            <h1>La Latitud es:{this.state.var1}</h1>
            <h2>La Longitud es:{this.state.var2}</h2>
        </div>);
    }
    componentDidMount() {
        console.log("Se está ejecutando componentDidMount")

        this.geoId= window.navigator.geolocation.watchPosition(position => {  
            this.setState({
                var1: position.coords.latitude,              // acá realizo la asignación 
                var2: position.coords.longitude
            });
        });
    }
    componentWillUnmount() {
      //  navigator.geolocation.clearWatch(this.geoId);
    }
}*/
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });



ReactDOM.render(<ApolloProvider client={client}>
    <Listaproductos />
  </ApolloProvider>, document.getElementById('raiz'));


const Lifecycle =()=>{
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    useEffect( () => {console.log("useEffect []")}, [])
    useEffect( () => {console.log("useEffect sin dependencia '[]'")})
    useEffect( () => {console.log("useEffect con dependencia '[contador1]'")}, [contador1])
    useEffect( () => {console.log("useEffect con dependencia '[contador1]'y'[contador2]'")}, [contador1, contador2])

return(
<div>
<h1> El número de clicks del boton 1 es: {contador1}</h1>
<h1> El número de clicks del boton 2 es: {contador2}</h1>
<button onClick={()=> setContador1(contador1+1)}> Incrementar el contador 1</button>
<button onClick={()=> setContador2(contador2+1)}> Incrementar el contador 2 </button>

</div>






)}
ReactDOM.render(<Lifecycle></Lifecycle>, document.getElementById('raiz'));

