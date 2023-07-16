import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GreenButton from './GreenButton'

function SignInForm() {

    const [ userId, setUserId ] = useState()


    return (
        <div className='sign-in-form'>
            <i class="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div class="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div class="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div class="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>    
                <Link to={`/utilisateur/${userId}`}>
                    <GreenButton text="Sign In"/>
                </Link>
            </form>
        </div>
    )
}

export default SignInForm
