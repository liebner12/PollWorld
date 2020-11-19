import React from 'react';
import * as Facebook from "expo-facebook";
import * as Google from 'expo-google-app-auth';
import {facebookAppId, googleAppId} from "../../api/secrets"

import {initializeAsync, logInWithReadPermissionsAsync} from "expo-facebook";


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
        await initializeAsync({appId: facebookAppId}).catch((error) =>{ console.log((error))});
        const {
            type,
            token,
    } = await logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
    }).then() .catch((error) => {
            console.error(error);
        });
        console.log(token)
        return token;
}

