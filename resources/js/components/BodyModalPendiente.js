import React, { Component } from 'react';
class bodyModalPendiente extends Component { 
    constructor(props){
        super(props);
        let clase='';
        if(this.props.user.status_pasagero=='1'){
            clase='cardModalWhite'
        }
        if(this.props.user.status_pasagero=='2'){
            clase='cardModalGreen'
        }
        if(this.props.user.status_pasagero=='3'){
            clase='cardModalred'
        }
        this.state={
            'clase':clase
        }
        console.log('fdjydytkdfukfchgcfjtdtgcghcdkytxcjh');
        console.log(this.props);
    }
render() {
    console.log('bodymdodal');
    console.log(this.props);
    return (
        <div>
            <div className="row justify-content-center">
                <div className={'col-11 cardModal '+this.state.clase}>
                    <div className="row">                        
                        <div className="col-5 form-group text-left">
                            <label id="textPass mod" htmlFor="exampleFormControlSelect1">Nombre Del Pasajero</label>
                            <input type="text" readOnly className="form-control-plaintext" id="staticNombrePasajero" value={this.props.user.pasajero.name}/>
                        </div>
                        <div className="col-6 form-group text-left">
                            <label id="textPass mod" htmlFor="exampleFormControlSelect1">Numero De Contacto</label>
                            <input type="text" readOnly className="form-control-plaintext" id="nContacto" value={this.props.user.pasajero.tlf}/>
                        </div> 
                    </div>   
                </div>
            </div>
        </div>

        );
    }
}

export default bodyModalPendiente;