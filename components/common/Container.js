import React from "react";
import { StyleSheet, ScrollView } from "react-native";

const Container = ({ children, wider, align }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 3,
      flexGrow: 1,
      backgroundColor: "#212121",
      padding: 30,
      paddingHorizontal: wider ? "5%" : "10%",
    },
  });
  return (
    <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
  );
};

export default Container;
