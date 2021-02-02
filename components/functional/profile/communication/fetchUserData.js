import {post, put, get} from "../../api/fetchBuilder";
import {performRequest} from "../../api/refreshToken";

export const putUserData = (user_token, data) =>{
    return performRequest(put,"/accounts/personal_update/",data,user_token)
}

export const getUserData = (user_token) =>{
    return performRequest(get, "/accounts/get/",null,user_token)
}
