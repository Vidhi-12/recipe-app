import React from "react";
import { Link } from "react-router-dom";

export default function SignIn(){

    return(
        <>
        <section className="main-container-signin">
            <div className="container-signin">
                <div className="form-div-signin">
                    <h1>SIGN IN</h1>

                    <div className="form-container-signin">
                        <form>
                            <label for="email">Email address </label><br/>
                            <input type="email"
                            name="email"
                            placeholder="Enter Email"/>
                           <br/>
                            <label for="password">Password</label><br/>
                            <input type="email"
                            name="password"
                            placeholder="Enter Password"/>
                            <br/>
                            <p>
                            <input type="checkbox"/>
                            Remember Me
                            </p>
                            <div className="signin">
                            <button type="submit" className="signin-btn"> Submit</button>
                            </div>
                            <div className="forgot-password">Forgot <span>password?</span></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}