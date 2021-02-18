import React from "react";
import { View, Text, TouchableOpacity, Clipboard } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";
import { backgroundColors, colors } from "../../styles/colors";
import SubTitle from "../common/Typography/subTitle";
import ItemHeader from "../common/itemHeader";
import { fonts } from "../../styles/fonts";
import { elevation, rounded } from "../../styles/base";
const Coupon = ({
  id,
  name,
  category,
  description,
  fit,
  even,
  price,
  code,
  setModalVisible,
  setCouponId,
  snackbar,
}) => {
  const copyToClipboard = () => {
    snackbar("Skopiowano kod do schowka.");
    Clipboard.setString(code);
  };

  const styles = ScaledSheet.create({
    item: {
      backgroundColor: backgroundColors.secondary,
      width: fit ? "42.5%" : "200@s",
      minHeight: fit ? 200 : 150,
      borderRadius: rounded.md,
      elevation: elevation.elevation,
      paddingTop: "10@mvs",
      marginRight: fit ? (even ? "5%" : 0) : 30,
      marginLeft: fit ? (even ? "5%" : 0) : 0,
      marginBottom: fit ? "30@vs" : "10@vs",
    },
    textAlign: {
      textAlign: fit ? "center" : "auto",
      flexGrow: 1,
    },
    main: {
      flexGrow: 1,
      paddingHorizontal: "10@s",
    },
    footer: {
      backgroundColor: colors.transparentPrimary,
      paddingHorizontal: "10@s",
      paddingVertical: "4@vs",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10@vs",
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
    },
    priceContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    codeAlign: {
      textAlign: "center",
      flex: 1,
    },
  });

  return (
    <View style={styles.item}>
      <View style={styles.main}>
        <ItemHeader fit={fit} name={name} category={category} />
        <Text style={styles.textAlign}>
          <SubTitle color="white" small={true}>
            {description}
          </SubTitle>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.footer}
        activeOpacity={0.6}
        onPress={() =>
          code ? copyToClipboard() : (setModalVisible(true), setCouponId(id))
        }
      >
        {code ? (
          <Text style={styles.codeAlign}>
            <SubTitle color="white">{code}</SubTitle>
          </Text>
        ) : (
          <View style={styles.priceContainer}>
            <SubTitle color="white">{price} </SubTitle>
            <FontAwesome5 name="money-bill" size={fonts.sm} color="white" />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Coupon;
