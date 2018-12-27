import React, { Component } from 'react';


class Card extends Component {
    constructor(props){
        super();
    }
    render() {
        return ( 
            <div>
                    <div className="row justify-content-center">
                        <div className="card col-sm-12 col-xs-12 col-lg-8 col-md-8">
                            <div className="cardimage">
                                <img className="card-img" src="https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg"/>    
                            </div>
                            <div className="cardbody">
                                <h6 className="card-title">{this.props.persona.nombre}</h6>
                                <p>{this.props.persona.destino}</p>
                            </div>                           
                        </div>
                    </div>

                    {/* Modal */}

                    <div className="modal fade navbar" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Aventon</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div className="modal-body">
                            <div className="form-group ">
                                <label id="textPass" htmlFor="exampleFormControlSelect1">Nombre Del Conductor</label>
                                <input type="text" readonly class="form-control-plaintext" id="staticNombreConductor" value="Javier Gil"/>
                            </div>
                            <div className="form-group ">
                                <label id="textPass" htmlFor="exampleFormControlSelect1">Zona Destino</label>
                                <input type="text" readonly class="form-control-plaintext" id="staticzona" value="unare"/>
                            </div>
                            <label id="textPass" htmlFor="exampleFormControlSelect1">Direccion Destino</label>
                            <div className="form-group formulario">
                                <input type="text" readonly class="form-control-plaintext" id="staticdireccion" value="calle 23a"/>
                            </div>         

                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-danger">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------- */}
            </div>       

        );
    }
}

export default Card;