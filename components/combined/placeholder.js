import React from "react";
import { View, ActivityIndicator } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { backgroundColors, colors } from "../../styles/colors";
import { elevation, rounded } from "../../styles/base";

const Placeholder = ({ fit, even }) => {
  const styles = ScaledSheet.create({
    item: {
      backgroundColor: backgroundColors.secondary,
      width: fit ? "42.5%" : "200@s",
      minHeight: fit ? 250 : 150,
      borderRadius: rounded.md,
      elevation: elevation.elevation,
      paddingTop: "10@mvs",
      paddingBottom: 10,
      marginRight: fit ? (even ? "5%" : 0) : 30,
      marginLeft: fit ? (even ? "5%" : 0) : 0,
      marginBottom: fit ? "30@vs" : "10@vs",
      paddingHorizontal: "10@ms",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.item}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Placeholder;
