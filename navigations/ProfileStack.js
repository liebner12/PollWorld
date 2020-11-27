import React from "react";
import ProfilePage from "../scenes/main/profilePage";
import SettingsPage from "../scenes/main/settingsPage";
import EditPage from "../scenes/main/editPage";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

function ProfileStackNavigator({ onSignOut }) {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#212121" },
        cardOverlayEnabled: true,
      }}
    >
      <ProfileStack.Screen name="Profile">
        {(props) => <ProfilePage {...props} />}
      </ProfileStack.Screen>
      <ProfileStack.Screen name="Settings">
        {(props) => <SettingsPage {...props} onSignOut={onSignOut} />}
      </ProfileStack.Screen>
      <ProfileStack.Screen name="Edit">
        {(props) => <EditPage {...props} />}
      </ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
}

export default ProfileStackNavigator;
