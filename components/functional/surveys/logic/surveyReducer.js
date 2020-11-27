import {createSlice} from "@reduxjs/toolkit";

export const surveySlice = createSlice({
    name: 'surveys',
    initialState: ["123123123", "123123", 'JSON'],
    reducers:{
        setSurveyList:{
            setSurveys(state, action){
                state=action.payload;
            }
        }
    }})

export const {setSurveyList} = surveySlice.actions;
export const selectSurveys = state => state.surveys;
export default surveySlice.reducer