import React, { useEffect } from 'react';
import './css/App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';

import { useDispatch } from 'react-redux';
import { setToken, setSignedIn } from './store/connexionSlice';
import { setUserProfile } from './store/userProfileSlice';
import { getUserProfile } from './api/argentBank.api';


function App() {

	const dispatch = useDispatch();

	// Fonction qui charge le state global userProfile en utilisant le token
	async function fetchAndSetUserProfile(token) {
		try {
			const userProfile = await getUserProfile(token);
			dispatch(setUserProfile(userProfile));
		} catch (error) {
			console.error('Error while fetching user data:', error);
		}
	}

	useEffect(() => {
		// Vérifie si le token est présent dans le LocalStorage
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			// Met à jour le token dans le state
			dispatch(setToken(storedToken));
			
			// appel de la fonction asynchrone qui récupère le profil utilisateur
			fetchAndSetUserProfile(storedToken);
			
			// pour le bon affichage des composants :
			dispatch(setSignedIn(true))
		}

	}, []); // vide = ne s'éxécute qu'une fois après le montage de App

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
