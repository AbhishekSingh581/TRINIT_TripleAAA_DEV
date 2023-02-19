import React from "react";
import '../Pages/style.css';
import BG from "../img/bg.svg";
import Wave from "../img/wave.png";

const Login = (props) => {
    
    return (
        <div>
            <img class="wave" src={Wave} />
            <div class="container">
                <div class="img">
                    <img src={BG} />
                </div>
                <div class="login-content">
                    <form action="index.html">
                        <h2 class="title">Welcome</h2>
                        <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                                <input type="text" class="input" placeholder="Username" />
                        </div>
                        </div>
                        <div class="input-div pass">
                        <div class="i"> 
                                <i class="fas fa-lock"></i>
                        </div>
                        <div class="div">
                                <input type="password" class="input" placeholder="Password"/>
                        </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <input type="submit" class="btn" value="Login" />
                    </form>
                </div>
            </div>
    </div>
    )
};

export default Login;