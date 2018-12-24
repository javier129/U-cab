import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Registro from './Registro';
//import Navbar from './Navbar';
//import CardsView from './CardsView'
//import CardAventon from './CardAventon';
//import Chat from './chat';
import Login from './Login';
export default class Example extends Component {
    render() {
       let x = document.getElementsByTagName("META")[2].attributes.content.nodeValue;
       console.log(x);
        return (
            <div className="container">
                <Registro></Registro>
            </div>

        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
