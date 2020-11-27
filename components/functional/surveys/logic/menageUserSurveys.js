import {
    getAccessToken, getRefreshToken,
    setAccessToken,
    setRefreshToken
} from "../../api/storedTokens";
import {getSurveys} from "../communication/survey";
import {useSelector, useDispatch} from "react-redux";
import {selectSurveys, setSurveyList} from "./surveyReducer";

export const getUserSurveys = async () =>{
    let user_token = await getAccessToken();
    let surveyList = await getSurveys(user_token);
    const dispatch = useDispatch();
    dispatch(setSurveyList(surveyList))
}