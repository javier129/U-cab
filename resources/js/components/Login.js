import React, { Component } from 'react';
import './login.css';
import logo from './face.png';
class Login extends Component {

    
    
    constructor(){
        super();
        this.state={
            Email: '',
            password:''
        }

    }  
    
    handlelogin = event =>{
        const userInfo = {
            email: this.state.Email,
            password: this.state.password
        };
        let uri = 'http://192.168.1.48:8080/login';
        axios.post(uri, userInfo).then((response) => {
            sessionStorage.setItem('user', JSON.stringify(response.data.user));
        })
    }

    handleImputChange = event=> {
        event.preventDefault();
        const name= event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }
    render() {
        
        
        return (            

                <div className="row d-flex flex-column">
                  
                    <div className=" col-sm-12 col-lg-4 main-section p-2 justify-content-center offset-lg-4">
                        
                        <div className="modal-content  ">
                            <div className="d-flex justify-content-center  user-img" >
                            <img src={logo} />
                            </div>  
            
                            <div className="p-2 ">
                                <div className="form-group">
                                    <input type="text" name='Email' value={this.state.Email} onChange={this.handleImputChange} className="form-control" placeholder="Email"/>    
                                </div>
                                <div className="form-group">
                                    <input type="password" name='password' value={this.state.password} onChange={this.handleImputChange} className="form-control" placeholder="Password"/>    
                                </div>
                                <div className=" d-flex justify-content-center">
                                    <button className="btn" onClick={this.handlelogin}>
                                    <i className="fas fa-sign-in-alt "></i>
                                    Login
                                    </button>
                                </div>
                            </div>
            
                            <div className="d-flex flex-column forgot p-2 justify-content-center">
                                <div className="p-2 d-flex justify-content-center">
                                    <a href="#">Forgot Password?</a>  
                                </div>
                                <div className="p-2 d-flex justify-content-center">  
                                        <a href="#">Register</a> 
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Login;