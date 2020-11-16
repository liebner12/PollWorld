import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Paragraph = ({ children }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 14,
      fontFamily: "Asap_400Regular",
      color: "#d6d6d6",
      flex: 1,
      flexWrap: "wrap",
    },
  });
  return <Text style={styles.title}>{children}</Text>;
};
export default Paragraph;
