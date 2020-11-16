import React from "react";
import { StyleSheet, View } from "react-native";

const TitleContainer = ({ children }) => {
  return <View style={styles.titleContainer}>{children}</View>;
};
const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: "1%",
  },
});
export default TitleContainer;
