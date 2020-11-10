import * as React from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const TextField = ({ name, password, secured, text, setText, error }) => {
  const [secure, setSecure] = React.useState(secured);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.textFieldContainer}>
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          color="#fff"
          style={styles.textField}
          selectionColor="white"
          secureTextEntry={secure}
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
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <Text style={styles.error}></Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  textField: {
    flex: 1,
    marginBottom: 5,
    fontSize: 16,
  },
  text: {
    fontSize: 14,
    fontFamily: "Asap_600SemiBold",
    color: "#32e0c4",
    marginBottom: 10,
  },
  textFieldContainer: {
    flexDirection: "row",
    borderBottomColor: "#32e0c4",
    borderBottomWidth: 2,
    color: "#fff",
    fontSize: 16,
  },
  error: {
    fontFamily: "Asap_400Regular",
    marginTop: 5,
    minHeight: 20,
    color: "#FF0000",
  },
});

export default TextField;
