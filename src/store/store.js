import { configureStore } from "@reduxjs/toolkit";

import connexionReducer from "./connexionSlice";
import userProfileReducer from "./userProfileSlice";



export const store = configureStore({
    reducer: {
        connexion: connexionReducer,
        userProfile: userProfileReducer
    },
})