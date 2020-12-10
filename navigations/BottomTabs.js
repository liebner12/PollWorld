import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./TabBar";
import HomePage from "../scenes/main/homePage"
import SurveysPage from "../scenes/main/surveysPage"
import ShoppingPage from "../scenes/main/shoppingPage"
import ProfilePage from "../scenes/main/profilePage"

const Tab = createBottomTabNavigator();

const BottomTabs = ({ onSignOut }) => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home">
        {(props) => <HomePage {...props} onSignOut={onSignOut} />}
      </Tab.Screen>
      <Tab.Screen name="Surveys">
        {(props) => <SurveysPage {...props} onSignOut={onSignOut} />}
      </Tab.Screen>
      <Tab.Screen name="Shopping">
        {(props) => <ShoppingPage {...props} onSignOut={onSignOut} />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {(props) => <ProfilePage {...props} onSignOut={onSignOut} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabs;
