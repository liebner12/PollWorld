import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";
const HorizontalLine = ({ children }) => {
  const styles = StyleSheet.create({
    line: {
      marginVertical: 10,
      backgroundColor: colors.primary,
      height: 3,
    },
  });
  return <View style={styles.line}>{children}</View>;
};

export default HorizontalLine;
