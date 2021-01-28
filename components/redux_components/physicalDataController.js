import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    physical: {
        growth: 0,
        weight: 0,
        level_of_fitness: 0,
    },
};

export const physicalSlice = createSlice({
    name: "physical",
    initialState,
    reducers:{
        physicalData: (state, {payload}) =>{
            state.physical = payload
        }
    }
})

export const {physicalData} = physicalSlice.actions;
export const selectPhysicalData = (state) => state.physical;
export default physicalSlice.reducer;

export function dispatchPhysicalData(values){
    return (dispatch) => {
        dispatch(physicalData(values))
    }
}
