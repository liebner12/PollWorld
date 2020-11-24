import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Title from "../../components/common/Title";
import { FontAwesome5 } from "@expo/vector-icons";
import SubTitle from "../../components/common/SubTitle";
import Paragraph from "../../components/common/Paragraph";
const Item = ({
  name,
  category,
  description,
  type,
  price,
  coupon,
  fit,
  even,
  rate,
}) => {
  const styles = StyleSheet.create({
    item: {
      backgroundColor: "#444",
      height: type == "surveys" ? 190 : 150,
      width: fit ? "45%" : 200,
      borderRadius: 16,
      elevation: 5,
      paddingVertical: 8,
      marginRight: fit ? (even ? "5%" : 0) : 30,
      marginLeft: fit ? (even ? 0 : "5%") : 0,
      marginBottom: fit ? "10%" : 20,
    },
    icon: {
      backgroundColor: "rgba(50, 224, 196, 0.7)",
      height: 36,
      width: 36,
      borderRadius: 12,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
    },
    price: {
      fontSize: 16,
      color: "#fff",
      fontFamily: "Asap_600SemiBold",
    },
    priceContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: price ? "flex-end" : "center",
      position: "absolute",
      bottom: 0,
      left: 0,
      paddingVertical: 5,
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      width: "100%",
      backgroundColor: type == "coupons" ? "rgba(50, 224, 196, 0.7)" : null,
      paddingHorizontal: 15,
    },
    description: {
      flex: 1,
      paddingHorizontal: 10,
    },
  });
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <View style={styles.icon}></View>
        <View
          style={{
            marginLeft: 8,
            justifyContent: "center",
            marginBottom: 4,
            flex: 1,
          }}
        >
          <Title size="small" noMargin={true}>
            {name}
          </Title>
          <SubTitle small={true}>{category}</SubTitle>
        </View>
      </View>
      <View style={styles.description}>
        {type == "coupons" ? (
          <Text style={styles.price}>{description}</Text>
        ) : (
          <Paragraph>{description}</Paragraph>
        )}
      </View>
      <TouchableOpacity style={styles.priceContainer} activeOpacity={0.6}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: rate ? "space-between" : "flex-end",
            width: "100%",
          }}
        >
          {rate ? <Text style={styles.price}>Ocena: {rate}</Text> : null}
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.price}>{price ? price : coupon} </Text>
            {price ? (
              <FontAwesome5
                name="money-bill"
                size={16}
                color="white"
                style={{ marginTop: 3 }}
              />
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
