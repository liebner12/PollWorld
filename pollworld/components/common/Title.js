import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Title = ({ children }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontFamily: "Quicksand_700Bold",
      color: "#32e0c4",
      marginBottom: 5,
    },
  });
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};
export default Title;
