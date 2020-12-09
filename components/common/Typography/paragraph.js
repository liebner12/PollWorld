import React from "react";
import { Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";

const Paragraph = ({ children, center, grey }) => {
  const styles = ScaledSheet.create({
    title: {
      fontSize: fonts.xs,
      fontFamily: fonts.secondary,
      color: grey ? colors.grey : colors.secondary,
      textAlign: center ? "center" : "auto",
    },
  });
  return <Text style={styles.title}>{children}</Text>;
};
export default Paragraph;
