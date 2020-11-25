import React from "react";
import ProfilePage from "../scenes/main/profilePage";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

function ProfileStackNavigator({ onSignOut }) {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile">
        {(props) => <ProfilePage {...props} onSignOut={onSignOut} />}
      </ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
}

export default ProfileStackNavigator;
