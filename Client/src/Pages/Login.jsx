import React from "react";
import '../Pages/style.css';
import BG from "../img/bg.svg";
import Wave from "../img/wave.png";

const loginToDB=(email,password)=>{
    return fetch('https://carboninsight-backend.onrender.com/api/v1/carbonInsight/getLogin',{
                method:'POST',
                headers:{
                        'Authorization':'Basic '+  btoa(`${email}:${password}`)
                }
        }).then(res=>{
                return res;
        }).catch(err=>{console.log(err)})
}

const loginToDashBoard=(e)=>{
    e.preventDefault();
    const emailEntered=document.getElementById('emailEnteredInLogin').value;
    const passwordEntered=document.getElementById('passwordEnteredInLogin').value
    loginToDB(emailEntered,passwordEntered)            
                .then(res=>{
                        console.log(res.status)
                        if(res.status===200){
                                document.getElementById('loginForm').submit() 
                        }   
                        else{
                                document.getElementById('MsgInLogin').innerText="* Email or password entered is wrong."  
                        }            
                })
                .catch(err=>console.log(err))
}

const Login = (props) => {
    
    return (
        <div>
            <img class="wave" src={Wave} />
            <div class="container">
                <div class="img">
                    <img src={BG} />
                </div>
                <div class="login-content">
                    <form id="loginForm" action="/dashboard" onSubmit={loginToDashBoard}>
                        <h2 class="title">Welcome</h2>
                        <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                                <input type="text" class="input" id="emailEnteredInLogin" placeholder="Email" />
                        </div>
                        </div>
                        <div class="input-div pass">
                        <div class="i"> 
                                <i class="fas fa-lock"></i>
                        </div>
                        <div class="div">
                                <input type="password" class="input" id="passwordEnteredInLogin" placeholder="Password"/>
                        </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <span id="MsgInLogin"></span>
                        <button className="submitBtn" type="submit">Sign up</button>
                    </form>
                </div>
            </div>
    </div>
    )
};

export default Login;