import React from "react";
import '../Pages/style.css';
import BG from "../img/bg.svg";
import Wave from "../img/wave.png";
function postingToDB(email,Password) {
        return fetch('https://carboninsight-backend.onrender.com/api/v1/carbonInsight/getRegistration',{
                method:'POST',
                headers:{
                        'Authorization':'Basic '+  btoa(`${email}:${Password}`)
                }
        }).then(res=>{
                return res;
        }).catch(err=>{console.log(err)})
}
const registration=async(e)=>{
        e.preventDefault();
        const enteredEmail=document.getElementById('registrationEmail').value;
        const enteredPassword=document.getElementById('registrationPassword').value;
        const enteredCPassword=document.getElementById('registrationCPassword').value;
        if (enteredPassword!=enteredCPassword) {
                document.getElementById('Msg').innerText="* Password and Confirm Password are not matched."
        }
        else{
                postingToDB(enteredEmail,enteredPassword)            
                .then(res=>{
                        console.log(res.status)
                        if(res.status===200){
                                document.getElementById('registrationForm').submit() 
                        }   
                        else{
                                document.getElementById('Msg').innerText="* Email already exist , enter different email."  
                        }            
                })
                .catch(err=>console.log(err))
        }
}
const Register = (props) => {
        
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
                    <form id="registrationForm" method="get" action="/dashboard" onSubmit={registration}>
                        <h2 class="title">Welcome</h2>
                        <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                                <input type="text" id="registrationEmail" class="input" placeholder="Email" required/>
                        </div>
                        </div>
                        <div class="input-div pass">
                        <div class="i"> 
                                <i class="fas fa-lock"></i>
                        </div>
                        <div class="div">
                                <input type="password" id="registrationPassword" class="input" placeholder="Password" required/>
                        </div>
                        </div>
                        <div class="input-div pass">
                        <div class="i"> 
                                <i class="fas fa-lock"></i>
                        </div>
                        <div class="div"> 
                                <input type="password" id="registrationCPassword" class="input" placeholder="Confirm Password" required/>
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