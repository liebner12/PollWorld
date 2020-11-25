import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Title from "../../components/common/Title";

const Wallet = ({ amount }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#444444",
      paddingVertical: 20,
      paddingBottom: 21,
      borderRadius: 16,
      marginBottom: 25,
      marginTop: 15,
      borderRadius: 14,
      elevation: 10,
      shadowColor: "#32e0c4",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5,
      alignItems: "center",
    },
  });
  return (
    <View style={styles.container}>
      <Title noMargin={true}>
        Stan konta: {amount}{" "}
        <FontAwesome5 name="money-bill" size={24} color="#32e0c4" />
      </Title>
    </View>
  );
};

export default Wallet
