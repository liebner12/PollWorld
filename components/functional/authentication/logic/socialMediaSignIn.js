import React from 'react';
import * as Facebook from "expo-facebook";
import * as Google from 'expo-google-app-auth';
import {facebookAppId, googleAppId} from "../../api/secrets"
import {sendFacebookUserToken} from "../communication/authentication"
import {sendGoogleUserToken} from "../communication/authentication";
import {initializeAsync} from "expo-facebook";


export const signInWithGoogle = async() =>{
        const scopes = ["profile", "email"];
        const {type, accessToken, user} = await Google.logInAsync({
            androidClientId: googleAppId,
            scopes: scopes
        });
        console.log(user);
        if (type == "success") {
            await sendGoogleUserToken(accessToken);
        }
    };

export const signInWithFacebook = async() =>{
        await Facebook.initializeAsync({facebookAppId});
        const {
            type,
            token,
    } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
    });
        console.log(type);
        console.log(token);
}

