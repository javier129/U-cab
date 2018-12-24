import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="bodyNavar">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark  fluid ">
                    <div className="container">
                        <button className="navbar-toggler" id="logo" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <button type="button" id="plusbutton2" className="btn btn-danger"><i className="far fa-plus-square fa-lg "></i></button>
                        

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <a className="navbar-brand" href="#">Ucab</a>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Tablero <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Pendiente</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Completados</a>
                                </li>
                            </ul>

                            <button type="button" id="plusbutton" className="btn btn-danger"><i className="far fa-plus-square fa-lg "></i></button>

                            <div className="dropdown">
                                <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    NombreUsuario
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Nombre</a>
                                    <a className="dropdown-item" href="#">Correo</a>
                                    <a className="dropdown-item" href="#">Perfil</a>
                                    <div className="dropdown-divider"></div>
                                    <button id="cerrars" className=" btn btn-danger" type="button" >Cerrar Sesion</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
           
        );
    }
}

$(document).ready(function() {   
    let sideslider = $('[data-toggle=collapse-side]');
    let sel = sideslider.attr('data-target');
    let sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event){
        $(sel).toggleclassName('in');
        $(sel2).toggleclassName('out');
    });
});

export default Navbar;