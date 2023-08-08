import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName : "TEST",
    lastName : "TEST"
}

export const profileSlice = createSlice({
    name : "profile",
    initialState,
    reducers: {
        setUserProfile : (state, action) => {
            // console.log(action);
            const {firstName, lastName} = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
        },
        resetUserProfile : (state) => {
            state.firstName = "";
            state.lastName = "";
        }
    }
});


export const {setUserProfile, resetUserProfile} = profileSlice.actions;
export default profileSlice.reducer;