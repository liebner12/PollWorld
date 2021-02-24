import React from "react";
import { View, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";
import Paragraph from "../../common/Typography/paragraph";
import SubTitle from "../../common/Typography/subTitle";
import { MaterialIcons } from "@expo/vector-icons";
import TextField from "./textField";

const RadioButtonGroup = ({
  title,
  fields,
  defaultValue,
  value = defaultValue,
  setValue,
  survey,
  create = false,
  item,
  newArray,
  handleSurveyChange,
  index

}) => {
  const fieldKeys = Object.keys(fields);
  const styles = ScaledSheet.create({
    radioContainer: {
      flexDirection: survey ? "column" : "row",
      justifyContent: "space-between",
    },
    radioButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    closeButton: {
      marginLeft: 5,
      marginBottom: "5@mvs",
    },
    button: {
      marginBottom: create ? "5@mvs" : 0,
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
            <View style={styles.radioButton} key={key}>
              <View style={styles.button}>
                <RadioButton
                  value={field.name}
                  color="#32e0c4"
                  uncheckedColor="#32e0c4"
                />
              </View>
              {create ? (
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <TextField
                    value={item.values[key]}
                    survey={true}
                    onChangeText={(text) => {
                      let values = [...item.values];
                      values[key] = text;
                      newArray[index] = { ...item, values: values };
                      handleSurveyChange("questions", newArray);
                    }}
                  />
                </View>
              ) : (
                <Paragraph>{field.name}</Paragraph>
              )}
              {create ? (
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => {
                    let values = [...item.values];
                    values.splice(key, 1);
                    newArray[index] = { ...item, values: values };
                    handleSurveyChange("questions", newArray);
                  }}
                >
                  <MaterialIcons name="close" size={24} color="white" />
                </TouchableOpacity>
              ) : null}
            </View>
          );
        })}
      </View>
    </RadioButton.Group>
  );
};

export default RadioButtonGroup;
