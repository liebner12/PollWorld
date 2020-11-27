import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ children, settings, returnButton }) => {
  return (
    <View style={styles.backgroundColor}>
      <View style={styles.container}>
        {settings ? (
          <TouchableOpacity
            style={styles.settingsIcon}
            activeOpacity={0.6}
            onPress={settings}
          >
            <Ionicons name="ios-settings" size={24} color="#212121" />
          </TouchableOpacity>
        ) : null}
        {returnButton ? (
          <TouchableOpacity
            style={styles.backIcon}
            activeOpacity={0.8}
            onPress={returnButton}
          >
            <Ionicons name="md-arrow-round-back" size={30} color={"#fff"} />
          </TouchableOpacity>
        ) : null}
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(50, 224, 196, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    elevation: 6,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  backgroundColor: {
    height: 170,
    backgroundColor: "#212121",
    elevation: 1,
  },
  settingsIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  backIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
});

export default Header;
