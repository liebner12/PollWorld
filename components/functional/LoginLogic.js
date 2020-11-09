import React from 'react';
import * as Facebook from "expo-facebook";
import * as Google from 'expo-google-app-auth';
import Constants from "expo-constants";

const signInWithGoogle = async () => {
    const result = await Google.logInAsync({
        androidClientId: Constants.manifest.extra.androidClientId,
        scopes: ["profile", "email"]
    });
    if (result.type === "success") {
        this.setState({
            name: result.user.name,
            signedIn: true
        })
    }
}

const signInWithFacebook = async () => {
    const appId = Constants.manifest.extra.appId;
    const permissions = ["public_profile", "email"];
    await Facebook.initializeAsync({appId});
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({permissions});
}
