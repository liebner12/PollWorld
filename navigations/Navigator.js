import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartPage from "../scenes/login/startPage";
import LoginPage from "../scenes/login/loginPage";
import RegisterPage from "../scenes/login/registerPage";
import PhysicalPage from "../scenes/login/physicalPage";
import PersonalDataPage from "../scenes/login/personalDataPage";
import DetailsPage from "../scenes/login/detailsPage";
import MainNavigations from "./MainNavigations";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { darkTheme } from "../styles/themes"
import {useDispatch, useSelector} from "react-redux";
import {
  dispatchAccountData,
  dispatchEmail,
  dispatchSurveysWithValue
} from "../components/redux_components/accountController";
import {getAccessToken, setAccessToken} from "../components/functional/api/storedTokens";
import {getSurveysForUser} from "../components/functional/surveys/logic/survey";
import {serverToSurvey} from "../components/functional/surveys/logic/surveyConverter";
import {getUserData} from "../components/functional/profile/communication/fetchUserData";
import {dispatchPersonalData, selectPersonalData} from "../components/redux_components/personalDataController";
import {profileDataJoiner, profileDataSeparator} from "../components/functional/profile/logic/profileDataHandlers";
import {dispatchDetailsData, selectDetailsData} from "../components/redux_components/detailsDataController";
import {dispatchPhysicalData, selectPhysicalData} from "../components/redux_components/physicalDataController";
import {getUserDataForUser, putUserDataForUser} from "../components/functional/profile/logic/userData";
//import { setRefreshToken } from "../api/token";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatchPersonal = useDispatch();
  const dispatchDetails = useDispatch();
  const dispatchPhysical = useDispatch();
  const dispatchAccount = useDispatch();
  const dispatchSurveysWithData = useDispatch();

  const handleSignInShorter = async() =>
  {
    const token = await getAccessToken()
    const surveys = await getSurveysForUser(token)
    await dispatchSurveysWithData(dispatchSurveysWithValue(surveys.map(serverToSurvey)));
    await dispatchAccount(dispatchAccountData());
    setIsAuthenticated(true);
  }


  const handleSignIn = async () => {
    const token = await getAccessToken();
    const surveys = await getSurveysForUser(token);
    const profileData = await getUserDataForUser(token);

    console.log("ZAlogowano")
    console.log(profileData)

    await dispatchSurveysWithData(dispatchSurveysWithValue(surveys.map(serverToSurvey)));
    await dispatchPersonal(dispatchPersonalData(profileDataSeparator(profileData).personal))
    await dispatchPhysical(dispatchPhysicalData(profileDataSeparator(profileData).physical))
    await dispatchDetails(dispatchDetailsData(profileDataSeparator(profileData).details))
    //await dispatchAccount(dispatchAccountData());

    setIsAuthenticated(true);
  };

  const handleSignOut = async () => {
    await setAccessToken("");
    console.log("wylogowano")
    await console.log(await getAccessToken())
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer theme={darkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} headerMode="none">
        {isAuthenticated ? (
          <Stack.Screen name="Home">
            {(props) => (
              <MainNavigations {...props} onSignOut={handleSignOut} />

            )}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Start">
              {(props) => <StartPage {...props} onSignIn={handleSignIn} />}
            </Stack.Screen>
            <Stack.Screen name="Login">
              {(props) => <LoginPage {...props} onSignIn={handleSignIn} />}
            </Stack.Screen>
            <Stack.Screen name="Register">
              {(props) => <RegisterPage {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Details">
              {(props) => <DetailsPage {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Personal">
              {(props) => <PersonalDataPage {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Physical">
              {(props) => <PhysicalPage {...props} onSignIn={handleSignInShorter} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
