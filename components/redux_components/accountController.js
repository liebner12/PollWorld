import { createSlice } from '@reduxjs/toolkit'
import {
    getCouponsToBuy,
    getOwnedCoupons,
    getUserPoints
} from "../functional/surveys/logic/survey";
import {fixIDs} from "../functional/surveys/logic/surveyConverter";

export const initialState = {
    account: {
        surveys: [],
        owned_coupons: [],
        coupons_to_buy: [],
        points: "0",
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
        dispatch(ownedCoupons(owned_coupons))

    }
}


export function dispatchSurveysWithValue(surveysList) {
    return dispatch => {
        dispatch(userSurveys(surveysList))
    }
}


export function dispatchOwnedCoupons(coupons){
    return dispatch => {
        fixIDs(coupons)
        dispatch(ownedCoupons(coupons))
    }
}

export function dispatchUserPoints(points){
    return dispatch => {
        dispatch(userPoints(points))
    }
}

export function dispatchEmail(mail){
    return dispatch => {
        dispatch(userEmail(mail))
    }
}

export function dispatchCouponsToBuy(coupons){
    return dispatch => {
        dispatch(couponsToBuy(coupons))
    }
}




