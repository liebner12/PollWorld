import React from 'react';
import * as Facebook from "expo-facebook";
import * as Google from 'expo-google-app-auth';
import {facebookAppId, googleAppId} from "../../api/secrets"
import {sendFacebookUserToken} from "../communication/authentication"
import {sendGoogleUserToken} from "../communication/authentication";
import {initializeAsync} from "expo-facebook";


export const getGoogleUserToken = async() =>{
        const scopes = ["profile", "email"];
        const {type, token, user} = await Google.logInAsync({
            androidClientId: googleAppId,
            scopes: scopes
        }) .catch((error) => {
            console.error(error);
        });
        return user;
    };

export const getFacebookUserToken = async() =>{
        await Facebook.initializeAsync({facebookAppId});
        const {
            type,
            token,
    } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
    }) .catch((error) => {
            console.error(error);
        });
        return token;
}

