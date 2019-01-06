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

                            <div className="aventonDetalles">
                                <button type="button" className="btn btn-primary"><i className="fas fa-arrow-left"></i></button>
                            </div>
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
                    <div className="row justify-content-center  text-center card3">
                            <div className="col-5 col-sm-5 col-xs-6 ">
                                <button type="button" className="btn" data-toggle="modal" data-target="#cancelarModal">Cancelar</button>
                            </div>
                            <div className="col-5 col-sm-5 col-xs-6 ">
                                <button id="aceptar" type="button" className="btn ">Completar</button>
                            </div>    
                    </div>

                     {/* <!-- Modal --> */}
                     <div className="container row ">
                     <div className="col-11 modal fade justify-content-center " id="cancelarModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Cancelar </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <p>Se encuentra seguro que desea cancelar el aventon</p>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-pri">aceptar</button>
                                  </div>
                                </div>
                              </div>
                            </div></div>
            </div>       

        );
    }
}

export default AventonDetalles;