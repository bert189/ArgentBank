import React, { useState } from 'react'
import GreenButton from './GreenButton'
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../store/userProfileSlice";
import { updateUserProfile } from '../api/argentBank.api';


function UserNameEditor() {

    const dispatch = useDispatch();

    const userFirstName = useSelector((state) => state.userProfile.firstName)
    const userLastName = useSelector((state) => state.userProfile.lastName)

    const [firstName, setFirstName] = useState(userFirstName); 
    const [lastName, setLastName] = useState(userLastName);
    
    const [editorOpen, setEditorOpen] = useState(false);
    const [errorNames, setErrorNames] = useState(false);
    const [errorFirstName, setErrorFirstName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);

    const token = useSelector((state) => state.connexion.token) // nécesssaire pour l'update profile (PUT)


    // update des states names au changement dasn les champs texte
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
    function handleInputFocus() {
        setErrorNames(false);
        setErrorFirstName(false);
        setErrorLastName(false);
    }

    // CANCEL
    function handleCancelClick() {
        setFirstName(userFirstName);
        setLastName(userLastName);
        setErrorNames(false);
        setErrorFirstName(false);
        setErrorLastName(false);
        toggleEditor();
    }


    // SAVE
    function handleSaveClick() {
        
        if ( testName(firstName) && testName(lastName) ) {

            // envoi des nom prénom vers le state
            dispatch(setUserProfile({ firstName, lastName }))

            // envoi des nom prénom vers le serveur
            updateUserProfile(token, firstName, lastName)

            // ferme l'editeur
            toggleEditor();

        }

        if(!testName(firstName)) {
            setErrorFirstName(true);
        }
        if(!testName(lastName)) {
            setErrorLastName(true);
        }

    }

    
    return (
        <div>
            { !editorOpen ?
                (
                    <section className='welcome-edit'>
                        <h1>
                            Welcome back
                            <span>{firstName}&nbsp;{lastName}&nbsp;!</span>
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
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    onFocus={handleInputFocus}
                                />                            
                                <input
                                    className={ errorLastName ? "name-input-error" : "" } 
                                    type="text"
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
