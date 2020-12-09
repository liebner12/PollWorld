import { createSlice } from '@reduxjs/toolkit'
import {
    getCouponsToBuy,
    getOwnedCoupons,
    getSurveysForUser,
    getUserPoints
} from "../functional/surveys/communication/survey";

export const initialState = {
    account: {
        surveys: [],
        owned_coupons: [],
        coupons_to_buy: [],
        points: "",
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
        }
    }
})

export const {userSurveys, ownedCoupons, couponsToBuy, userPoints} = accountSlice.actions
export const selectAccountData = state => state.account
export default accountSlice.reducer


export function dispatchAccountData() {
    return dispatch => {
        const surveys = getSurveysForUser();
        const owned_coupons = getOwnedCoupons();
        const coupons_to_buy = getCouponsToBuy();
        const points = getUserPoints()

        dispatch(userSurveys(surveys))
        dispatch(userPoints(points))
        dispatch(ownedCoupons(owned_coupons))
        dispatch(couponsToBuy(coupons_to_buy))
    }
}

export function dispatchSurveys(){
    return dispatch => {
        const surveys = getSurveysForUser();
        dispatch(userSurveys(surveys))
    }
}

export function dispatchOwnedCoupons(){
    return dispatch => {
        const coupons = getOwnedCoupons();
        dispatch(ownedCoupons(coupons))
    }
}

export function dispatchCouponsToBuy(){
    return dispatch => {
        const coupons = getCouponsToBuy();
        dispatch(couponsToBuy(coupons))
    }
}




