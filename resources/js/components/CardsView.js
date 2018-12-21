import React, { Component } from 'react';
import Card from './Card';
import './card.css';
const petciones=[
    {
        nombre:'carlos',
        destino:'Campo a2 de ferrominera'
    },
    {
        nombre:'javier',
        destino:'altavista norte'
    },
    {
        nombre:'juan',
        destino:'Villa colombia'
    }
]
class CardsView extends Component{
    constructor(){
        super();
    }

    render(){
      
          return <div className="container card-body" >{petciones.map( usuario=> <Card persona={usuario} key={usuario.nombre}/> )} </div> 
    }
}

export default CardsView;