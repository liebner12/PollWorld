import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainButton from "../../components/common/MainButton";
import { FontAwesome } from "@expo/vector-icons";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
import Container from "../../components/common/Container";
import TextField from "../../components/common/TextField";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const RegisterPage = ({ navigation, onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkPasswordError, setCheckPasswordError] = useState("");
  return (
    <Container>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate("Start")}
      >
        <Ionicons name="md-arrow-round-back" size={30} color="#32e0c4" />
      </TouchableOpacity>
      <View style={styles.main}>
        <View style={styles.container}>
          <Title>Zarejestruj się</Title>
          <SubTitle>ziomeczku!</SubTitle>
        </View>
        <View>
          <TextField
            name="Email"
            text={email}
            setText={setEmail}
            error={emailError}
          />
          <TextField
            name="Hasło"
            password={true}
            secured={true}
            text={password}
            setText={setPassword}
            error={passwordError}
          />
          <TextField
            name="Powtórz hasło"
            password={true}
            secured={true}
            text={checkPassword}
            setText={setCheckPassword}
            error={checkPasswordError}
          />
          <MainButton
            name="Zarejestruj się"
            onPress={() => navigation.navigate("Personal")}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  listFixUp: {
    marginLeft: -16,
    marginBottom: 30,
    color: "#32e0c4",
  },
  listItem: {
    fontSize: 14,
    fontFamily: "Quicksand_700Bold",
    color: "#32e0c4",
  },
  main: {
    flex: 1,
  },
  login: {
    fontSize: 16,
    fontFamily: "Quicksand_700Bold",
    color: "#32e0c4",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  btn: { flex: 1 },
  btnLeft: { marginRight: 30 },
  greyText: {
    color: "#989eb1",
    fontSize: 16,
    fontFamily: "Asap_400Regular",
  },
  smallText: {
    marginVertical: 20,
    fontSize: 14,
    textAlign: "center",
  },
});

export default RegisterPage;
