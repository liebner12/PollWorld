import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Title from "../common/Typography/title";
import SubTitle from "../common/Typography/subTitle";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, backgroundColors } from "../../styles/colors";
import { elevation, rounded } from "../../styles/base";
import HorizontalLine from "../common/horizontalLine";

const PersonalData = ({
  onPress,
  age,
  sex,
  living,
  job,
  height,
  weight,
  fitness,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title size="small">Twoje dane osobowe:</Title>
        <TouchableOpacity onPress={onPress}>
          <Title>
            <MaterialIcons name="edit" size={24} color={colors.primary} />
          </Title>
        </TouchableOpacity>
      </View>
      <HorizontalLine />
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="cake" size={24} color={colors.dark} />
        </View>
        <View>
          <Title noMargin={true} size="small" color={true}>
            {age}
          </Title>
          <SubTitle small={true}>Wiek</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="account-circle" size={24} color={colors.dark} />
        </View>
        <View>
          <Title noMargin={true} size="small" color={true}>
            {sex}
          </Title>
          <SubTitle small={true}>Płeć</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="location-on" size={24} color={colors.dark} />
        </View>
        <View>
          <Title noMargin={true} size="small" color={true}>
            {living}
          </Title>
          <SubTitle small={true}>Miejsce zamieszkania</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="work" size={24} color={colors.dark} />
        </View>
        <View>
          <Title noMargin={true} size="small" color={true}>
            {job}
          </Title>
          <SubTitle small={true}>Zawód</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="human-male-height-variant"
            size={24}
            color={colors.dark}
          />
        </View>
        <View>
          <Title noMargin={true} size="small" color={true}>
            {height}
          </Title>
          <SubTitle small={true}>Wzrost</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="fitness-center" size={24} color={colors.dark} />
        </View>
        <View>
          <Title noMargin={true} size="small" color={true}>
            {weight}
          </Title>
          <SubTitle small={true}>Waga</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="directions-run" size={24} color="black" />
        </View>
        <View>
          <Title noMargin={true} size="small" color={true}>
            {fitness}
          </Title>
          <SubTitle small={true}>Poziom sprawności fizycznej</SubTitle>
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
