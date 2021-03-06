import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import TextField from "../combined/input/textField";
import MainButton from "../common/mainButton";
import { validateFields, hasValidationError } from "./validate";
import RadioButtonGroup from "../combined/input/radioButton";
import CheckboxGroup from "../combined/input/checkbox";
import ExpandableList from "../combined/input/expandableList";
import HorizontalLine from "../common/horizontalLine";
import SubTitle from "../common/Typography/subTitle";
import { backgroundColors, colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { elevation, rounded } from "../../styles/base";
const Form = ({ fields, buttonText, onSubmit, action, survey, edit }) => {
  const fieldKeys = Object.keys(fields);
  const [values, setValues] = useState(edit ? edit : "");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState("");

  const onChangeValue = (key, value) => {
    const newState = { ...values, [key]: value };
    setValues(newState);

    if (validationErrors[key]) {
      const newErrors = { ...validationErrors, [key]: "" };
      setValidationErrors(newErrors);
    }
  };

  const getValues = () => {
    return fieldKeys.map((key) => values[key]);
  };

  const submit = async () => {
    setErrorMessage("");
    setValidationErrors("");
    const errors = validateFields(fields, values);
    if (hasValidationError(errors)) {
      return setValidationErrors(errors);
    }
    try {
      const result = await action(...getValues());
      await onSubmit(result);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <View>
      <Text style={styles.error}>{errorMessage}</Text>
      {fieldKeys.map((key) => {
        const field = fields[key];
        const fieldError = validationErrors[key];
        return (
          <View key={key} style={survey ? styles.container : ""}>
            {survey ? (
              <View>
                <SubTitle small={true}>{field.name}</SubTitle>
                <HorizontalLine />
              </View>
            ) : null}
            {field.type == "radio" ? (
              <RadioButtonGroup
                {...field}
                value={values[key]}
                survey={survey}
                setValue={(value) => onChangeValue(key, value)}
              />
            ) : field.type == "checkbox" ? (
              <CheckboxGroup
                {...field}
                value={values[key]}
                survey={survey}
                onPress={(value) => onChangeValue(key, value)}
              />
            ) : field.type == "list" ? (
              <ExpandableList
                {...field}
                value={values[key]}
                survey={survey}
                onPress={(value) => onChangeValue(key, value)}
              />
            ) : (
              <TextField
                {...field}
                value={values[key]}
                survey={survey}
                onChangeText={(text) => onChangeValue(key, text)}
              />
            )}
            {survey ? null : <Text style={styles.error}>{fieldError}</Text>}
          </View>
        );
      })}
      <MainButton name={buttonText} onPress={() => submit()} />
    </View>
  );
};
const styles = StyleSheet.create({
  error: {
    fontFamily: fonts.secondary,
    minHeight: 20,
    color: colors.error,
    marginBottom: "1%",
  },
  container: {
    backgroundColor: backgroundColors.secondary,
    borderRadius: rounded.md,
    padding: 25,
    marginBottom: 25,
    elevation: elevation.elevation,
  },
});
export default Form;
