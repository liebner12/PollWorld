import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartPage from "../scenes/login/startPage";
import LoginPage from "../scenes/login/loginPage";
import RegisterPage from "../scenes/login/registerPage";
import PhysicalPage from "../scenes/login/physicalPage";
import PersonalDataPage from "../scenes/login/personalDataPage";
import DetailsPage from "../scenes/login/detailsPage";
import BottomTabs from "./BottomTabs";
//import { setRefreshToken } from "../api/token";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };
  
  const handleSignOut = async () => {
    // await setToken("");
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Home">
            {(props) => <BottomTabs {...props} onSignOut={handleSignOut} />}
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
              {(props) => <PhysicalPage {...props} onSignIn={handleSignIn} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
