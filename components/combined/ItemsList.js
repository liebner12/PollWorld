import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Title from "../common/Typography/title";
import Link from "../common/Typography/link";
import { ScaledSheet } from 'react-native-size-matters';
const ItemsList = ({ children, title, subTitle, action, fit }) => {
  return (
    <View>
      <View style={styles.title}>
        <Title size="small" color={true} noMargin={true}>
          {title}
        </Title>
        {subTitle ? (
          <TouchableOpacity activeOpacity={0.3} onPress={() => action()}>
            <Link>{subTitle}</Link>
          </TouchableOpacity>
        ) : null}
      </View>
      {fit ? (
        <View style={styles.contentContainer}>{children}</View>
      ) : (
        <ScrollView horizontal={true} style={styles.contentContainer} >
          {children}
        </ScrollView>
      )}
    </View>
  );
};
const styles = ScaledSheet.create({
  contentContainer: {
    overflow: "visible",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    marginBottom: '10@mvs',
  },
});

export default ItemsList;
