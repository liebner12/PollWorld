import React from "react";
import ItemPage from "../scenes/main/itemPage";
import SurveyPage from "../scenes/main/surveyPage";
import BottomTabs from "./BottomTabs";
import SettingsPage from "../scenes/main/settingsPage";
import EditPage from "../scenes/main/editPage";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

function MainStackNavigations({ onSignOut }) {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home">
        {(props) => <BottomTabs {...props} onSignOut={onSignOut} />}
      </MainStack.Screen>
      <MainStack.Screen name="Item">
        {(props) => <ItemPage {...props} onSignOut={onSignOut} />}
      </MainStack.Screen>
      <MainStack.Screen name="Survey">
        {(props) => <SurveyPage {...props} onSignOut={onSignOut} />}
      </MainStack.Screen>
      <MainStack.Screen name="Settings">
        {(props) => <SettingsPage {...props} onSignOut={onSignOut} />}
      </MainStack.Screen>
      <MainStack.Screen name="Edit">
        {(props) => <EditPage {...props} />}
      </MainStack.Screen>
    </MainStack.Navigator>
  );
}

export default MainStackNavigations;
