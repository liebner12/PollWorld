import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const Container = ({ children, wider }) => {
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

export default Container;
