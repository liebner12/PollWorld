import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Title = ({ children, color, size, shadow, noMargin }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: size == "big" ? 42 : size == "small" ? 18 : 30,
      fontFamily: size == "small" ? "Asap_600SemiBold" : "Quicksand_700Bold",
      color: color ? "#fff" : "#32e0c4",
      paddingVertical: noMargin ? 0 : 5,
      textShadowColor: shadow ? "rgba(0, 0, 0, 0.75)" : null,
      textShadowOffset: shadow ? { width: 0, height: 3 } : null,
      textShadowRadius: shadow ? 5 : null,
    },
  });
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;
