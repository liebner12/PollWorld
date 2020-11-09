import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartPage from "./scenes/login/startPage";
import LoginPage from "./scenes/login/loginPage";
import HomePage from "./scenes/main/homePage";
import { AppLoading } from "expo";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import {
  Asap_400Regular,
  Asap_500Medium,
  Asap_600SemiBold,
  Asap_700Bold,
} from "@expo-google-fonts/asap";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { View } from "react-native";
import RegisterPage from "./scenes/login/registerPage";

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
    Asap_400Regular,
    Asap_500Medium,
    Asap_600SemiBold,
    Asap_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const theme = {
    ...DefaultTheme,
    roundness: 14,
    colors: {
      ...DefaultTheme.colors,
      primary: "#32e0c4",
    },
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <View style={{ backgroundColor: "#212121", flex: 1 }}>
      <PaperProvider theme={theme}>
        <StatusBar style="light" />
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
                <Stack.Screen name="register" component={RegisterPage}/>
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </View>
  );
}
