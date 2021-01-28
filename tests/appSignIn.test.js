import {createAccount} from "../components/functional/authentication/logic/appSignIn";

const {login} = require("../components/functional/authentication/logic/appSignIn")


test("Test login:", async ()=>{
    fetch.mockResponseOnce(
        '"Success"',
        { status: 200,
            headers: { 'content-type': 'application/json',
                'custom-header': 'customHeaderValue'},
            body:{
                "refresh": "refresh",
                "access": "access",
                "user": "test20@wp.pl",
            }});
    let loginResponse = await login("free","free")
    expect(loginResponse).toBe(200)
    expect(fetch).toBeCalledTimes(1)
    }
)


test("Test register:", async ()=>{
    fetch.mockResponse(
        '"Success"',
        { status: 200,
            headers: { 'content-type': 'application/json',
                'custom-header': 'customHeaderValue'},
            body:{
                "refresh": "refresh",
                "access": "access",
                "user": "test20@wp.pl",
            }});
    let registerResponse = await createAccount("free", "free")
    expect(fetch).toBeCalledTimes(3) //3 WAŻNE, jedno przy rejestracji, drugie przy auto-logowaniu
    expect(registerResponse).toBe(200)
}
)
