import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function UserSignInOut({signedIn, userFirstName}) {


    return (
        <div className='user-sign-in-out'>
            <Link to="/connexion">
                <div className='sign-in'>
                    <i className="fa-solid fa-circle-user"></i>
                    { signedIn ? {userFirstName} : "Sign In" }
                </div>
            </Link>
            <Link to="/">
                <div className='sign-out'>
                    { signedIn ? <i className="fa-solid fa-right-from-bracket"></i> : "" }
                    { signedIn ? "Sign Out" : "" }
                </div>
            </Link>
        </div>
    )
}

export default UserSignInOut
