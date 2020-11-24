import {post, get} from "../../api/fetchBuilder";
import {mock_surveys} from "../mock";

export const getSurveys = (user_token) =>{
    //return get("/users/login/token",{},user_token)
    return mock_surveys;
}