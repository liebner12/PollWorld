import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    personal: {
        name: "",
        age: "",
        sex: false,
    },
};

export const personalSlice = createSlice({
    name: "personal",
    initialState,
    reducers:{
        personalData: (state, {payload}) =>{
            state.personal = payload
        }
    }
})

export const {personalData} = personalSlice.actions;
export const selectPersonalData = (state) => state.personal;
export default personalSlice.reducer;

export function dispatchPersonalData(values){
    return (dispatch) => {
        dispatch(personalData(values))
    }
}
