import React from 'react'
import './Signup.css'
import {Link} from "react-router-dom"
function Signup(){
    return (
        <div className="sign-body">
        <h1>Sign Up</h1>
        <div className="account">
            <form action="">
                <label for="username">Username</label>
                <br/>
                <input id="username" type="text" placeholder="Username" required/>
                <br/>
                <br/>
                <label for="email">Email Id</label>
                <br/>
                <input id="email" type="text" placeholder="email" required/>
                <br/>
                <br/>
                <label for="password">Password</label>
                <br/>
                <input id="password" type="password" placeholder="password" required/>
                <br/>
                <button><b>Sign Up</b></button>

            </form>
            <p>Already have an account?<Link to="Signin">Sign In</Link></p>
        </div>
       
    </div>
                                )
}

export default Signup;
