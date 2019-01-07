import React, { Component } from 'react';
import './AventonDetalles.css';
import  {withRouter } from "react-router-dom";
import Spinner from './Spinner'
class AventonDetalles extends Component {
    aventones=()=>{
        let uri = `http://127.0.0.1:8000/ajax/aventones/${this.props.location.state.aventonId}`;
        axios(uri).then(response=>{
            console.log('llega desde el servidor');
           
            if(response.data){
                console.log(response.data.aventon);
               this.setState({
                aventon: response.data.aventon
               })
            }
        })
    }
    haldbleGoBack=()=>{
        this.props.history.goBack();
    }
    constructor(props){
        super(props);
        this.state={
            aventon:null
        }
        this.aventones();
    }
    render() {
        console.log('esto es aventon');
        console.log(this.state.aventon);
        return ( 
           
            <div>
                 {this.state.aventon? 
                 <div>
                     <div className="row justify-content-center bodyDetalles">
                     <div className="col-10 col-sm-10 col-xs-10 col-lg-8 col-md-8 card detalles">

                         <div className="aventonDetalles">
                             <button type="button" onClick={this.haldbleGoBack} className="btn btn-primary"><i className="fas fa-arrow-left"></i></button>
                         </div>
                         <div id="foto" className="detalles form-group text-center">
                         {this.state.aventon && <img src={`/storage/${this.state.aventon[0].user.img}`}/>}
                         </div>
                         <div className="form-group ">
                             <label id="textPass" htmlFor="exampleFormControlSelect1">nombre del conductor</label>
                             <hr></hr>
                             {this.state.aventon && <input type="text" readOnly className="form-control-plaintext" id="staticNombreConductor" value={this.state.aventon[0].user.name}/>}
                         </div>
                         <div className="form-group ">
                             <label id="textPass" htmlFor="exampleFormControlSelect1">zona destino</label>
                             <hr></hr>
                             {this.state.aventon && <input type="text" readOnly className="form-control-plaintext" id="staticzona" value={this.state.aventon[0].zona.descripcion}/>}
                         </div>
                         <label id="textPass" htmlFor="exampleFormControlSelect1">direccion destino</label>
                         <hr></hr>
                         <div className="form-group ">
                         {this.state.aventon && <input type="text" readOnly className="form-control-plaintext" id="staticdireccion" value={this.state.aventon[0].direcion}/>}
                         </div>                            
                     </div>
                 </div>
                 <div className="row justify-content-center">
                     <div className="col-10 col-sm-10 col-xs-10 col-lg-8 col-md-8 card2 detalles">
                         <label id="textPass" htmlFor="exampleFormControlSelect1">numero de contacto</label>
                         <hr></hr>
                         <div className="form-group ">
                         {this.state.aventon && <input type="text" readOnly className="form-control-plaintext" id="staticNContacto" value={this.state.aventon[0].user.tlf} />}
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
                   : <Spinner></Spinner>}
                   
            </div>
        );
    }
}

export default withRouter(AventonDetalles);