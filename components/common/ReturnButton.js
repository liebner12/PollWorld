import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ReturnButton = ({ onPress }) => {
  const styles = StyleSheet.create({
    returnButton: {
      marginVertical: 20,
    },
  });
  return (
    <TouchableOpacity style={styles.returnButton} onPress={onPress}>
      <Ionicons name="md-arrow-round-back" size={30} color={"#32e0c4"} />
    </TouchableOpacity>
  );
};

export default ReturnButton;
