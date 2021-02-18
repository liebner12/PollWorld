import React from "react";
import { View, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../styles/colors";
import SubTitle from "./Typography/subTitle";
import { elevation, rounded } from "../../styles/base";
const MainButton = ({ name, transparent, icon, onPress, round }) => {
  const styles = ScaledSheet.create({
    button: {
      flexDirection: "row",
      justifyContent: icon ? "flex-start" : "center",
      alignItems: "center",
      marginVertical: "10@vs",
      height: "50@mvs",
      backgroundColor: transparent
        ? colors.transparent
        : colors.transparentPrimary,
      borderColor: transparent ? colors.white : null,
      borderWidth: transparent ? 2 : 0,
      borderRadius: round ? 50 : rounded.md,
      elevation: transparent ? 0 : round ? 0 : elevation.elevation,
    },
    container: {
      flex: 1,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
    },
  });
  return (
    <TouchableRipple
      style={styles.button}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <View style={styles.container}>
        {icon ? <Text style={styles.icon}>{icon} </Text> : null}
        <SubTitle color="white">
          {name}
          {icon ? "   " : ""}
        </SubTitle>
      </View>
    </TouchableRipple>
  );
};

export default MainButton;
