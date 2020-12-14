import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Title from "../common/Typography/title";
import SubTitle from "../common/Typography/subTitle";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, backgroundColors } from "../../styles/colors";
import { elevation, rounded } from "../../styles/base";
import HorizontalLine from "../common/horizontalLine";

const PersonalData = ({ onPress, email, password }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title size="small">Twoje dane prywatne:</Title>
        {onPress ? (
          <TouchableOpacity onPress={onPress}>
            <Title>
              <MaterialIcons name="edit" size={24} color={colors.primary} />
            </Title>
          </TouchableOpacity>
        ) : null}
      </View>
      <HorizontalLine />
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="email" size={24} color={colors.dark} />
        </View>
        <View>
          <Title noMargin={true} size="small" color={true}>
            {email}
          </Title>
          <SubTitle small={true}>Email</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="vpn-key" size={24} color={colors.dark} />
        </View>
        <View>
          <Title noMargin={true} size="small" color={true}>
            {password}
          </Title>
          <SubTitle small={true}>Hasło</SubTitle>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: rounded.md,
    elevation: elevation.elevation,
    backgroundColor: backgroundColors.secondary,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spaceBetween: {
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    padding: 4,
    backgroundColor: colors.primary,
    borderRadius: rounded.sm,
    marginRight: 15,
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PersonalData;
