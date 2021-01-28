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
import { darkTheme } from "../styles/themes"
import {useDispatch} from "react-redux";
import {
  dispatchAccountData,
  dispatchEmail,
  dispatchSurveysWithValue
} from "../components/redux_components/accountController";
import {
  clearSecureStore,
  getAccessToken,
  getUser,
} from "../components/functional/api/storedTokens";
import {getSurveysForUser} from "../components/functional/surveys/logic/survey";
import {convertToAppSurvey} from "../components/functional/surveys/logic/surveyConverter";
import {dispatchPersonalData} from "../components/redux_components/personalDataController";
import {profileDataSeparator} from "../components/functional/profile/logic/profileDataHandlers";
import {dispatchDetailsData} from "../components/redux_components/detailsDataController";
import {dispatchPhysicalData} from "../components/redux_components/physicalDataController";
import {getUserDataForUser} from "../components/functional/profile/logic/userData";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatchPersonal = useDispatch();
  const dispatchDetails = useDispatch();
  const dispatchPhysical = useDispatch();
  const dispatchAccount = useDispatch();
  const dispatchSurveysWithData = useDispatch();
  const dispatchUser = useDispatch();

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await getAccessToken();
        if (userToken != "") {
          await handleSignIn();
        }
      } catch (e) {}
    };
    bootstrapAsync();
  }, []);

  const handleSignInShorter = async() =>
  {
    const token = await getAccessToken()
    const surveys = await getSurveysForUser(token)
    const userEmail = await getUser();

    dispatchSurveysWithData(dispatchSurveysWithValue(surveys.map(convertToAppSurvey)));
    dispatchAccount(dispatchAccountData());
    dispatchUser(dispatchEmail(userEmail));
    setIsAuthenticated(true);
  }


  const handleSignIn = async () => {
    const token = await getAccessToken();
    const surveys = await getSurveysForUser(token);
    const profileData = await getUserDataForUser(token);
    const userEmail = await getUser();

    dispatchSurveysWithData(dispatchSurveysWithValue(surveys.map(convertToAppSurvey)));
    dispatchPersonal(dispatchPersonalData(profileDataSeparator(profileData).personal))
    dispatchPhysical(dispatchPhysicalData(profileDataSeparator(profileData).physical))
    dispatchDetails(dispatchDetailsData(profileDataSeparator(profileData).details))
    dispatchAccount(dispatchAccountData());
    dispatchUser(dispatchEmail(userEmail));
    setIsAuthenticated(true);
  };

  const handleSignOut = async () => {
    await clearSecureStore();
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
