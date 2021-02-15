import React from "react";
import { View } from "react-native";

const TwoColumn = ({ children }) => {
  return <View style={{ flex: 1, flexDirection: "row" }}>{children}</View>;
};

export default TwoColumn;
