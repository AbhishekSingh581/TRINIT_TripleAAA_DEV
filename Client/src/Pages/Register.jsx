import React from "react";
import '../Pages/style.css';
import BG from "../img/bg.svg";
import Wave from "../img/wave.png";
import { useRef } from "react";
const Register = (props) => {
        const enteredName=useRef();
        const enteredEmail=useRef();
        const enteredPassword=useRef();
        const enteredCPassword=useRef();
        function postingToDB(name,email,Password) {
                return fetch('https://carboninsight-backend.onrender.com/api/v1/carbonInsight/getRegistration',{
                        method:'POST',
                        headers:{
                                'Authorization':'Basic '+  btoa(`${name}:${email}:${Password}`)
                        }
                }).then(res=>{
                        return res;
                }).catch(err=>{console.log(err)})
        }
        const registration=async(e)=>{
                e.preventDefault();
                // const enteredName=document.getElementById('registrationName').value;
                // const enteredEmail=document.getElementById('registrationEmail').value;
                // const enteredPassword=document.getElementById('registrationPassword').value;
                // const enteredCPassword=document.getElementById('registrationCPassword').value;
                if (enteredPassword.current.value!=enteredCPassword.current.value) {
                        document.getElementById('Msg').innerText="* Password and Confirm Password are not matched."
                }
                else{
                        postingToDB(enteredName.current.value,enteredEmail.current.value,enteredPassword.current.value)            
                        .then(res=>{
                                console.log(res.status)
                                if(res.status===200){
                                        localStorage.setItem("emailData",enteredEmail.current.value);
                                        localStorage.setItem("passwordData",enteredPassword.current.value)
                                        document.getElementById('registrationForm').submit() 
                                }   
                                else{
                                        document.getElementById('Msg').innerText="* Email already exist , enter different email."  
                                }            
                        })
                        .catch(err=>console.log(err))
                }
        }
        
        // document.getElementById('registrationForm').addEventListener('submit',e=>{
        //         e.preventDefault()
        // })

    return (            
        <div>
            <img class="wave" src={Wave} />
            <div class="container">
                <div class="img">
                    <img src={BG} />
                </div>
                <div class="login-content">
                    <form id="registrationForm" method="get" action="/" onSubmit={registration}>
                        <h2 class="title">Welcome</h2>
                        <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                                <input type="text" id="registrationName" class="input" placeholder="Name" required ref={enteredName}/>
                        </div>
                        </div>
                        <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                                <input type="text" id="registrationEmail" class="input" placeholder="Email" required ref={enteredEmail}/>
                        </div>
                        </div>
                        <div class="input-div pass">
                        <div class="i"> 
                                <i class="fas fa-lock"></i>
                        </div>
                        <div class="div">
                                <input type="password" id="registrationPassword" class="input" placeholder="Password" required ref={enteredPassword}/>
                        </div>
                        </div>
                        <div class="input-div pass">
                        <div class="i"> 
                                <i class="fas fa-lock"></i>
                        </div>
                        <div class="div"> 
                                <input type="password" id="registrationCPassword" class="input" placeholder="Confirm Password" required ref={enteredCPassword}/>
                        </div>
                        </div>
                        <span id="Msg"></span>
                        <button className="submitBtn" type="submit">Sign up</button>
                    </form>
                </div>
            </div>
    </div>
    )
};

export default Register;