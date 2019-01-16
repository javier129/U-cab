import React, { Component } from 'react';
import Card from './Card';
import './card.css';

class CardsView extends Component{
   
    constructor(props){
        super(props);
       
    }

    render(){
      console.log('esto deberia ser tipoU');
      console.log(this.props.tipoU);
    return( 
        this.props.aventones && <div className="container card-body" >{this.props.aventones.map( aventon=> <Card tipoUsuario={this.props.tipoU} aventon={aventon} key={aventon.id}/> )} </div> 
    )
    }
}

export default CardsView;