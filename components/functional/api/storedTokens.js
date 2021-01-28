import * as SecureStore from "expo-secure-store";

export const getAccessToken = async () => {
  try {
    const value = await SecureStore.getItemAsync("access-token");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const setAccessToken = async (token) => {
  try {
    await SecureStore.setItemAsync("access-token", token);
  } catch (e) {
    return null;
  }
};

export const getRefreshToken = async () => {
  try {
    const value = await SecureStore.getItemAsync("refresh-token");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const setRefreshToken = async (token) => {
  try {
    await SecureStore.setItemAsync("refresh-token", token);
  } catch (e) {
    return null;
  }
};

export const setUser = async (user) => {
  try{
    await SecureStore.setItemAsync("user-email", user)
  }
  catch (e){
    return null;
  }
};

export const getUser = async ( ) =>{
  try {
    const value = await SecureStore.getItemAsync("user-email");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
}

export const clearSecureStore = async () =>{
  await setRefreshToken("")
  await setAccessToken("")
  await setUser("")
}
