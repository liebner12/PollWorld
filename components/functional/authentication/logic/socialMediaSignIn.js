import React from 'react';
import * as Facebook from "expo-facebook";
import * as Google from 'expo-google-app-auth';
import {facebookAppId, googleAppId} from "../../api/secrets"

import {initializeAsync, logInWithReadPermissionsAsync} from "expo-facebook";


export const getGoogleUserToken = async() =>{
        const scopes = ["profile", "email"];
        const result = await Google.logInAsync({
            androidClientId: googleAppId,
            scopes: scopes
        }) .catch((error) => {
            console.error(error);
        });
        console.log(result.accessToken);
        const user =  result.user;
        return user;
    };

export const getFacebookUserToken = async() =>{
        await initializeAsync({appId: facebookAppId}).catch((error) =>{ console.log((error))});
       const result = await logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
    }).then() .catch((error) => {
            console.error(error);
        });
        console.log(result.token)
        return result.token;
}

