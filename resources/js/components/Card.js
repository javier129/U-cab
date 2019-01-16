import React, { Component } from 'react';
import  {withRouter } from "react-router-dom";
import './card.css';
import BodyModalPendiente from './BodyModalPendiente';
class Card extends Component {
    constructor(props){
        super(props);
      
        console.log('esto es lo uqe llega');
        console.log(this.props.aventon);
       
    }
    handleClick=(e)=>{
        console.log('que paso aqui');
        console.log(this.props.tipoUsuario);
        if(this.props.tipoUsuario && this.props.tipoUsuario==1){
           $(`#aceptarAventon${this.props.aventon.id}Pendientes`).modal('show');
        }else{
            if(this.props.tipoUsuario && this.props.tipoUsuario==2){
                this.props.history.push({
                    pathname: '/AventonDetalles',
                    search: `?${this.props.aventon.id}`,
                    state: { aventonId: this.props.aventon.id}
                })
            }
           
        }
        if(this.props.tipoUsuario==null){
            console.log( document.getElementById('exampleModal').style.display);
            $(`#aceptarAventon${this.props.aventon.id}`).modal('show'); 
        }
       // this.props.history.push('/registro')
      
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
                    search: `?${this.props.aventon.id}`,
                    state: { aventonId: this.props.aventon.id}
                })
            }
        })
      
    }
    handleCancelar=(e)=>{
        let uri = 'http://127.0.0.1:8000/ajax/aventon/cancelar/' + this.props.aventon.id;
        axios(uri).then(response=>{
            if(response.data){
              this.props.history.push('/');
            }
        })
    }

    render() {
        return ( 
            <div >
                    <div  className="row justify-content-center">
                        <div onClick={this.handleClick} className="card col-sm-12 col-xs-12 col-lg-7 col-md-7">
                            <div className="cardimage">
                                { this.props.aventon.user.img? <img className="card-img" src={`/storage/${this.props.aventon.user.img}`}  alt=""/> : <img className="card-img" src="https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg"  alt=""/>}    
                            </div>
                            <div className="cardbody">
                                <h6 className="card-title">{this.props.aventon.user.name}</h6>
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
                                <input type="text" readOnly className="form-control-plaintext" id="staticNombreConductor" value={this.props.aventon.user.name}/>
                            </div>
                            <div className="form-group text-left">
                                <label id="textPass mod" htmlFor="exampleFormControlSelect1">Zona Destino</label>
                                <input type="text" readOnly className="form-control-plaintext" id="staticzona" value={this.props.aventon.zona.descripcion}/>
                            </div> 
                            <div className="text-left">
                            <label id="textPass mod" htmlFor="exampleFormControlSelect1">Dirección Destino</label>
                            <div className="form-group formulario">
                                <input type="text" readOnly className="form-control-plaintext" id="staticdireccion" value={this.props.aventon.direcion}/>
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

                                    {/* Modal 2 */}
                <div className="row modal fade navbar mod text-center justify-content-center text-center" id={`aceptarAventon${this.props.aventon.id}Pendientes`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className=" col-11 modal-dialog " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Aventon</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.aventon.aventon_pasagero && this.props.aventon.aventon_pasagero.map(pasagero=><BodyModalPendiente key={pasagero.pasajero.id} user={pasagero} />)}
                            </div>   
                            <div className="modal-footer">
                                <button type="button" onClick={this.handleCancelar} className="btn btn-danger" data-dismiss="modal">Cancelar Aventon</button>
                            </div> 
                        </div>
                    </div>
                </div>
  

                </div>  

        );
    }
}

export default withRouter(Card);