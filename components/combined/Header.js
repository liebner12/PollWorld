import React from "react";
import { View, StyleSheet } from "react-native";

const Header = ({ children }) => {
  return (
    <View style={styles.backgroundColor}>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(50, 224, 196, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    elevation: 6,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  backgroundColor: {
    height: 170,
    backgroundColor: "#212121",
    elevation: 1,
  },
});

export default Header;
