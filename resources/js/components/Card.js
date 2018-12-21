import React, { Component } from 'react';


class Card extends Component {
    constructor(props){
        super();
    }
    render() {
        return ( 
            <div>
                    <div className="row">
                        <div className="card col-sm-12 col-xs-12 col-lg-5 col-md-5">
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

export default Card;