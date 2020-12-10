import React from "react";
import { View } from "react-native";
import { verticalScale } from "react-native-size-matters";
const MarginContainer = ({ children }) => {
  return <View style={{ marginTop: verticalScale(20) }}>{children}</View>;
};

export default MarginContainer;
