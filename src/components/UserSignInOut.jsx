import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function UserSignInOut() {

    const dispatch = useDispatch();

    const signedIn = useSelector((state) => state.connexion.token)
    const userFirstName = useSelector((state) => state.userProfile.firstName)

    function handleSignInClick() {

    }

    function handleSignOutClick() {

    }


    return (
        <div className='user-sign-in-out'>
            <Link to="/connexion" onClick={handleSignInClick}>
                <div className='sign-in'>
                    <i className="fa-solid fa-circle-user"></i>
                    { signedIn ? {userFirstName} : "Sign In" }
                </div>
            </Link>
            <Link to="/">
                <div className='sign-out' onClick={handleSignOutClick}>
                    { signedIn ? <i className="fa-solid fa-right-from-bracket"></i> : "" }
                    { signedIn ? "Sign Out" : "" }
                </div>
            </Link>
        </div>
    )
}

export default UserSignInOut
