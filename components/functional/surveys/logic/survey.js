import {post, get} from "../../api/fetchBuilder";
import {mock_surveys, mockCouponsToBuy, mockOwnedCoupons, mockUserPoints} from "../../../redux_components/mock";
import {fetchSurveysForUser} from "../communication/fetchSurveys";


export const getSurveysForUser = async (user_token) => {
    return  (await fetchSurveysForUser(user_token)).response_body
}
export const getMockSurveysForUser = (user_token) => {
    return mock_surveys
}
export const getOwnedCoupons = (user_token) => {
    return mockOwnedCoupons;
}

export const getCouponsToBuy = (user_token) => {
    return mockCouponsToBuy
}

export const getUserPoints = (user_token) => {
    return mockUserPoints

}
