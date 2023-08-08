import React, { useState } from 'react'
import GreenButton from './GreenButton'
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile, resetUserProfile } from "../store/profileSlice";
import { updateUserProfile } from '../api/argentBank.api';


function UserNameEditor() {

    // const dispatch = useDispatch;

    const user = useSelector((state) => state.profile)

    const [firstName, setFirstName] = useState(user.firstName); 
    const [lastName, setLastName] = useState(user.lastName);

    // const { firstName, lastName } = useSelector((state) => state.profile))

    const token = useSelector((state) => state.token)

    const [editorOpen, setEditorOpen] = useState(false);

    
    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    };

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    };

    function toggleEditor() {
        if (editorOpen === false) {
            setEditorOpen(true);
        }
        else {
            setEditorOpen(false);
        }
    }

    function handleSaveClick() {
        // envoi des nom prénom vers le state
        setUserProfile(firstName, lastName)
        // envoi des nom prénom vers le serveur
        updateUserProfile(token, firstName, lastName)
        // ferme l'editeur
        toggleEditor();
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
                        <div className='edit-input-wrapper'>
                            <input type="text" value={firstName} onChange={handleFirstNameChange} />                            
                            <input type="text" value={lastName} onChange={handleLastNameChange} />

                        </div>

                        <div className='edit-button-wrapper'>
                            <GreenButton text="Save" onClick={handleSaveClick} />
                            <GreenButton text="Cancel" onClick={toggleEditor} />
                        </div>                          

                    </section>
                )
            }
        </div>
    )
}

export default UserNameEditor
