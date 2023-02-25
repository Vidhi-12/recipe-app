import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from 'axios';

export default function SignUp(){

    // const {register, handleSubmit, getValues, formState:{errors}} = useForm();
    const [signupDetails, setSignupDetails] = useState({
        email: '',
        password:'',
        repeatPassword:''
    });

    const navigate = useNavigate();

    // async function onSubmit(data){
    //     const {email, password, repeatPassword} = signupDetails;
    // }

    async function handleSubmit(e){
        e.preventDefault();
        console.log( signupDetails.email + " " + signupDetails.password + " " + signupDetails.repeatPassword);
        axios.post(`http://localhost:8000/api/signup/`,{
        email:signupDetails.email,
        password:signupDetails.password,
        repeatPassword:signupDetails.repeatPassword
    })
    .then((res) => navigate("/"))
    .catch((err) => alert("Email already exist"));
    }

    return(
        <>
        <section className="main-container">
            <div className="container">
                <div className="icon-div">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </div>
                <div className="form-div">
                    <h1>SIGN UP</h1>

                    <div className="form-container">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input type="email"
                            placeholder="EMAIL"
                            className="signup-field"
                            value={signupDetails.email}
                            // {...register("email",{
                            //     required:"Please enter email",
                            //     pattern: {
                            //         value: '/^[A-Z0-9._%+_]+@[A-Z0-9'
                            //     }
                            // })}
                            onChange={(e) => 
                            setSignupDetails({...signupDetails, email: e.target.value})}
                            /><br/>

                            <input type="password"
                            placeholder="PASSWORD"
                            className="signup-field"
                            value={signupDetails.password}
                            onChange={(e) => 
                                setSignupDetails({...signupDetails, password: e.target.value})}
                                /><br/>

                            <input type="password"
                            placeholder="REPEAT PASSWORD"
                            className="signup-field"
                            value={signupDetails.repeatPassword}
                            onChange={(e) => 
                                setSignupDetails({...signupDetails, repeatPassword: e.target.value})}/>

                            <p>
                            <input type="checkbox"/>
                            I agree with <Link>TERMS & CONDITIONS</Link>
                            </p>

                            <div className="signup">
                            <button type="submit" className="signup-btn"> CONTINUE</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}