import React from "react";
import { View } from "react-native";

const ContentContainer = ({ children }) => {
  return <View style={{ flex: 6 }}>{children}</View>;
};

export default ContentContainer;
