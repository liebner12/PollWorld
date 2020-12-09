import { StatusBar } from "expo-status-bar";
import React from "react";

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
import AppNavigator from "./navigations/Navigator";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./components/functional/surveys/logic/store";
import rootReducer from "./components/functional/surveys/logic/store";
import { configureStore } from "@reduxjs/toolkit";
import { colors, backgroundColors } from "./styles/colors";
export default function App() {
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
      colors,
    },
  };

  const store = configureStore({ reducer: rootReducer });
  return (
    <Provider store={store}>
      <View style={{ backgroundColor: backgroundColors.primary, flex: 1 }}>
        <PaperProvider theme={theme}>
          <StatusBar style="light" />
          <AppNavigator />
        </PaperProvider>
      </View>
    </Provider>
  );
}
