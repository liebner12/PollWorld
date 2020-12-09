import { createSlice } from '@reduxjs/toolkit'
import {fetchUserData} from "../functional/profile/logic/userData";
import {userMockData} from "./mock";

export const initialState = {
    profile: {
        name : "",
        age : "",
        sex : false,
        profession: "",
        place_of_residence: 0,
        growth: 0,
        weight: 0,
        level_of_fitness: 0
    }
}

export const profileSlice = createSlice({
    name : 'profile',
    initialState,
    reducers:{
        userData: (state, {payload}) => {
            state.profile = payload
        }

    }
})

export const {userData} = profileSlice.actions
export const selectProfileData = state => state.profile
export default profileSlice.reducer


export function dispatchProfileData(){
    return dispatch => {
        const profile = fetchUserData();
        dispatch(userData(profile))
    }
}
