import React, { useState } from 'react'
import GreenButton from './GreenButton'
import { getUserProfile, userLogToken } from '../api/argentBank.api';
import { setToken, setSignedIn } from '../store/connexionSlice';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../store/userProfileSlice';

function SignInForm() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState(null);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)

    // helper verification validité du format email
    function isValidEmail(email) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    }

    // helper pour enlever les signaux d'erreur du formulaire en cas de focus sur un des champs
    function handleInputFocus() {
        setFormError(null); // Reinitialise l'erreur d'authentification
        setEmailError(false);
        setPasswordError(false);
    }    

    // traîtement de la checkbox "Remember me"
    function handleCheckboxChange() {
        setRememberMe(!rememberMe)
    }
        
    // traitement du formulaire de connexion
    async function handleSubmit(event) {
        event.preventDefault();
        
        // vérification du format de l'email avant envoi du formulaire
        if (!isValidEmail(email)) {
            setFormError("Error: Invalid email format");
            setEmailError(true);
            return; // arrête la fonction handleSubmit en cas d'email non valide
        }
        
        try {
            const {token, error} = await userLogToken(email, password);
            
            if (token) {               
                // mettre à jour le state.token state.signedIn
                dispatch(setToken(token))
                dispatch(setSignedIn(true))

                // si checkbox checked : conservation du state token nécéssaire pour reconnexion automatique
                if (rememberMe) {
                    // Sauvegarder le token dans le LocalStorage
                    localStorage.setItem('token', token);
                }
                
                // récupérer le profil utilisateur (prénom + nom) et mettre à jour le store
                const {firstName, lastName} = await getUserProfile(token);
                dispatch(setUserProfile({ firstName, lastName }))
                
            }
            else if (error) {
                // Gérer les erreurs d'authentification
                setFormError(error);
                
                if (error.includes("User")) {
                    setEmailError(true)
                }
                else if (error.includes("Password")) {
                    setPasswordError(true)
                }
            }
            
        } catch (error) {
            console.log("unexpected problem, try again")
        }
    }
    

    return (
        <div className='sign-in-form'>
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className='errors'>
                    { formError ? <>&#9888;&nbsp;{formError}&nbsp;&#9888;</> : ""}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        className={ emailError ? "input-error" : "" }
                        type="text"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        className={ passwordError ? "input-error" : "" }
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                        className="remember-me"
                        checked={rememberMe}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>    
                <GreenButton text="Sign In" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default SignInForm
