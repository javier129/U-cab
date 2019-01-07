import React, { Component } from 'react';
import Navbar from './Navbar';
import CardsView from './CardsView';
//import AventonDetalles from './AventonDetalles'
import { Route, Redirect } from 'react-router-dom'
export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            user:this.props.user
        }
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
                <Navbar/>
                <CardsView/>
            </div>
        );
    }
}