import React from 'react'
import './Signin.css'
import {Link} from "react-router-dom"
function Signin(){
    return (
        <div className="Register-body">
        <h1>Sign In</h1>
        <div className="account">
            <form action="">
            
                <label for="email">Email Id</label>
                <br/>
                <input id="email" type="text" placeholder="email" required/>
                <br/>
                <br/>
                <label for="password">Password</label>
                <br/>
                <input id="password" type="password" placeholder="password" required/>
                <br/>
                <button><b>Sign In</b></button>

            </form>
             <Link to="/Signup"><p>New User?Create an account</p> </Link>
        </div>
       
    </div>
                                )
}

export default Signin;
