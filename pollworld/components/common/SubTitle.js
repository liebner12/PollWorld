import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SubTitle = ({ children }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 16,
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
export default SubTitle;
