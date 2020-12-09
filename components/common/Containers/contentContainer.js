import React from "react";
import { View } from "react-native";

const ContentContainer = ({ children }) => {
  return <View style={{ flex: 5 }}>{children}</View>;
};

export default ContentContainer;
