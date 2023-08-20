import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { clearToken, setSignedIn } from '../store/connexionSlice';
import { resetUserProfile } from '../store/userProfileSlice';


function UserSignInOut() {

    const dispatch = useDispatch();

    const signedIn = useSelector((state) => state.connexion.signedIn)
    const userFirstName = useSelector((state) => state.userProfile.firstName)


    function handleSignOutClick() {
        dispatch(clearToken());
        localStorage.removeItem('token'); // localStorage.clear();
        dispatch(setSignedIn(false));
        dispatch(resetUserProfile());
    }


    return (
        <div className='user-sign-in-out'>
            <div>
                <div className='sign-in'>
                    { signedIn ?
                        <Link to="/user-page">
                            <i className="fa-solid fa-circle-user"></i>
                            {userFirstName}
                        </Link>
                        :
                        <Link to="/user-page" >
                            <i className="fa-solid fa-circle-user"></i>
                            Sign In
                        </Link>
                    }
                </div>
            </div>
            <div>
                <div className='sign-out' onClick={handleSignOutClick}>
                    { signedIn ?
                        <Link to="/">
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Sign Out
                        </Link>
                        :
                        <></> }
                </div>
            </div>
        </div>
    )
}

export default UserSignInOut
