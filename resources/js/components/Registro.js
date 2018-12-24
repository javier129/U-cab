import React, { Component } from 'react';
import './registro.css';



class Registro extends Component {
    render() {
        return (
                
                <div className=" row  d-flex justify-content-center  align-items-center registro">
                    <div className=" col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5  main-section  registro">
                        <div className="modal-content registro"> 

                                <div className="col-12">

                                <div id="p1" className=" form-group registro">
                                    <input type="text" className="form-control" placeholder="Nombre Completo"/>    
                                </div>

                                <div id="dni" className="form-group registro">
                                    <input type="number" className="form-control" placeholder="Cedula"/>    
                                </div>

                                <div id="userName" className="form-group registro">
                                    <input type="text" className="form-control" placeholder="Nombre de Usuario"/>    
                                </div>

                                <div id="email" className="form-group registro">
                                    <input type="email" className="form-control" placeholder="Email"/>    
                                </div>

                                <div className="form-group registro pass_show ">
                                    <input type="password" className="form-control" placeholder="Contraseña"/>    
                                </div>

                                <div className="form-group registro pass_show">
                                    <input type="password" className="form-control" placeholder="Repita Contraseña"/>    
                                </div>   
                                
        
                    
                                <div className="d-flex ">
                                    <div className=" mr-auto">
                                        <button type="button" className="btn ">
                                            <i className="fas fa-sign-in-alt "></i>
                                            Cancel
                                        </button>
                                    </div>
                                    <div className=" ml-auto">
                                        <button type="submit" className="btn ">
                                        <i className="fas fa-sign-in-alt "></i>
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

$(document).ready(function(){
    $('.pass_show').append('<span class="ptxt ">Mostrar</span>');  
    });
      
    
    $(document).on('click','.pass_show .ptxt', function(){ 
    
    $(this).text($(this).text() == "Mostrar" ? "Esconder" : "Mostrar"); 
    
    $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 
    
    });

export default Registro;
