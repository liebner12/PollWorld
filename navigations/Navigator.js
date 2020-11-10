import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartPage from "../scenes/login/startPage";
import LoginPage from "../scenes/login/loginPage";
import HomePage from "../scenes/main/homePage";
import PhysicalPage from "../scenes/login/physicalPage";
import PersonalDataPage from "../scenes/login/personalDataPage";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Home">
            {(props) => <HomePage {...props} onSignOut={handleSignOut} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Start">
              {(props) => <StartPage {...props} onSignIn={handleSignIn} />}
            </Stack.Screen>
            <Stack.Screen name="Login">
              {(props) => <LoginPage {...props} onSignIn={handleSignIn} />}
            </Stack.Screen>
            <Stack.Screen name="Personal">
              {(props) => (
                <PersonalDataPage {...props} onSignIn={handleSignIn} />
              )}
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
