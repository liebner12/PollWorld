import { createSlice } from '@reduxjs/toolkit'
import {
    getCouponsToBuy,
    getOwnedCoupons,
    getMockSurveysForUser,
    getUserPoints
} from "../functional/surveys/logic/survey";

export const initialState = {
    account: {
        surveys: [],
        owned_coupons: [],
        coupons_to_buy: [],
        points: "1337",
        email: "fakemail@gmail.com",

    }
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers:
        {
        userSurveys: (state, {payload}) =>{
            state.account.surveys = payload
        },
        ownedCoupons:(state, {payload}) =>{
            state.account.owned_coupons = payload
        },
        couponsToBuy:(state, {payload}) => {
            state.account.coupons_to_buy = payload
        },
        userPoints: (state, {payload}) => {
            state.account.points = payload
        },
        userEmail: (state, {payload}) => {
            state.account.email = payload
        }
    }
})

export const {userSurveys, ownedCoupons, couponsToBuy, userPoints, userEmail} = accountSlice.actions
export const selectAccountData = state => state.account
export default accountSlice.reducer


export function dispatchAccountData() {
    return dispatch => {
        const owned_coupons = getOwnedCoupons();
        const coupons_to_buy = getCouponsToBuy();
        const points = getUserPoints()

        dispatch(userPoints(points))
        dispatch(ownedCoupons(owned_coupons))
        dispatch(couponsToBuy(coupons_to_buy))
    }
}

export function dispatchSurveys(){
    return dispatch => {
        const surveys = getMockSurveysForUser();
        dispatch(userSurveys(surveys))
    }
}

export function dispatchSurveysWithValue(surveysList) {
    return dispatch => {
        dispatch(userSurveys(surveysList))
    }
}

export function dispatchOwnedCoupons(){
    return dispatch => {
        const coupons = getOwnedCoupons();
        dispatch(ownedCoupons(coupons))
    }
}

export function dispatchEmail(mail){
    return dispatch => {
        dispatch(userEmail(mail))
    }
}

export function dispatchCouponsToBuy(){
    return dispatch => {
        const coupons = getCouponsToBuy();
        dispatch(couponsToBuy(coupons))
    }
}




