import React from "react";
import { View, StyleSheet } from "react-native";

const ViewContainer = ({ children, wider }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: "#212121",
      padding: 30,
      paddingHorizontal: wider ? "5%" : "10%",
    },
  });
  return <View style={styles.container}>{children}</View>;
};

export default ViewContainer;
