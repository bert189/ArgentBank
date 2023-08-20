import React, { useEffect, useState } from 'react'
import GreenButton from './GreenButton'
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../store/userProfileSlice";
import { updateUserProfile } from '../api/argentBank.api';


function UserNameEditor() {

    const dispatch = useDispatch();

    const userProfile = useSelector(state => state.userProfile);

    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');

    // Mettre à jour les états locaux lorsque les données de l'utilisateur changent
    useEffect(() => {
        setFirstName(userProfile.firstName);
        setLastName(userProfile.lastName);
    }, [userProfile.firstName, userProfile.lastName]);
    
    const [editorOpen, setEditorOpen] = useState(false);
    const [errorNames, setErrorNames] = useState(false);
    const [errorFirstName, setErrorFirstName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);

    const token = useSelector((state) => state.connexion.token) // nécesssaire pour l'update profile (PUT)


    // update des states names au changement dans les champs texte
    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    };
    function handleLastNameChange(event) {
        setLastName(event.target.value);
    };

    // ouverture/fermeture du "user name editor"
    function toggleEditor() {
        if (editorOpen === false) {
            setEditorOpen(true);
        }
        else {
            setEditorOpen(false);
        }
    }

    // helper vérirification du format des nom + prénom
    function testName(name) {
        if (/^[a-zA-Z]{1,}[- ']{0,1}[a-zA-Z]{1,}$/.test(name)) {
            return true;
        } else {
            setErrorNames(true);
            return false;
        }
    }

    // helper pour enlever les signaux d'erreur du formulaire en cas de focus sur un des champs
    function handleInputFocus(event) {
        if (event.target.name === "firstName") {
            setErrorFirstName(false);
        }
        else if (event.target.name === "lastName") {
            setErrorLastName(false);
        }
    }

    useEffect(() => { // permet d'attendre que les states locaux se mettent à jour avant de les utiliser
        if (!errorFirstName && !errorLastName) {
            setErrorNames(false);
        }
    }, [errorFirstName, errorLastName]);

    // CANCEL
    function handleCancelClick() {
        setFirstName(userProfile.firstName);
        setLastName(userProfile.lastName);
        setErrorNames(false);
        setErrorFirstName(false);
        setErrorLastName(false);
        toggleEditor();
    }


    // SAVE
    function handleSaveClick() {

        if ( firstName === userProfile.firstName && lastName === userProfile.lastName ) {
            toggleEditor(); // évite un update API inutile
        }
        
        else if (!testName(firstName) && !testName(lastName)) {
            setErrorFirstName(true);
            setErrorLastName(true);
        }
        else if (!testName(firstName)) {
            setErrorFirstName(true);
        }
        else if (!testName(lastName)) {
            setErrorLastName(true);
        }

        else if ( testName(firstName) && testName(lastName) ) {

            // envoi des nom prénom vers le state
            dispatch(setUserProfile({ firstName, lastName }))

            // envoi des nom prénom vers le serveur
            updateUserProfile(token, firstName, lastName)

            // ferme l'editeur
            toggleEditor();
        }
    }

    
    return (
        <div>
            { !editorOpen ?
                (
                    <section className='welcome-edit'>
                        <h1>
                            Welcome back
                            <span>{userProfile.firstName}&nbsp;{userProfile.lastName}&nbsp;!</span>
                        </h1>
                        <GreenButton text="Edit Name" onClick={toggleEditor}/>
                    </section>
                ) : (
                    <section className='welcome-edit'>
                        <h1>
                            Welcome back                            
                        </h1>
                        <div className='edit-section'>
                            <div className='error-names'>
                                { errorNames ? <>&#9888;&nbsp;Error: Invalid name format &nbsp;&#9888;</> : ""}
                            </div>
                            <div className='edit-input-wrapper'>
                                <input
                                    className={ errorFirstName ? "name-input-error" : "" }
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    onFocus={handleInputFocus}
                                />                            
                                <input
                                    className={ errorLastName ? "name-input-error" : "" } 
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>
                            <div className='edit-button-wrapper'>
                                <GreenButton text="Save" onClick={handleSaveClick} />
                                <GreenButton text="Cancel" onClick={handleCancelClick} />
                            </div> 
                        </div>
                    </section>
                )
            }
        </div>
    )
}

export default UserNameEditor
