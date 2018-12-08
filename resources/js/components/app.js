import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
export default class Example extends Component {
    render() {
       let x = document.getElementsByTagName("META")[2].attributes.content.nodeValue;
       console.log(x);
        return (
            <div className="container">
                   <Login></Login>
            </div>

        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
