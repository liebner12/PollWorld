import React from 'react';
import * as Facebook from "expo-facebook";
import * as Google from 'expo-google-app-auth';
import Constants from "expo-constants";

const signIn = {
    async signInWithGoogle(){
        const scopes = ["profile", "email"];
        const {type, accessToken, user} = await Google.logInAsync({
            androidClientId: "749206604554-mk3k4vfvo4jl390mmspjnj6570il9vq6.apps.googleusercontent.com",
            scopes: scopes
        });
        if (type === "success") {
            console.log(accessToken)
            //TODO wysłać accessToken do backendu
        }
    },

    async signInWithFacebook(){
        const appId = "276251297112045";
        const permissions = ["public_profile", "email"];
        await Facebook.initializeAsync({appId});
        const { type, token } = await Facebook.logInWithReadPermissionsAsync({permissions});

        if (type === "success") {
            console.log(token)
            //TODO wysłać accessToken do backendu
        }}

}
export default signIn