import React from "react";
import { Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";
const Link = ({ children, center }) => {
  const styles = ScaledSheet.create({
    title: {
      color: colors.primary,
      fontFamily: center ? fonts.primary : fonts.secondary,
      fontSize: center ? fonts.sm : fonts.xs,
      textAlign: center ? "center" : "auto",
    },
  });
  return <Text style={styles.title}>{children}</Text>;
};
export default Link;
