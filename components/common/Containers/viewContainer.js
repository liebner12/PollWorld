import React from "react";
import { View, StyleSheet } from "react-native";
import { backgroundColors } from "../../../styles/colors";

const ViewContainer = ({ children, wider }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColors.primary,
      paddingHorizontal: wider ? "5%" : "10%"
    },
  });
  return <View style={styles.container}>{children}</View>;
};

export default ViewContainer;
