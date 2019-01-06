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
    aventones=()=>{
        let dato=null;
        let uri = 'http://127.0.0.1:8000/ajax/aventones';
        axios(uri).then(response=>{
            console.log(response.data);
            if(response.data){
               this.setState({
                aventones :response.data.aventones
               })
            }
        })
    }
    constructor(){
        super();
        this.state={
            aventones:null
        }
        this.aventones();
    }

    render(){
      
    return( 
        this.state.aventones && <div className="container card-body" >{this.state.aventones.map( aventon=> <Card aventon={aventon} key={aventon.id}/> )} </div> 
    )
    }
}

export default CardsView;