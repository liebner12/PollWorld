import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Paragraph = ({ children }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 14,
      fontFamily: "Asap_400Regular",
      color: "#d6d6d6",
    },
  });
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};
export default Paragraph;
