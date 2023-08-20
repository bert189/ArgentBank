import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    token: null,
    signedIn: false,
}

export const connexionSlice = createSlice({
    name : "connexion",
    initialState,
    reducers : {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
        },
        setSignedIn: (state, action) => {
            state.signedIn = action.payload;
        },
    },

});

export const {setToken, clearToken, setSignedIn} = connexionSlice.actions

export default connexionSlice.reducer