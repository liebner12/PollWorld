import * as SecureStore from "expo-secure-store";

export const getToken = async () => {
  try {
    const value = await SecureStore.getItemAsync("token");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const setToken = async (token) => {
  try {
    await SecureStore.setItemAsync("token", token);
  } catch (e) {
    return null;
  }
};
