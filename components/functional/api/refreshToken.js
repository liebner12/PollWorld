import {sendLoginData, sendRefreshToken} from "../authentication/communication/authentication";
import {getRefreshToken, setAccessToken, setRefreshToken} from "./storedTokens";


export const refreshAccessToken = async () => {
    console.log("refreshed")
    let refresh = await getRefreshToken();
    let response = await sendRefreshToken(refresh);
    if(response.response_status === 200){
        await setAccessToken(response.response_body.access)
        return response.response_body.access
    }

    return response.response_status
}

export const retryIfFailed = async (request, token, body) => {
    if(body){
    if (request(token,body).response_status === 401) {
        let newToken = await refreshAccessToken()
        return await request(newToken,body)}

    return request(token,body)}
    else{
        if (request(token).response_status === 401) {
            let newToken = await refreshAccessToken()
            console.log("i jak tam")
            return await request(newToken)
        }
        return request(token)
    }
}

