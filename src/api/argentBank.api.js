
const BASE_URL = "http://localhost:3001/api/v1";


// récupération du token avec les identifiants de connexion

export async function userLogToken(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (response.status === 200) {
            const data = await response.json();
            
            if (data.body && data.body.token) {
                return {token: data.body.token};               
            }
            else {
                console.error("Token not found in response:", data);
                return {error: "Token not found in response" };
            }
        }
        else if (response.status === 400) {
            const errorData = await response.json();
            console.error("Invalid Fields:", errorData);
            return { error: errorData.message };
        }
        else if (response.status === 500) {
            console.error("Internal Server Error");
            return { error: "Internal Server Error" };
        }

    } catch (error) {
        console.error("Erreur de connexion :", error.message);
    }
}


// récupération du profil utilisateur (prénom + nom) à l'aide du token

export async function getUserProfile(token) {
    try {
        const response = await fetch(`${BASE_URL}/user/profile`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Accept": "application/json",
                "Authorization" : `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.body;

    } catch (error) {
        console.error("Erreur lors de la récupération du profil utilisateur :", error.message);
    }
}


// modification de profil utilisateur (prénom + nom)

export async function updateUserProfile(token, firstName, lastName ) {
    try {
        await fetch(`${BASE_URL}/user/profile`, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
            body : JSON.stringify({ firstName, lastName })
        })
        
    } catch (error) {
        console.error("Erreur lors de la mise à jour du profil utilisateur :", error.message);
    }
}


