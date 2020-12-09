import React from "react";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import { colors } from "../styles/colors";
export const BottomMenuItem = ({ iconName, isCurrent }) => {
  return (
    <View>
      {iconName === "Home" ? (
        <FontAwesome5
          name="home"
          size={moderateScale(24)}
          color={isCurrent ? colors.primary : colors.secondary}
          style={{
            paddingVertical: moderateScale(40),
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: 0, height: moderateScale(3) },
            textShadowRadius: moderateScale(5),
          }}
        />
      ) : iconName === "Surveys" ? (
        <MaterialCommunityIcons
          name="ballot"
          size={moderateScale(24)}
          color={isCurrent ? colors.primary : colors.secondary}
          style={{
            paddingVertical: moderateScale(40),
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: 0, height: 3 },
            textShadowRadius: 5,
          }}
        />
      ) : iconName === "Shopping" ? (
        <Ionicons
          name="md-wallet"
          size={moderateScale(24)}
          color={isCurrent ? colors.primary : colors.secondary}
          style={{
            paddingVertical: moderateScale(40),
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: 0, height: 3 },
            textShadowRadius: 5,
          }}
        />
      ) : (
        <MaterialIcons
          name="account-circle"
          size={moderateScale(24)}
          color={isCurrent ? colors.primary : colors.secondary}
          style={{
            paddingVertical: moderateScale(40),
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: 0, height: moderateScale(3) },
            textShadowRadius: moderateScale(5),
          }}
        />
      )}
    </View>
  );
};
