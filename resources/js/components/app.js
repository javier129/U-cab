import React, { Component } from 'react';
import Navbar from './Navbar';
import CardsView from './CardsView';
//import AventonDetalles from './AventonDetalles'
import { Route, Redirect } from 'react-router-dom'
export default class App extends Component {
    aventones=()=>{
        let dato=null;
        let uri = 'http://127.0.0.1:8000/ajax/aventones';
        axios(uri).then(response=>{
            if(response.data){
               this.setState({
                aventones :response.data.aventones,
                tipoUsuario:null
               })
            }
        })
    }
    halndlePendiente=(e)=>{
        let dato=null;
        let uri2 = 'http://127.0.0.1:8000/ajax/aventon/pendientes';
        axios(uri2).then(response=>{
            if(response.data.aventon){
                console.log('esto es pendientesmkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
                console.log(response.data);
               this.setState({
                aventones :response.data.aventon,
                tipoUsuario: response.data.tipo
               })
            }
        })
    }
    constructor(props){
        super(props);
        this.state={
            user:this.props.user,
            aventones:null,
            tipoUsuario:null
        }
        this.aventones();
        //this.halndlePendiente();
    }
    
   /* componentDidMount(){
            let dato=null;
            let uri = 'http://127.0.0.1:8000/ajax/usuario';
            axios(uri).then(response=>{
                console.log(response.data);
                if(response.data){
                   this.setState({
                    user :response.data
                   })
                }
            })
    }*/

   
    render() {
       let x = document.getElementsByTagName("META")[2].attributes.content.nodeValue;
       console.log(x);
       console.log(this.props.match.path);
       if(sessionStorage.getItem('user')){
            // { this.state.user && <img src={`/storage/${this.state.user.img}`}  alt=""/>}
       }
        return (
            <div className="container">
                <Navbar tablero={this.aventones} pendiente={this.halndlePendiente}/>
                <CardsView tipoU={this.state.tipoUsuario} aventones={this.state.aventones}/>
            </div>
        );
    }
}