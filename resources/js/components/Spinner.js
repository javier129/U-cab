import React, { Component } from 'react';
import './spinner.css';

class Spinner extends Component {
render() {
    return (
            <div className="container-fluid " >
                <div className="padre">
                    <div className="lds-dual-ring "></div>
                </div>

            </div>
    )}
}    

export default Spinner;