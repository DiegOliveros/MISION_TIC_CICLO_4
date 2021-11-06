import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Componente1 from './Componente1';

const contenidoweb=(<div>
    <h1>Este es un titulo de nivel 1</h1>
    <h2>Este es un titulo de nivel 2</h2>
    <h3>Este es un titulo de nivel 3</h3>
    <div>Todo esto corresponde a una constante</div>
    <h2>Este es un titulo de nivel 2</h2>
    <h3>Este es un titulo de nivel 3</h3>
</div>);

function ContenidoFunc(){
    return <div>
        <h1>Este es un contenido desde una función como componente</h1>
        <div>Este es el cuerpo de mi componente</div>
    </div>
}


function ContenidoFuncprops({titulo, contenido, children}){   //op3: desestructurar el objeto desde el parametro 
console.log(titulo)
console.log("este es mi titulo:"+titulo)
//op1:
// const mytitle=props.titulo;
//const content=props.contenido;

//op2:
//const {titulo, contenido}=props;
        return <div>
            <h1>Estas son variables independientes</h1>
  
        <h1>Estas son variables en una sola linea</h1>
        <h2>Este es el contenido de la variable: {titulo}</h2>
        <div>Este es el cuerpo de mi componente:{contenido}</div>
        <div>Este es el hijo o "children" de mi componente:{children}</div>
    </div>
}


ReactDOM.render(contenidoweb, document.getElementById('root'));
ReactDOM.render(<ContenidoFunc/>, document.getElementById('root'));
ReactDOM.render(<ContenidoFuncprops titulo="Mi titulo" contenido="Este es el contenido del componente">Este es el contenido interno una propiedad interna </ContenidoFuncprops>, document.getElementById('root'));
ReactDOM.render(<Componente1 titulo="Mi titulo" contenido="Este es el contenido del componente">Este es el contenido interno una propiedad interna </Componente1>, document.getElementById('root'));


