import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Title = ({ children, color, big }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: big ? 42 : 30,
      fontFamily: "Quicksand_700Bold",
      color: color ? "#fff" : "#32e0c4",
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
