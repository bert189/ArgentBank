import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName : "",
    lastName : ""
}

export const userProfileSlice = createSlice({
    name : "userProfile",
    initialState,
    reducers: {
        setUserProfile : (state, action) => {
            const {firstName, lastName} = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
            console.log(action);
        },
        resetUserProfile : (state) => {
            state.firstName = "";
            state.lastName = "";
        }
    }
});


export const {setUserProfile, resetUserProfile} = userProfileSlice.actions;
export default userProfileSlice.reducer;