import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Paragraph from "../common/Typography/paragraph";
import { useNavigation } from "@react-navigation/native";
import { ScaledSheet } from "react-native-size-matters";
import { backgroundColors } from "../../styles/colors";
import { elevation, rounded } from "../../styles/base";
import SubTitle from "../common/Typography/subTitle";
import ItemHeader from "../common/itemHeader";
import { fonts } from "../../styles/fonts";
const Survey = ({
  id,
  name,
  category,
  description,
  fit,
  even,
  rate,
  price,
  snackbar,
  company,
}) => {
  const styles = ScaledSheet.create({
    item: {
      backgroundColor: backgroundColors.secondary,
      width: fit ? "42.5%" : "200@s",
      minHeight: fit ? 250 : 150,
      borderRadius: rounded.md,
      elevation: elevation.elevation,
      paddingTop: "10@mvs",
      paddingBottom: 10,
      marginRight: fit ? (even ? "5%" : 0) : 30,
      marginLeft: fit ? (even ? "5%" : 0) : 0,
      marginBottom: fit ? "30@vs" : "10@vs",
      paddingHorizontal: "10@ms",
    },
    textAlign: {
      textAlign: fit ? "center" : "auto",
      flex: 1,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10@vs",
    },
    priceContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
  });
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.6}
      onPress={() => {
        company
          ? navigation.navigate("ViewSurvey", {
              itemId: id,
            })
          : navigation.navigate("Item", { itemId: id, snackbar: snackbar });
      }}
    >
      <ItemHeader fit={fit} name={name} category={category} />
      <Text style={styles.textAlign}>
        <Paragraph>{description}</Paragraph>
      </Text>
      <View style={styles.footer} activeOpacity={0.6}>
        <SubTitle color="white" small={true}>
          Ocena: {rate}
        </SubTitle>
        <View style={styles.priceContainer}>
          <SubTitle color="white" small={true}>
            {price}{" "}
          </SubTitle>
          <FontAwesome5 name="money-bill" size={fonts.xs} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Survey;
