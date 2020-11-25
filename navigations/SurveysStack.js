import React from "react";
import SurveysPage from "../scenes/main/surveysPage";
import { createStackNavigator } from "@react-navigation/stack";

const SurveysStack = createStackNavigator();

function SurveysStackNavigator({onSignOut}) {
  return (
    <SurveysStack.Navigator screenOptions={{ headerShown: false }}>
      <SurveysStack.Screen name="Surveys">
        {(props) => <SurveysPage {...props} onSignOut={onSignOut} />}
      </SurveysStack.Screen>
    </SurveysStack.Navigator>
  );
}

export default SurveysStackNavigator;
