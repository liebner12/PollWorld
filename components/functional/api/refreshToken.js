import {getRefreshToken, setAccessToken, setRefreshToken} from "./storedTokens";
import {post} from "./fetchBuilder";

export const sendRefreshToken = (refresh_token) => {
    return post("/token/refresh/", {refresh: refresh_token});
}


export const refreshAccessToken = async () => {
    let refresh = await getRefreshToken();
    let response = await sendRefreshToken(refresh);
    if(response.response_status === 200){
        await setAccessToken(response.response_body.access)
        return response.response_body.access
    }
    return response.response_status
}

export const performRequest = async (request, destination, body, token) => {
    if(body){
        let response = await request(destination, body, token);
        let status = response.response_status
        if (status === 401) {
        let newToken = await refreshAccessToken()
        response = await request(destination,newToken,body)
        }
    return response;
    }
    else{
        let response = await request(destination, token);
        let status = response.response_status
        console.log(response)
        if (status === 401) {
            let newToken = await refreshAccessToken()
            response = await request(destination,newToken)
        }
        return response
    }
}

