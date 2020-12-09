import React from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColors } from "../../../styles/colors";

const PrimarContainer = ({ children }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColors.primary,
    },
  });
  return <View style={styles.container}>{children}</View>;
};

export default PrimarContainer;
