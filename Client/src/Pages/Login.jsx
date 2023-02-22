import React from "react";
import '../Pages/style.css';
import BG from "../img/bg.svg";
import Wave from "../img/wave.png";
import { useRef } from "react";


const Login = (props) => {
        const emailEntered=useRef();
        const passwordEntered=useRef();
        
        const loginToDB=(email,password)=>{
            return fetch('http://localhost:5000/api/v1/carbonInsight/getLogin',{
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
        //     const emailEntered=document.getElementById('emailEnteredInLogin').value;
        //     const passwordEntered=document.getElementById('passwordEnteredInLogin').value
            loginToDB(emailEntered.current.value,passwordEntered.current.value)            
                        .then(res=>{
                                console.log(res.status)
                                if(res.status===200){
                                        localStorage.setItem("emailData",emailEntered.current.value);
                                        localStorage.setItem("passwordData",passwordEntered.current.value)
                                        document.getElementById('loginForm').submit() 
                                }   
                                else{
                                        document.getElementById('MsgInLogin').innerText="* Email or password entered is wrong."  
                                }            
                        })
                        .catch(err=>console.log(err))
        }
    
    return (
        <div>
            <img class="wave" src={Wave} />
            <div class="container">
                <div class="img">
                    <img src={BG} />
                </div>
                <div class="login-content">
                    <form id="loginForm" action="/" onSubmit={loginToDashBoard}>
                        <h2 class="title">Welcome</h2>
                        <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                                <input type="text" class="input" id="emailEnteredInLogin" placeholder="Email" ref={emailEntered}/>
                        </div>
                        </div>
                        <div class="input-div pass">
                        <div class="i"> 
                                <i class="fas fa-lock"></i>
                        </div>
                        <div class="div">
                                <input type="password" class="input" id="passwordEnteredInLogin" placeholder="Password" ref={passwordEntered}/>
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