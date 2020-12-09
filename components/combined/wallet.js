import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Title from "../common/Typography/title";
import { colors, backgroundColors } from "../../styles/colors";
import { elevation,rounded } from "../../styles/base";
const Wallet = ({ amount }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColors.secondary,
      padding: 20,
      borderRadius: rounded.md,
      marginVertical: 20,
      elevation: elevation.elevation,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
  return (
    <View style={styles.container}>
      <Title noMargin={true}>Stan konta:</Title>
      <Title noMargin={true} color={true}>
        {amount}{" "}
        <FontAwesome5 name="money-bill" size={18} color={colors.white} />
      </Title>
    </View>
  );
};

export default Wallet;
