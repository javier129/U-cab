import React, { Component } from 'react';
import './ajustes.css';
import Axios from 'axios';



class Ajustes extends Component {
    constructor(){
        super();
        this.State={
            file:null,
            name:null,
            cedula: null,
            email:null,
            password:null
        }
    }
    handleImputChange = event=> {
        event.preventDefault();
        const name= event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }
    fileChangedHandler = (event) => {
        this.setState({file: event.target.files[0]});
        console.log(event.target.files);
      }
    registrar= (e)=>{
        e.preventDefault();
        console.log(this.state.file);
        const {file,name,cedula,email,password}=this.state;
        console.log(file);
        let data = new FormData();
        data.append('file', file);
        data.append('name', name);
        data.append('cedula', cedula);
        data.append('email', email);
        data.append('password', password);
        Axios.post('http://127.0.0.1:8000/ajax/register',data).then(response=>{
            if(response.data){
                location.href ="http://127.0.0.1:8000/login";
            }
        })
    }
    render() {
        return (
                <div className=" row justify-content-center bodyAjustes text-center">
                    <div className=" col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5  main-section  ajustes">
                        <div className="modal-content ajustes"> 

                                <div className="col-12">

                                <div id="foto" className="form-group ajustes">
                                    <img src="https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg"/>
                                </div>

                                <div id="divFile" className="form-group ajustes">
                                        <input type="file" id='file' className="form-control text-center center-block" onChange={this.fileChangedHandler} placeholder="imagen"/>       
                                </div> 

                                <div>
                                    <label>direccion para crear aventones</label>
                                </div>

                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Zona
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>

                                <div>
                                    <input type="text" className="form-control" name='direccion' placeholder="Direccion"/>    
                                </div> 

                                <div className="p-2">
                                    <label>si desea cambiar su Contraseña:</label>
                                </div>

                                <div className="form-group ajustes pass_show">
                                    <input type="password" className="form-control" onChange={this.handleImputChange} name='password' placeholder="Nueva Contraseña"/>    
                                </div>

                                <div className="form-group ajustes pass_show">
                                    <input type="password" className="form-control" name='passwordR' placeholder="Repita Contraseña"/>    
                                </div>   
                    
                                <div className="d-flex ">
                                    <div className=" mr-auto">
                                        <button type="button" className="btn ">
                                            <i className="fas fa-ban "></i>
                                            Cancel
                                        </button>
                                    </div>
                                    <div className=" ml-auto">
                                        <button onClick={this.registrar} type="submit" className="btn ">
                                        <i className="fas fa-check "></i>
                                        Aplicar
                                        </button>
                                    </div>
                                </div> 
                                </div>
                            </div>

                            </div>
                        </div>

 



        );
    }    
}



export default Ajustes;