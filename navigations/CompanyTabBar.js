import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./TabBar";
import HomeCompany from "../scenes/mainCompany/homeComapny"
import SettingsPage from "../scenes/main/settingsPage";
import SurveysPage from "../scenes/mainCompany/surveysCompanyPage"

const Tab = createBottomTabNavigator();

const BottomTabsCompany = ({ onSignOut }) => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} company={true} />}>
      <Tab.Screen name="Home">
        {(props) => <HomeCompany {...props} onSignOut={onSignOut} />}
      </Tab.Screen>
      <Tab.Screen name="Surveys">
        {(props) => <SurveysPage {...props} onSignOut={onSignOut} />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {(props) => <SettingsPage {...props} onSignOut={onSignOut} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabsCompany;
