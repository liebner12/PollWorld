import React, { useState } from "react";
import { View } from "react-native";
import { Checkbox } from "react-native-paper";
import Paragraph from "../../common/Typography/paragraph";
import { colors } from "../../../styles/colors";
import TextField from "./textField";
import { ScaledSheet } from "react-native-size-matters";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
const CheckBoxGroup = ({
  fields,
  onPress,
  create,
  handleSurveyChange,
  newArray,
  item,
  index,
}) => {
  const fieldKeys = Object.keys(fields);
  const [isChecked, setIsChecked] = useState(false);

  const onChangeValue = (key, value) => {
    const newState = { ...isChecked, [key]: value };
    setIsChecked(newState);
    onPress(newState);
  };
  const styles = ScaledSheet.create({
    checkboxButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    button: {
      marginBottom: create ? "5@mvs" : 0,
    },
    closeButton: {
      marginLeft: 5,
      marginBottom: "5@mvs",
    },
  });

  return (
    <View>
      {fieldKeys.map((key) => {
        const field = fields[key];
        return (
          <View key={key} style={styles.checkboxButton}>
            <View style={styles.button}>
              <Checkbox
                status={isChecked[key] ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.primary}
                onPress={() =>
                  create ? null : onChangeValue(key, !isChecked[key])
                }
              />
            </View>
            {create ? (
              <View
                style={{
                  flex: 1,
                }}
              >
                <TextField
                  survey={true}
                  value={item.values[key]}
                  onChangeText={(text) => {
                    let values = [...item.values];
                    values[key] = text;
                    newArray[index] = { ...item, values: values };
                    handleSurveyChange("questions", newArray);
                  }}
                />
              </View>
            ) : (
              <Paragraph>{field.text}</Paragraph>
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
  );
};

export default CheckBoxGroup;
