//WORK IN PROGRESS 
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";
import Paragraph from "../common/Typography/paragraph";
import SubTitle from "../common/Typography/subTitle";
import { MaterialIcons } from "@expo/vector-icons";
import TextField from "./textField";

const RadioButtonGroup = ({
  title,
  fields,
  defaultValue,
  value = defaultValue,
  setValue,
  survey,
  create,
  onChangeValueRadio,
  setRadioList,
  objKey,
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
      flex: 1,
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
            <View
              key={key}
              style={{
                flexDirection: "row",
                flex: 1,
              }}
            >
              <RadioButton
                value={field.name}
                color="#32e0c4"
                uncheckedColor="#32e0c4"
              />
              <View style={styles.radioButton}>
                {create ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      value={value.values[key]}npm
                      survey={true}
                      onChangeText={(text) =>
                        onChangeValueRadio(objKey, {
                          ...value,
                          values: {
                            ...value.values,
                            [Object.keys(value.values).find(
                              (val) => val == key
                            )]: text,
                          },
                        })
                      }
                    />
                  </View>
                ) : (
                  <Paragraph>{field.name}</Paragraph>
                )}
              </View>
              {create ? (
                <TouchableOpacity
                  style={{
                    width: 24,
                    marginLeft: 2,
                    alignSelf: "center",
                    marginBottom: 5,
                  }}
                  onPress={() => {
                    delete value[key];
                    setRadioList({ ...value });
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
