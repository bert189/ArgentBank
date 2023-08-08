
const BASE_URL = "http://localhost:3001/api/v1";

export async function userLogToken(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/user/login`, {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
        });
        const data = await response.json(); 
        return data.token;

    } catch (error) {
        console.error("Erreur de connexion :", error.message);
    }
}

export async function getUserProfile(userToken) {
    try {
        const response = await fetch(`${BASE_URL}/user/profile`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                'Accept': 'application/json',
                "Authorization" : `Bearer ${userToken}`
            }
        });
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Erreur lors de la récupération du profil utilisateur :", error.message);
    }
}

export async function updateUserProfile(userToken, { firstName, lastName } ) {
    try {
        await fetch(`${BASE_URL}/user/profile`, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${userToken}`
            },
            body : JSON.stringify({ firstName, lastName })
        })
        
    } catch (error) {
        console.error("Erreur lors de la mise à jour du profil utilisateur :", error.message);
    }
}


