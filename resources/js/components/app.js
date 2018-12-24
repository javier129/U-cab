import React, { Component } from 'react';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            user:this.props.user
        }
    }
    componentDidMount(){
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
    }
    render() {
       let x = document.getElementsByTagName("META")[2].attributes.content.nodeValue;
       console.log(x);
       if(sessionStorage.getItem('user')){
            
       }
        return (
            <div className="container">
                 esta logeado
                 { this.state.user && <img src={`/storage/${this.state.user.img}`}  alt=""/>}
            </div>
        );
    }
}