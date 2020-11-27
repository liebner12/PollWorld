import {post} from "../../api/fetchBuilder";

export const sendModificationData = (user_token) =>{
    return post("/modify_user",{},user_token)
}
