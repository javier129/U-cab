import React, { Component } from 'react';
import  {withRouter } from "react-router-dom";
import './card.css';
class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            usuario: this.props.persona
        }
    }
    handleClick=(e)=>{
        this.props.history.push('/registro')
        console.log(this.state.usuario);
    }

    render() {
        return ( 
            <div >
                    <div  className="row justify-content-center">
                        <div onClick={this.handleClick} className="card col-sm-12 col-xs-12 col-lg-8 col-md-8">
                            <div className="cardimage">
                                <img className="card-img" src="https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg"/>    
                            </div>
                            <div className="cardbody">
                                <h6 className="card-title">{this.props.persona.nombre}</h6>
                                <p>{this.props.persona.destino}</p>
                            </div>                           
                        </div>
                    </div>
            </div>       

        );
    }
}

export default withRouter(Card);