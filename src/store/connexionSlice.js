import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userLogToken } from "../api/argentBank.api";

// creation du thunk (encapsule l'appel API asyncrone)
export const fetchToken = createAsyncThunk(
    'connexion/fetchToken',
    async (payload) => {
        const { email, password } = payload;
        const response = await userLogToken(email, password);
        return response;
    }
);

const initialState = {
    token : "",
    rememberUser: false
}

export const connexionSlice = createSlice({
    name : "connexion",
    initialState,
    reducers : {
        toggleRememberUser: (state) => {
            state.rememberUser = !state.rememberUser;
        },

    },
    extraReducers : (builder) => {
        builder.addCase(fetchToken.fulfilled, (state, action) => {
            state.token = action.payload
        })

    }
});

export const {setToken, toggleRememberUser} = connexionSlice.actions

export default connexionSlice.reducer