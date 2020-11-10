import React from "react";
import { View, StyleSheet } from "react-native";

const Container = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    padding: 40,
  },
});

export default Container;