import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const PrivateRoute = ({component: Component,...rest,userStatus})=>{
    return(
        <Route {...rest} render={(props)=>( 
            userStatus?
            <Component {...props} ></Component>:
            <Redirect to={'/login'}/>
        )}/>
    )
   /* <Route {...rest} render={(props)=>( 
        sessionStorage.getItem('user')?
        <Component {...props} ></Component>:
        props.history.push('/login')
    )}/>*/
}

export default PrivateRoute;