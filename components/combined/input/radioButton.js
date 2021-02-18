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
  create,
  onChangeValueRadio,
  setQuestionList,
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
                    value={value.values[key]}
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
              {create ? (
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => {
                    let del = Object.keys(value.values).find(
                      (val) => val == key
                    );

                    delete value.values[del];
                    setQuestionList({ ...create });
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
