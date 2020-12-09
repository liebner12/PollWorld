import { createSlice } from '@reduxjs/toolkit'
import {getSurveysForUser} from "../communication/survey";
import {getAccessToken} from "../../api/storedTokens";

export const initialState = {
    surveys: []
}

export const surveysSlice = createSlice({
    name: 'surveys',
    initialState,
    reducers:{
        getSurveys: (state, { payload }) =>{
            state.surveys = payload
        }
    }
})

export const {getSurveys} = surveysSlice.actions
export const surveysSelector  = state => state.surveys
export default surveysSlice.reducer


export function fetchSurveys() {
    return async dispatch => {
        let user_token = await getAccessToken();
        const data = await getSurveysForUser(user_token);
        dispatch(getSurveys(data))
    }
}
