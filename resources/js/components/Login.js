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
        let uri = 'http://127.0.0.1:8000/login';
        axios.post(uri, userInfo).then((response) => {
            console.log(response.data);
        }).catch(response=>{
            console.log(response.data);
        });
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
            
                            <form className="p-2 ">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter UserName"/>    
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Enter Password"/>    
                                </div>
                                <div className=" d-flex justify-content-center">
                                    <button type="submit" className="btn ">
                                    <i className="fas fa-sign-in-alt "></i>
                                    Login
                                    </button>
                                </div>
                            </form>
            
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