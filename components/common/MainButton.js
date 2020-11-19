import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
const MainButton = ({ name, transparent, icon, onPress }) => {
  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      justifyContent: icon ? "flex-start" : "center",
      alignItems: "center",
      marginVertical: 10,
      height: 50,
      backgroundColor: transparent
        ? "rgba(0, 0, 0, 0.0)"
        : "rgba(50, 224, 196, 0.7)",
      borderColor: transparent ? "#ffffff" : null,
      borderWidth: transparent ? 2 : 0,
      borderRadius: 14,
      elevation: transparent ? 0 : 5,
    },
    text: {
      color: "#ffffff",
      fontSize: 17,
      fontFamily: "Asap_600SemiBold",
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
        {icon ? <Text style={styles.icon}>{icon}   </Text> : null}
        <Text style={styles.text}>
          {name}
          {icon ? "   " : ""}
        </Text>
      </View>
    </TouchableRipple>
  );
};

export default MainButton;
