import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    details: {
        profession: "",
        place_of_residence: 0,
    },
};

export const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers:{
        detailsData: (state, {payload}) =>{
            state.details = payload
        }
    }
})

export const {detailsData} = detailsSlice.actions;
export const selectDetailsData = (state) => state.details;
export default detailsSlice.reducer;

export function dispatchDetailsData(values){
    return (dispatch) => {
        dispatch(detailsData(values))
    }
}
