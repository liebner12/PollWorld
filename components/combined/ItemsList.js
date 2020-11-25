import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import Title from "../common/Title";
import Item from "./Item";
import Link from "../common/Link";
const ItemsList = ({ fields, title, type, subTitle, action, fit }) => {
  const fieldKeys = Object.keys(fields);
  return (
    <View>
      <View style={styles.title}>
        <Title size="small" color={true} noMargin={true}>
          {title}
        </Title>
        {subTitle ? (
          <TouchableOpacity activeOpacity={0.3} onPress={() => action()}>
            <Link style={styles.subTitle}>{subTitle}</Link>
          </TouchableOpacity>
        ) : null}
      </View>
      {fit ? (
        <View style={styles.contentContainer}>
          {fieldKeys.map((key) => {
            const field = fields[key];
            return (
              <Item
                key={key}
                name={field.name}
                category={field.category}
                description={field.description}
                price={field.price}
                coupon={field.coupon}
                type={type}
                fit={fit}
                even={key % 2 ? true : false}
                rate={field.rate}
              />
            );
          })}
        </View>
      ) : (
        <ScrollView horizontal={true} style={styles.contentContainer}>
          {fieldKeys.map((key) => {
            const field = fields[key];
            return (
              <Item
                key={key}
                name={field.name}
                category={field.category}
                description={field.description}
                price={field.price}
                coupon={field.coupon}
                type={type}
                fit={fit}
                rate={field.rate}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    overflow: "visible",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    marginBottom: 10,
  },
});

export default ItemsList;
