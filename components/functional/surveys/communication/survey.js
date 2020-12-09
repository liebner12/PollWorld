import {post, get} from "../../api/fetchBuilder";
import {mock_surveys, mockCouponsToBuy, mockOwnedCoupons, mockUserPoints} from "../../../redux_components/mock";

export const getSurveysForUser = () => {
    return mock_surveys;
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
