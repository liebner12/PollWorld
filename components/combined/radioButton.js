import React from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";
import Paragraph from "../common/Typography/subTitle";
import SubTitle from "../common/Typography/subTitle";
const RadioButtonGroup = ({
  title,
  fields,
  defaultValue,
  value = defaultValue,
  setValue,
  survey,
}) => {
  const fieldKeys = Object.keys(fields);
  const styles = ScaledSheet.create({
    radioContainer: {
      flexDirection: survey ? "column" : "row",
      justifyContent: "space-between",
    },
    radioButton: {
      flexDirection: "row-reverse",
      alignItems: "center",
      alignSelf: "flex-start",
    },
  });
  return (
    <RadioButton.Group onValueChange={setValue} value={value}>
      {survey ? null : (
        <SubTitle small={true} color="color">
          {title}
        </SubTitle>
      )}
      <View style={styles.radioContainer}>
        {fieldKeys.map((key) => {
          const field = fields[key];
          return (
            <View key={key} style={styles.radioButton}>
              <Paragraph>{field.name}</Paragraph>
              <RadioButton
                value={field.name}
                color="#32e0c4"
                uncheckedColor="#32e0c4"
              />
            </View>
          );
        })}
      </View>
    </RadioButton.Group>
  );
};

export default RadioButtonGroup;
