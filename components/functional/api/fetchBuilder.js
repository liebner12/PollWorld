const server = `http://5104c283a4a7.ngrok.io`;

const getHeaders = (token) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};



export const post = async (destination, body, token) => {
  let response_status;
  let response_headers;
  let response_body;
  let res;
  await fetch(`${server}${destination}`,{
    method: "POST",
        headers: getHeaders(token),
        body: await JSON.stringify(body),}
  ) .catch((error) => {
    console.error(error);
  })
  .then(response => {
    response_status = response.status;
    response_headers = response.headers;
    res = response})
      .catch((error) => {
        console.error(error);
      });
  response_body = await res.json()
  return {
    response_body: response_body,
    response_status: response_status,
    response_headers: response_headers
  };
}