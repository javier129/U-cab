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
   
    constructor(props){
        super(props);
       
    }

    render(){
      
    return( 
        this.props.aventones && <div className="container card-body" >{this.props.aventones.map( aventon=> <Card aventon={aventon} key={aventon.id}/> )} </div> 
    )
    }
}

export default CardsView;