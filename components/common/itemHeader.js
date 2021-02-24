import React from "react";
import { View, Text, Image } from "react-native";
import Title from "../common/Typography/title";
import Paragraph from "../common/Typography/paragraph";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../styles/colors";
import { rounded } from "../../styles/base";
import icon from "../../assets/james.jpg";
const itemHeader = ({ name, category, fit }) => {
  const styles = ScaledSheet.create({
    header: {
      flexDirection: fit ? "column" : "row",
      alignItems: "center",
      justifyContent: fit ? "center" : "flex-start",
      marginBottom: "10@vs",
    },
    icon: {
      backgroundColor: colors.transparentPrimary,
      height: fit ? "64@ms" : "36@ms",
      width: fit ? "64@ms" : "36@ms",
      borderRadius: rounded.sm,
      marginRight: fit ? 0 : 10,
      marginBottom: fit ? 10 : 0,
    },
    textAlign: {
      textAlign: fit ? "center" : "auto",
    },
    category: {
      fontSize: "14@ms",
      color: colors.grey,
      alignSelf: "center",
      justifyContent: "center",
      fontFamily: "Quicksand_700Bold",
    },
  });
  return (
    <View style={styles.header}>
      <View style={styles.icon}>
        <Image style={styles.icon} source={icon} />
      </View>
      <View>
        <Text style={styles.textAlign}>
          <Title size="small" noMargin={true}>
            {name}
          </Title>
        </Text>
        <Text style={styles.textAlign}>
          <Paragraph grey={true}>{category}</Paragraph>
        </Text>
      </View>
    </View>
  );
};

export default itemHeader;
