import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";
const HorizontalLine = ({ children, grey }) => {
  const styles = StyleSheet.create({
    line: {
      marginVertical: 10,
      backgroundColor: grey ? colors.grey : colors.primary,
      height: grey ? 1 : 3,
    },
  });
  return <View style={styles.line}>{children}</View>;
};

export default HorizontalLine;
