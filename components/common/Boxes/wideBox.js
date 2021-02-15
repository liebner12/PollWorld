import React from "react";
import { View, StyleSheet } from "react-native";
import { backgroundColors } from "../../../styles/colors";
import { rounded, elevation } from "../../../styles/base";

const WideBox = ({ children, onLayout }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColors.secondary,
      marginVertical: 10,
      width: "100%",
      borderRadius: rounded.sm,
      elevation: elevation.elevation,
      padding: 10,
    },
  });
  return (
    <View onLayout={onLayout} style={styles.container}>
      {children}
    </View>
  );
};

export default WideBox;
