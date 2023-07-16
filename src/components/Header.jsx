import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserSignInOut from './UserSignInOut';


function Header() {

    const [signedIn, setSignedIn] = useState();
    const [userfirstname, setUserFirstName] = useState();

    return (
        <header className="header">
            <Link to="/"><img src="../img/argentBankLogo.png" alt="Argent Bank Logo" className='logo' /></Link>
            <UserSignInOut />

        </header>
    )
}

export default Header
