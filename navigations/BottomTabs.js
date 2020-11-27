import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../scenes/main/homePage";
import MyTabBar from "./TabBar";
import SurveysStack from "./SurveysStack";
import ShoppingStack from "./ShoppingStack";
import ProfileStack from "./ProfileStack";
const Tab = createBottomTabNavigator();

const BottomTabs = ({ onSignOut }) => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home">
        {(props) => <HomePage {...props} onSignOut={onSignOut} />}
      </Tab.Screen>
      <Tab.Screen name="Surveys">
        {(props) => <SurveysStack {...props} onSignOut={onSignOut} />}
      </Tab.Screen>
      <Tab.Screen name="Shopping">
        {(props) => <ShoppingStack {...props} onSignOut={onSignOut} />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {(props) => <ProfileStack {...props} onSignOut={onSignOut} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabs;
