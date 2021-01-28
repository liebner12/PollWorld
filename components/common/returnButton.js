import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ms } from "react-native-size-matters";
import { colors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

const ReturnButton = ({ white, action }) => {
  const styles = StyleSheet.create({
    returnButton: {
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 5,
    },
    container: {
      marginRight: white ? "auto" : 0,
      marginLeft: white ? 30 : 0,
      marginBottom: white ? 0 : 20,
    },
  });
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={action ? action : () => navigation.goBack()}
      activeOpacity={0.7}
    >
      <Ionicons
        name="md-arrow-back"
        size={ms(30)}
        color={white ? colors.white : colors.primary}
        style={styles.returnButton}
      />
    </TouchableOpacity>
  );
};

export default ReturnButton;
