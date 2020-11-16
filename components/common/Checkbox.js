import React from "react";
import { StyleSheet, View } from "react-native";
import { Checkbox } from "react-native-paper";
import Paragraph from "./Paragraph";

const CheckBoxGroup = ({ fields, value, onPress }) => {
  const fieldKeys = Object.keys(fields);
  return (
    <View>
      {fieldKeys.map((key) => {
        const field = fields[key];
        return (
          <View key={key} style={styles.checkboxButton}>
            <Checkbox
              status={value ? "checked" : "unchecked"}
              color="#32e0c4"
              uncheckedColor="#32e0c4"
              onPress={onPress}
            />
            <Paragraph>{field.text}</Paragraph>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  checkboxButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CheckBoxGroup;
