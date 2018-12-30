
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import { BrowserRouter, Route,Router, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Registro from './components/Registro';
import App from './components/app';
//import Error from './components/Error';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Ajustes from './components/ajustes';
import Navbar from './components/Navbar';
import AventonDetalles from './components/AventonDetalles';



export default class Example extends Component {
    constructor(){
        super();
        let login=false;
        console.log(sessionStorage.getItem('user'));
        if(sessionStorage.getItem('user')){
            login= true
        }
        this.state={
            loginSuscess:login,
            user: null
        }
    }
     revisarStatus = ()=>{
        let dato=null;
        let uri = 'http://127.0.0.1:8000/ajax/usuario';
        axios(uri).then(response=>{
            if(response.data){
               this.setState({
                loginSuscess :true
               })
            }
        })
    }
    /*componentWillMount(){
        this.revisarStatus();
    }*/
    handleUserLogin = (userInfo)=>{
        let uri = 'http://127.0.0.1:8000/ajax/login';
        axios.post(uri, userInfo).then((response) => {
            console.log(response.data);
            this.setState({
                loginSuscess:true,
                user:response.data.user
            })
            console.log(this.state.user);
            sessionStorage.setItem('user', JSON.stringify(response.data.user));
        })
    }
    render() {
       let x = document.getElementsByTagName("META")[2].attributes.content.nodeValue;
       console.log(x);
      console.log(this.state.loginSuscess);
        return (
            <BrowserRouter>

                <Registro></Registro>
                
            </BrowserRouter>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
