import React, { Component } from 'react';
import './navbar.css';


class Navbar extends Component {
    zonas=()=>{
        let dato=null;
        let uri = 'http://127.0.0.1:8000/ajax/zonas';
        axios(uri).then(response=>{
            this.setState({
                zonas:response.data.zonas
            })
        });
    }
    constructor(props){
        super(props);
        this.state={
            zona:null,
            destino: null,
            pasajeroNum:null,
            zonas:null
        }
        this.zonas();
    }

    handleImputChange = event=> {
        event.preventDefault();
        const name= event.target.name;
        this.setState({
            [name]: event.target.value
        })
        console.log(name);
        console.log(event.target.value);
    }

    hadleNewAventon=(e)=>{
        let data = new FormData();
        const {zona,destino,pasajeroNum}=this.state;
        data.append('zona', zona);
        data.append('destino', destino);
        data.append('pasajeroNum', pasajeroNum);
        let uri = 'http://127.0.0.1:8000/ajax/NewAventon';
        axios.post(uri, data).then((response) => {
            alert('Se creo satifactoriamente el aventon');
            $('#exampleModal').modal('hide'); 
        })
    }
    render() {
        return (
            <div className="bodyNavar">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark  fluid ">
                    <div className="container">
                        <button className="navbar-toggler" id="logo" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <button type="button" id="plusbutton2" data-toggle="modal" data-target="#exampleModal" data-toggle="modal" data-target="#exampleModal"className="btn btn-danger"><i className="far fa-plus-square fa-lg "></i></button>
                        

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

                            <button type="button" id="plusbutton" data-toggle="modal" data-target="#exampleModal" className="btn btn-danger"><i className="far fa-plus-square fa-lg "></i></button>

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


                {/* Modal */}
 
                 <div className="modal fade navbar" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div className="modal-dialog" role="document">
                         <div className="modal-content">
                             <div className="modal-header">
                                 <h5 className="modal-title" id="exampleModalLabel">Nuevo Aventon</h5>
                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                     <span aria-hidden="true">&times;</span>
                                 </button>
                             </div>
                         <div className="modal-body">

                             <div className="form-group ">
                                 <label id="textPass" htmlFor="exampleFormControlSelect1">Zona Destino</label>
                                 <select onChange={this.handleImputChange} className="form-control " name="zona">
                                    {console.log(this.state.zonas)}
                                    <option  value=''>Seleccione una opción</option>
                                    {
                                      
                                        this.state.zonas!=null && this.state.zonas.map((zona)=>{
                                            return  <option key={zona.id} value={zona.id}>{zona.descripcion}</option>
                                        })
                                    }

                                 </select>
                             </div>
                             <label id="textPass" htmlFor="exampleFormControlSelect1">Direccion Destino</label>
                             <div className="form-group formulario">
                                 <input onChange={this.handleImputChange} type="text" className="form-control" name="destino" placeholder="Destino"/>
                             </div>   
                             <div className="form-group">
                                 <label id="textPass" htmlFor="exampleFormControlSelect1">Numero De Pasajeros</label>
                                 <select onChange={this.handleImputChange} className="form-control" name="pasajeroNum">
                                     <option>1</option>
                                     <option>2</option>
                                     <option>3</option>
                                     <option>4</option>
                                     <option>5</option>
                                 </select>
                             </div>        

                         </div>
                             <div className="modal-footer">
                                 <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                 <button onClick={this.hadleNewAventon} type="button" className="btn btn-danger">Aceptar</button>
                             </div>
                         </div>
                     </div>
                 </div>
                {/* ------- */}

            </div>
           
        );
    }
}



export default Navbar;