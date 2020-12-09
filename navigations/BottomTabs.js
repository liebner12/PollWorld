import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./TabBar";
import SurveysStack from "./SurveysStack";
import ShoppingStack from "./ShoppingStack";
import ProfileStack from "./ProfileStack";
import HomeStack from "./HomeStack";
const Tab = createBottomTabNavigator();

const BottomTabs = ({ onSignOut }) => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home">
        {(props) => <HomeStack {...props} onSignOut={onSignOut} />}
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
