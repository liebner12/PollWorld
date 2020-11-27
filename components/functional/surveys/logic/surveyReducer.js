import {createSlice} from "@reduxjs/toolkit";

const surveySlice = createSlice({
    name: 'surveys',
    initialState: [],
    reducers:{
        setSurveyList:{
            reducer(state, action){
                state=action.payload;
            },
            prepare(surveysArray){
                return {payload: surveysArray}
            }
        }
    }})

    const action1 = surveySlice.setSurveyList([1,2,3]);
    console.log(action1.payload);