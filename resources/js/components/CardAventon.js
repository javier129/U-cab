import React, { Component } from 'react';
import './cardAventon.css';

class CardAventon extends Component {
    render() {
        return (
            <div className="container bodyAventon">
                <div className="row d-flex flex-column justify-content-center align-items-center cAventon">
                    <div className="card col-11 col-sm-11 col-xs-11 col-lg-5 col-md-5 align-self-center p-2 text-center cAventon">
                        <h5 className="centro">Nuevo Aventon</h5>
                        <div>
                            <div className="form-group formulario cAventon">
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Destino"/>
                            </div>   
                            <div className="form-group cAventon">
                                <label id="textPass " htmlFor="exampleFormControlSelect1">Numero De Pasajeros</label>
                                <select className="form-control" id="FormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <div className="row">
                                    <div className="col-6">
                                        <button type="button" className="btn btn-warning btnAceptar">Cancelar</button>
                                    </div>
                                    <div className="col-6 col-offset-1">
                                        <button type="button" className="btn btn-warning btnAceptar">Aceptar</button>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>           
        ); 
    }
}

export default CardAventon;