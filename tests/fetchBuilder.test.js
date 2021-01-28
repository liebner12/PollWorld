const {post, get, put} = require('../components/functional/api/fetchBuilder')
require('jest-fetch-mock').enableMocks()

test('Test fetchBuilder GET correct', async () => {
    fetch.mockResponseOnce(
        '{"accessToken": "access", "refreshToken": "refresh"}',
        { status: 200,
            headers: { 'content-type': 'application/json',
                        'custom-header': 'customHeaderValue'}});

    const response = await get("/token", "accessToken");

    expect (fetch).toHaveBeenCalledWith(
        `http://10.0.2.2:8000/token`,
                {"headers": {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer accessToken"},
                    "method": "GET"})


    expect(response.response_body).toBeInstanceOf(Object)

    expect(response.response_body.accessToken).toBe('access')
    expect(response.response_body.refreshToken).toBe('refresh')

    expect(response.response_headers).not.toBeNull()
    expect(response.response_body).not.toBeNull()
});

test('Test fetchBuilder POST without a token', async () => {
    fetch.mockResponseOnce(
        '{"user": "User"}',
        { status: 200,
            headers: { 'content-type': 'application/json',
                'custom-header': 'customHeaderValue'}});

    const response = await post("/tokenless",{});

    expect (fetch).toHaveBeenCalledWith(
        `http://10.0.2.2:8000/tokenless`,
        {   "body": "{}",
            "headers": {
                "Content-Type": "application/json"},
            "method": "POST"})


    expect(response.response_headers).not.toBeNull()
    expect(response.response_body).not.toBeNull()
    expect(response.response_body).not.toBeNull()
});

test('Test fetchBuilder PUT with wrong token', async () =>{
    fetch.mockResponseOnce(
        '"Invalid access token"',
        { status: 400,
            headers: { 'content-type': 'application/json',
                'custom-header': 'customHeaderValue'}});


    const response = await put("/wrong",{}, "accessToken");

    expect (fetch).toHaveBeenCalledWith(
        `http://10.0.2.2:8000/wrong`,
        {   "body": "{}",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer accessToken"},
            "method": "PUT"})


    expect(response.response_status).toBe(400)
    expect(response.response_body).toBe("Invalid access token")

})
