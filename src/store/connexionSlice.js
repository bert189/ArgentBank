import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userLogToken } from "../api/argentBank.api";

// creation du thunk (encapsule l'appel API asyncrone)
// export const fetchToken = createAsyncThunk(
//     'connexion/fetchToken',
//     async (payload) => {
//         const { email, password } = payload;
//         const response = await userLogToken(email, password);
//         return response;
//     }
// );

const initialState = {
    token : "",
    signedIn: false,
    rememberMe: false,
}

export const connexionSlice = createSlice({
    name : "connexion",
    initialState,
    reducers : {
        setToken: (state, action) => {
            state.token = action.payload;
            console.log(action)
        },
        resetToken: (state) => {
            state.token = "";
        },
        setSignedIn: (state, action) => {
            state.signedIn = action.payload;
            console.log(action)
        },
        setRememberMe: (state, action) => {
            state.rememberMe = action.payload;
            console.log(action)
        },

    },
    // extraReducers : (builder) => {
    //     builder.addCase(fetchToken.fulfilled, (state, action) => {
    //         state.token = action.payload
    //     })

    // }
});

export const {setToken, resetToken, setSignedIn, setRememberMe} = connexionSlice.actions

export default connexionSlice.reducer