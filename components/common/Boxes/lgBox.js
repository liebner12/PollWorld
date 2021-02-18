import React from "react";
import { View, StyleSheet } from "react-native";
import { backgroundColors } from "../../../styles/colors";
import { rounded, elevation } from "../../../styles/base";

const LargeBox = ({ children, onLayout }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColors.secondary,
      marginVertical: 10,
      width: "100%",
      height: 230,
      paddingVertical: 5,
      borderRadius: rounded.sm,
      elevation: elevation.elevation,
    },
  });
  return <View onLayout={onLayout} style={ styles.container }>{children}</View>;
};

export default LargeBox;
