import { getToken } from "./storedToken";

const getHeaders = async (token) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  } 

  return headers;
};


export const post = async (destination, body, token) => {
  const headers = await getHeaders(token);
  const result = await fetch(`http://localhost:3000${destination}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  console.log(result);
  return await result.json();
};

export const get = async (destination, body, token) => {
  const headers = await getHeaders(token);
  const result = await fetch(`http://localhost:3000${destination}`, {
    method: "GET",
    headers,
    body: JSON.stringify(body),
  });


  console.log(result);
  return await result.json();
};
