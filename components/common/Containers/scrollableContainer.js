import React from "react";
import { ScrollView } from "react-native";
import { backgroundColors } from "../../../styles/colors";
import { rounded } from "../../../styles/base";
const ScrollableContainer = ({ children, padding, list }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: padding ? "10%" : 0,
        paddingVertical: 20,
        backgroundColor: list
          ? backgroundColors.lightDark
          : backgroundColors.primary,
        borderBottomLeftRadius: list ? rounded.md : 0,
        borderBottomRightRadius: list ? rounded.md : 0,
      }}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollableContainer;
