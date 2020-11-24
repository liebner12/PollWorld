import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Link = ({ children }) => {
  const styles = StyleSheet.create({
    title: {
      color: "#32e0c4",
      fontFamily: "Asap_400Regular",
    },
  });
  return <Text style={styles.title}>{children}</Text>;
};
export default Link;
