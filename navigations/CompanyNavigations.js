import React from "react";
import CompanyTabBar from "./CompanyTabBar";
import AddSurvey from "../scenes/mainCompany/addSurvey"
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

function MainStackNavigations({ onSignOut }) {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home">
        {(props) => <CompanyTabBar {...props} onSignOut={onSignOut} />}
      </MainStack.Screen>
      <MainStack.Screen name="AddSurvey">
        {(props) => <AddSurvey {...props} onSignOut={onSignOut} />}
      </MainStack.Screen>
    </MainStack.Navigator>
  );
}

export default MainStackNavigations;
