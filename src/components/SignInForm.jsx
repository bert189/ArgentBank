import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GreenButton from './GreenButton'

function SignInForm() {



    return (
        <div className='sign-in-form'>
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>    
                <Link to={`/utilisateur/${userId}`}>
                    <GreenButton text="Sign In"/>
                </Link>
            </form>
        </div>
    )
}

export default SignInForm
