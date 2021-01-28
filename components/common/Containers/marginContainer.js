import React from "react";
import { View } from "react-native";
import { vs } from "react-native-size-matters";
const MarginContainer = ({ children }) => {
  return <View style={{ marginVertical: vs(20), }}>{children}</View>;
};

export default MarginContainer;
