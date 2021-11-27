import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Component } from 'react';
import { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import {
    ApolloClient,
    InMemoryCache,
    useQuery,
    gql
  } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

export function epp() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }
ReactDOM.render(
  <ApolloProvider client={client}>
    <ExchangeRates />
  </ApolloProvider>,
  document.getElementById('root'),
);
  

const contenido = (
    <div>
        <h1>Este es un titulo</h1>
        <div>Hola desde la variable componente</div>
    </div>
)
function Contenido() {
    return <div> <h1>Esto es una funcion</h1>
    </div>
}

class ComponenteClase extends Component {
    state = {
        cuenta: 0
    };
    render() {
        return (
            <div>
                <h1>Hola mundo desde una clase componente</h1>
                <h1>El número de productos en la tienda es: {this.state.cuenta}</h1>
                <button onClick={() => this.setState({ cuenta: this.state.cuenta + 1 })} > Comprar</button>

            </div>
        )
    }
}

function EstadoHooks() {
    const [noproduct, setnoproduct] = useState(0);
    return (
        <div>
            <h1>Hola mundo desde un hook son usestate </h1>
            <h1>El número de productos en la tienda es: {noproduct}</h1>
            <button onClick={() => setnoproduct(noproduct + 1)} > Comprar</button>

        </div>
    )
}


export default class Coordenadas extends React.Component {
    state = {
        var1: null,
        var2: null,
        var3: null,
    };
    render() {
        console.log(this.state.var1)
        console.log(this.state.var2)
        return this.state.var1 == null ? (<div>Cargando... </div>) : (<div>
            <h1>La Latitud es:{this.state.var1}</h1>
            <h2>La Longitud es:{this.state.var2}</h2>
        </div>);
    }
    componentDidMount() {
        this.geoId=window.navigator.geolocation.watchPosition(position => {  //this.geoId
            this.setState({
                var1: position.coords.latitude,              // acá realizo la asignación 
                var2: position.coords.longitude
            });
        });
    }
    componentWillUnmount() {
      //  navigator.geolocation.clearWatch(this.geoId);
    }
}



ReactDOM.render(<><ComponenteClase />, <ComponenteClase /></ >, document.getElementById('raiz'));

