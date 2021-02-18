import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { backgroundColors } from "../../../styles/colors";
import { rounded, elevation } from "../../../styles/base";
import { TouchableRipple } from "react-native-paper";

const SmallBox = ({ children, green, onPress }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: green
        ? backgroundColors.lightGreen
        : backgroundColors.secondary,
      width: "100%",
      marginVertical: 10,
      height: 150,
      borderRadius: rounded.sm,
      elevation: elevation.elevation,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
  });
  return (
    <View>
      {green ? (
        <TouchableRipple
          style={styles.container}
          onPress={() => onPress()}
        >
          {children}
        </TouchableRipple>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
    </View>
  );
};

export default SmallBox;
