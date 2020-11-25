import React from "react";
import ShoppingPage from "../scenes/main/shoppingPage";
import { createStackNavigator } from "@react-navigation/stack";

const ShoppingStack = createStackNavigator();

function ShoppingStackNavigator({onSignOut}) {
  return (
    <ShoppingStack.Navigator screenOptions={{ headerShown: false }}>
      <ShoppingStack.Screen name="Shopping">
        {(props) => <ShoppingPage {...props} onSignOut={onSignOut} />}
      </ShoppingStack.Screen>
    </ShoppingStack.Navigator>
  );
}

export default ShoppingStackNavigator;
