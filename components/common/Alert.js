import { ToastAndroid } from "react-native";

export const Alert = () => {
  return ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
};

export default Alert;
