import { signInWithGoogle } from "./logic/appSignIn";
import { signInWithFacebook } from "./logic/appSignIn";
import { ToastAndroid } from "react-native";

export const handleGoogleLogin = async (onSignIn) => {
  (await signInWithGoogle()) == 200
    ? onSignIn() 
    : ToastAndroid.show("Coś poszło nie tak.", ToastAndroid.SHORT);
};

export const handleFacebookLogin = async () => {
  (await signInWithFacebook()) == 200
    ? onSignIn()
    : ToastAndroid.show("Coś poszło nie tak.", ToastAndroid.SHORT);
};
