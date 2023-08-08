import { configureStore } from "@reduxjs/toolkit";
import connexionReducer from "./connexionSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
    reducer : {
        connexion: connexionReducer,
        profile: profileReducer
    },
})