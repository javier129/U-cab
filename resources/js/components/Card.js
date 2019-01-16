import React, { Component } from 'react';
import  {withRouter } from "react-router-dom";
import './card.css';
class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            aventon: this.props.aventon
        }
        console.log('esto es lo uqe llega');
        console.log(this.props.aventon);
       
    }
    handleClick=(e)=>{
       // this.props.history.push('/registro')
        console.log( document.getElementById('exampleModal').style.display);
        $(`#aceptarAventon${this.props.aventon.id}`).modal('show'); 
       //this.props.history.push('/AventonDetalles');
    }
    handleAcept=(e)=>{
        //this.props.history.push(`/AventonDetalles/:${this.state.aventon.id}`);

        let uri = 'http://127.0.0.1:8000/ajax/aventones/aceptarAventon';
        let data = new FormData();
        let avetonid= this.state.aventon.id;
        data.append('avetonId', avetonid);
       
        axios.post(uri,data).then(response=>{
            $(`#aceptarAventon${this.props.aventon.id}`).modal('hide'); 
            if(response.data.create=="false"){
                alert('No hay mas cupos');
            }else{
                this.props.history.push({
                    pathname: '/AventonDetalles',
                    search: `?${this.state.aventon.id}`,
                    state: { aventonId: this.state.aventon.id}
                })
            }
        })
      
    }

    render() {
        return ( 
            <div >
                    <div  className="row justify-content-center">
                        <div onClick={this.handleClick} className="card col-sm-12 col-xs-12 col-lg-7 col-md-7">
                            <div className="cardimage">
                                { this.props.aventon.usuario.img? <img className="card-img" src={`/storage/${this.props.aventon.usuario.img}`}  alt=""/> : <img className="card-img" src="https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg"  alt=""/>}    
                            </div>
                            <div className="cardbody">
                                <h6 className="card-title">{this.props.aventon.usuario.name}</h6>
                                <hr id="cardhr"></hr>
                                <p>{this.props.aventon.zona.descripcion}</p>
                            </div>                           
                        </div>
                    </div>

                    {/* Modal */}

                    <div className="row modal fade navbar mod text-center justify-content-center" id={`aceptarAventon${this.props.aventon.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className=" col-10 modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Aventon</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div className="modal-body">
                            <div className="form-group text-left">
                                <label id="textPass mod" htmlFor="exampleFormControlSelect1">Nombre Del Conductor</label>
                                <input type="text" readOnly className="form-control-plaintext" id="staticNombreConductor" value={this.state.aventon.id}/>
                            </div>
                            <div className="form-group text-left">
                                <label id="textPass mod" htmlFor="exampleFormControlSelect1">Zona Destino</label>
                                <input type="text" readOnly className="form-control-plaintext" id="staticzona" value={this.state.aventon.zona.descripcion}/>
                            </div> 
                            <div className="text-left">
                            <label id="textPass mod" htmlFor="exampleFormControlSelect1">Direccion Destino</label>
                            <div className="form-group formulario">
                                <input type="text" readOnly className="form-control-plaintext" id="staticdireccion" value={this.state.aventon.direcion}/>
                            </div>
                            </div>         

                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                <button type="button" onClick={this.handleAcept} className="btn btn-danger">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------- */}
            </div>       

        );
    }
}

export default withRouter(Card);