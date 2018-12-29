import React, { Component } from 'react';
import './AventonDetalles.css';

class AventonDetalles extends Component {
    constructor(props){
        super();
    }
    render() {
        return ( 
            <div>
                    <div className="row justify-content-center bodyDetalles">
                        <div className="col-10 col-sm-10 col-xs-10 col-lg-8 col-md-8 card detalles">
                            <div id="foto" className="detalles form-group text-center">
                                <img src="https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg"/>
                            </div>
                            <div className="form-group ">
                                <label id="textPass" htmlFor="exampleFormControlSelect1">nombre del conductor</label>
                                <hr></hr>
                                <input type="text" readOnly className="form-control-plaintext" id="staticNombreConductor" value="Javier Gil"/>
                            </div>
                            <div className="form-group ">
                                <label id="textPass" htmlFor="exampleFormControlSelect1">zona destino</label>
                                <hr></hr>
                                <input type="text" readOnly className="form-control-plaintext" id="staticzona" value="unare"/>
                            </div>
                            <label id="textPass" htmlFor="exampleFormControlSelect1">direccion destino</label>
                            <hr></hr>
                            <div className="form-group ">
                                <input type="text" readOnly className="form-control-plaintext" id="staticdireccion" value="calle 23a"/>
                            </div>                            
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-10 col-xs-10 col-lg-8 col-md-8 card2 detalles">
                            <label id="textPass" htmlFor="exampleFormControlSelect1">numero de contacto</label>
                            <hr></hr>
                            <div className="form-group ">
                                <input type="text" readOnly className="form-control-plaintext" id="staticNContacto" value="04122060111"/>
                            </div>                            
                        </div>
                    </div>
            </div>       

        );
    }
}

export default AventonDetalles;