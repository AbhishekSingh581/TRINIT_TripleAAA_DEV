import React from "react";
import '../Pages/style.css';
import BG from "../img/bg.svg";
import Avatar from "../img/avatar.svg";
import Wave from "../img/wave.png";

const Register = (props) => {
    return (
        <div>
            <img class="wave" src={Wave} />
            <div class="container">
                <div class="img">
                    <img src={BG} />
                </div>
                <div class="login-content">
                    <form action="index.html">
                        <img src={Avatar} />
                        <h2 class="title">Welcome</h2>
                        <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                                <h5>Username</h5>
                                <input type="text" class="input" />
                        </div>
                        </div>
                        <div class="input-div pass">
                        <div class="i"> 
                                <i class="fas fa-lock"></i>
                        </div>
                        <div class="div">
                                <h5>Password</h5>
                                <input type="password" class="input" />
                        </div>
                        </div>
                        <div class="input-div pass">
                        <div class="i"> 
                                <i class="fas fa-lock"></i>
                        </div>
                        <div class="div">
                                <h5>Confirm Password</h5>
                                <input type="password" class="input" />
                        </div>
                        </div>
                        <input type="submit" class="btn" value="Sign up" />
                    </form>
                </div>
            </div>
    </div>
    )
};

export default Register;