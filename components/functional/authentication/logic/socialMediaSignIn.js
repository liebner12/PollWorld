import React from 'react';
import * as Facebook from "expo-facebook";
import * as Google from 'expo-google-app-auth';
import {facebookAppId, googleAppId} from "/home/sebastian/WebstormProjects/PollWorld4/secrets.js"
import {sendFacebookUserToken} from "/components/functional/authentication/communication/authentication"
import {sendGoogleUserToken} from "../communication/authentication";


export const signInWithGoogle = async() =>{
        const scopes = ["profile", "email"];
        const {type, accessToken, user} = await Google.logInAsync({
            androidClientId: googleAppId,
            scopes: scopes
        });
        if (type === "success") {
            await sendGoogleUserToken(accessToken);
        }
    };

export const signInWithFacebook = async() =>{
        const appId = facebookAppId;
        const permissions = ["public_profile", "email"];
        await Facebook.initializeAsync({appId});
        const { type, accessToken } = await Facebook.logInWithReadPermissionsAsync({permissions});

        if (type === "success") {
            await sendFacebookUserToken(accessToken);
            console.log(accessToken)
        }
}

