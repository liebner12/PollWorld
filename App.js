import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import {
  Asap_400Regular,
  Asap_600SemiBold,
  Asap_700Bold,
} from "@expo-google-fonts/asap";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { View } from "react-native";
import AppNavigator from "./navigations/Navigator";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { colors, backgroundColors } from "./styles/colors";
import rootReducer from "./components/redux_components/store";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_600SemiBold,
    Quicksand_700Bold,
    Asap_400Regular,
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

  const store = configureStore({ reducer: rootReducer });
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "never" }}>
          <View style={{ backgroundColor: backgroundColors.primary, flex: 1 }}>
            <PaperProvider theme={theme}>
              <StatusBar
                style="light"
                backgroundColor={backgroundColors.primary}
              />
              <AppNavigator />
            </PaperProvider>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
