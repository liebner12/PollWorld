import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Alert = ({ name, transparent, icon, onPress }) => {
  return (
    <View style={styles.alertContainer} activeOpacity={0.6} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Alert;
