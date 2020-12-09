import React from "react";
import HomePage from "../scenes/main/homePage";
import ItemPage from "../scenes/main/itemPage";
import SurveyPage from "../scenes/main/surveyPage";
import { createStackNavigator } from "@react-navigation/stack";

const SurveysStack = createStackNavigator();

function SurveysStackNavigator({ onSignOut }) {
  return (
    <SurveysStack.Navigator screenOptions={{ headerShown: false }}>
      <SurveysStack.Screen name="Home">
        {(props) => <HomePage {...props} onSignOut={onSignOut} />}
      </SurveysStack.Screen>
      <SurveysStack.Screen name="Item">
        {(props) => <ItemPage {...props} onSignOut={onSignOut} />}
      </SurveysStack.Screen>
      <SurveysStack.Screen name="Survey">
        {(props) => <SurveyPage {...props} onSignOut={onSignOut} />}
      </SurveysStack.Screen>
    </SurveysStack.Navigator>
  );
}

export default SurveysStackNavigator;
