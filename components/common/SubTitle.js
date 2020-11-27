import React from "react";
import { StyleSheet, Text } from "react-native";

const SubTitle = ({ children, small }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: small ? 14 : 16,
      fontFamily: "Asap_400Regular",
      color: "#d6d6d6",
    },
  });
  return <Text style={styles.title}>{children}</Text>;
};
export default SubTitle;
