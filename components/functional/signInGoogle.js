import * as Google from 'expo-google-app-auth';
import Constants from "expo-constants";

const signInWithGoogle = async () => {
    const result = await Google.logInAsync({
        androidClientId: Constants.manifest.extra.google.androidClientId,
        scopes: ["profile", "email"]
    });
    if (result.type === "success") {
        this.setState({
            name: result.user.name,
            signedIn: true
        })
    }
}

export default signInWithGoogle