import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { resetToken, setRememberMe, setSignedIn } from '../store/connexionSlice';


function UserSignInOut() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signedIn = useSelector((state) => state.connexion.signedIn)
    const userFirstName = useSelector((state) => state.userProfile.firstName)

    function handleSignInClick() {
        navigate("/connexion");
    }

    function handleSignOutClick() {
        dispatch(resetToken());
        dispatch(setSignedIn(false));
        dispatch(setRememberMe(false));
    }


    return (
        <div className='user-sign-in-out'>
            <div>
                <div className='sign-in'>
                    { signedIn ?
                        <div>
                            <i className="fa-solid fa-circle-user"></i>
                            {userFirstName}
                        </div>
                        :
                        <Link to="/connexion" onClick={handleSignInClick} >
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
