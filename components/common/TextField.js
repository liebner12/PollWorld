import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const TextField = React.forwardRef(
  (
    {
      name,
      password,
      secured,
      text,
      onChangeText,
      onSubmitEditing,
      keyboardType,
      blurOnSubmit,
      defaultValue,
    },
    ref
  ) => {
    const [secure, setSecure] = React.useState(secured);

    return (
      <View style={styles.container}>
        <Text style={styles.fieldName}>{name}</Text>
        <View style={styles.textFieldContainer}>
          <TextInput
            value={text}
            defaultValue={defaultValue}
            onChangeText={onChangeText}
            color="#fff"
            style={styles.textField}
            selectionColor="white"
            secureTextEntry={secure}
            onSubmitEditing={onSubmitEditing}
            keyboardType={keyboardType}
            maxLength={40}
            ref={ref}
            blurOnSubmit={blurOnSubmit}
          />
          {password ? (
            <AntDesign
              name="eye"
              size={24}
              color={secure ? "#d1d6db" : "#32e0c4"}
              onPress={() => setSecure(!secure)}
            />
          ) : null}
        </View>
      </View>
    );
  }
);
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  textField: {
    flex: 1,
    marginBottom: 5,
    fontSize: 16,
    color: "#fff",
  },
  fieldName: {
    fontSize: 14,
    fontFamily: "Asap_600SemiBold",
    color: "#32e0c4",
    marginBottom: 10,
  },
  textFieldContainer: {
    flexDirection: "row",
    borderBottomColor: "#32e0c4",
    borderBottomWidth: 2,
  },
});

export default TextField;
