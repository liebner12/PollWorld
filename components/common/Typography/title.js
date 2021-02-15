import React from "react";
import { Text } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";
const Title = ({ children, color, size, shadow, noMargin, center, grey }) => {
  const styles = ScaledSheet.create({
    title: {
      fontSize: size == "extra" ? 40 : size == "big" ? fonts.lg : size == "small" ? fonts.sm : fonts.md,
      fontFamily: size == "small" ? fonts.semi : fonts.primary,
      color: grey ? colors.darkGrey : color ? colors.white : colors.primary,
      paddingVertical: noMargin ? 0 : 5,
      textShadowColor: shadow ? "rgba(0, 0, 0, 0.75)" : null,
      textShadowOffset: shadow ? { width: 0, height: 3 } : null,
      textShadowRadius: shadow ? 5 : null,
      textAlign: center ? "center" : "auto",
    },
  });
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;
