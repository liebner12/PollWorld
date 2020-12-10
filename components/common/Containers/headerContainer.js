import React from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ms } from "react-native-size-matters";
import { ScaledSheet } from "react-native-size-matters";
import { backgroundColors, colors } from "../../../styles/colors";
import ReturnButton from "../returnButton";
import { elevation, rounded } from "../../../styles/base";
const headerContainer = ({
  children,
  settings,
  returnButton,
  icon,
  animatedValue,
}) => {
  const styles = ScaledSheet.create({
    container: {
      backgroundColor: backgroundColors.transparentBackground,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      flex: 1,
      elevation: elevation.elevation,
      borderBottomLeftRadius: rounded.md,
      borderBottomRightRadius: rounded.md,
      flexDirection: "row",
    },
    settingsIcon: {
      marginLeft: "auto",
      marginRight: 30,
    },
    return: {
      marginRight: "auto",
      marginLeft: 30,
    },
    iconContainer: {
      alignItems: "center",
      width: "100%",
    },
    icon: {
      height: 125,
      width: 125,
      backgroundColor: backgroundColors.secondary,
      borderRadius: rounded.md,
      top: 40,
      elevation: elevation.elevation,
    },
    backIcon: {
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 5,
    },
    childContainer: {
      alignItems: "center",
      width: "100%",
    },
  });
  return (
    <View style={styles.container}>
      {returnButton ? <ReturnButton white={true} /> : null}
      {icon ? (
        <View style={styles.iconContainer}>
          <Animated.View
            style={{
              height: animatedValue.interpolate({
                inputRange: [0, 50],
                outputRange: [125, 60],
                extrapolate: "clamp",
              }),
              width: animatedValue.interpolate({
                inputRange: [0, 50],
                outputRange: [125, 60],
                extrapolate: "clamp",
              }),
              backgroundColor: backgroundColors.secondary,
              borderRadius: rounded.md,
              top: animatedValue.interpolate({
                inputRange: [0, 35],
                outputRange: [35, 0],
                extrapolate: "clamp",
              }),
              elevation: elevation.elevation,
            }}
          ></Animated.View>
        </View>
      ) : (
        <View style={styles.childContainer}>{children}</View>
      )}
      {settings ? (
        <TouchableOpacity
          style={styles.settingsIcon}
          activeOpacity={0.6}
          onPress={settings}
        >
          <Ionicons name="ios-settings" size={ms(24)} color={colors.dark} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default headerContainer;
