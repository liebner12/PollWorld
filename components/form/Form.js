import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import TextField from "../common/TextField";
import MainButton from "../common/MainButton";
import { validateFields, hasValidationError } from "./validate";
import RadioButtonGroup from "../common/RadioButtonGroup";
import CheckboxGroup from "../common/Checkbox";

const Form = ({ fields, buttonText, onSubmit, action }) => {
  const fieldKeys = Object.keys(fields);
  const [values, setValues] = useState("");
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
    return fieldKeys.sort().map((key) => values[key]);
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
      await onSubmit();
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
          <View key={key}>
            {field.type == "radio" ? (
              <RadioButtonGroup
                {...field}
                value={values[key]}
                setValue={(value) => onChangeValue(key, value)}
              />
            ) : field.type == "checkbox" ? (
              <CheckboxGroup
                {...field}
                value={values[key]}
                onPress={() => onChangeValue(key, !values[key])}
              />
            ) : field.type == "list" ? (
              <ExpandableList
                {...field}
                value={values[key]}
                onPress={(value) => onChangeValue(key, value)}
              />
            ) : (
              <TextField
                {...field}
                value={values[key]}
                onChangeText={(text) => onChangeValue(key, text)}
              />
            )}
            <Text style={styles.error}>{fieldError}</Text>
          </View>
        );
      })}
      <MainButton name={buttonText} onPress={() => submit()} />
    </View>
  );
};
const styles = StyleSheet.create({
  error: {
    fontFamily: "Asap_400Regular",
    minHeight: 20,
    color: "#cf6679",
    marginBottom: "1%",
  },
});
export default Form;
