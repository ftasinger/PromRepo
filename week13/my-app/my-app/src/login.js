import React, { Component } from "react";





export default class Login extends Component {
    render() {
        return (

            <div className="form">
                <form id="form">
                    <h3>Login</h3>

                    <div id="login">
                        <input id="usernameInput" type="text" placeholder="  Username"></input><br></br>
                        <input id="passwordInput" type="text"  placeholder="  Password"></input><br></br>

                        <button id="loginButton" type="submit" className="btn btn-info">Login</button>
                        <br></br>
                        <br></br>
                        <a href="#" >Forgot Username</a> <a href="#">Forgot Password</a> 
                        <p>Don't have an account? <a href="#">Signup</a></p>
                    </div>
                </form>
            </div> 
        )
    }
}