import {post, put, get} from "../../api/fetchBuilder";

export const putUserData = (user_token, data) =>{
    return put("/accounts/api/update/",data,user_token)
}

export const getUserData = (user_token) =>{
    return get("/accounts/get/", user_token)
}
