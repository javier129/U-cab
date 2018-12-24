import React, { Component } from 'react';
import './registro.css';
import Axios from 'axios';



class Registro extends Component {
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
                <div className=" row  d-flex justify-content-center  align-items-center">
                    <div className=" col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5  main-section  registro">
                        <div className="modal-content registro"> 

                                <div className="col-12">

                                <div id="p1" className=" form-group registro">
                                    <input type="text" className="form-control" onChange={this.handleImputChange} name='name' placeholder="Nombre Completo"/>    
                                </div>

                                <div id="dni" className="form-group registro">
                                    <input type="number" className="form-control" onChange={this.handleImputChange} name='cedula' placeholder="Cedula"/>    
                                </div>

                                <div id="divFile" className="form-group registro">
                                        <input type="file" id='file' className="form-control text-center center-block" onChange={this.fileChangedHandler} placeholder="imagen"/>       
                                </div> 

                                <div id="userName" className="form-group registro">
                                    <input type="text" className="form-control" name='user' placeholder="Nombre de Usuario"/>    
                                </div>

                                <div id="email" className="form-group registro">
                                    <input type="email" className="form-control" onChange={this.handleImputChange} name='email' placeholder="Email"/>    
                                </div>

                                <div className="form-group registro pass_show">
                                    <input type="password" className="form-control" onChange={this.handleImputChange} name='password' placeholder="Contraseña"/>    
                                </div>

                                <div className="form-group registro pass_show">
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
                                        Registrar
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



export default Registro;
