import { Navigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import { Component } from 'react';
class AppWrapper extends Component{
    render(){
      const getEmail=localStorage.getItem('emailData');
      const getPassword=localStorage.getItem('passwordData');
        if(getEmail&& getPassword)
            return <Navigate to="/dashboard" />

   return(
       <HomePage/>
   );
  }
}
export default AppWrapper