import React from "react";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const BottomMenuItem = ({ iconName, isCurrent }) => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {iconName === "Home" ? (
        <FontAwesome5
          name="home"
          size={24}
          color={isCurrent ? "#32e0c4" : "#d2dae2"}
          style={{
            paddingVertical: 40,
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: 0, height: 3 },
            textShadowRadius: 5,
          }}
        />
      ) : iconName === "Surveys" ? (
        <MaterialCommunityIcons
          name="ballot"
          size={24}
          color={isCurrent ? "#32e0c4" : "#d2dae2"}
          style={{
            paddingVertical: 40,
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: 0, height: 3 },
            textShadowRadius: 5,
          }}
        />
      ) : iconName === "Shopping" ? (
        <Ionicons
          name="md-wallet"
          size={24}
          color={isCurrent ? "#32e0c4" : "#d2dae2"}
          style={{
            paddingVertical: 40,
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: 0, height: 3 },
            textShadowRadius: 5,
          }}
        />
      ) : (
        <MaterialIcons
          name="account-circle"
          size={24}
          color={isCurrent ? "#32e0c4" : "#d2dae2"}
          style={{
            paddingVertical: 40,
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: 0, height: 3 },
            textShadowRadius: 5,
          }}
        />
      )}
    </View>
  );
};
