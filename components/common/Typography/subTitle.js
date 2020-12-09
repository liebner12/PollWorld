import React from "react";
import { Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";
const SubTitle = ({ children, small, color }) => {
  const styles = ScaledSheet.create({
    title: {
      fontSize: small ? fonts.xs : fonts.sm,
      fontFamily: fonts.semi,
      color:
        color == "color"
          ? colors.primary
          : color == "white"
          ? colors.white
          : colors.secondary,
    },
  });
  return <Text style={styles.title}>{children}</Text>;
};
export default SubTitle;
