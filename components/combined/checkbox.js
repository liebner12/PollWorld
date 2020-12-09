import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Checkbox } from "react-native-paper";
import Paragraph from "../common/Typography/paragraph";
import { colors } from "../../styles/colors";
const CheckBoxGroup = ({ fields, onPress }) => {
  const fieldKeys = Object.keys(fields);
  const [isChecked, setIsChecked] = useState(false);

  const onChangeValue = (key, value) => {
    const newState = { ...isChecked, [key]: value };
    setIsChecked(newState);
    onPress(newState);
  };

  return (
    <View>
      {fieldKeys.map((key) => {
        const field = fields[key];
        return (
          <View key={key} style={styles.checkboxButton}>
            <Checkbox
              status={isChecked[key] ? "checked" : "unchecked"}
              color={colors.primary}
              uncheckedColor={colors.primary}
              onPress={() => onChangeValue(key, !isChecked[key])}
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
