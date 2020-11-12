import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MainButton from "../../components/common/MainButton";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
import Container from "../../components/common/Container";
import TextField from "../../components/common/TextField";
import { Ionicons } from "@expo/vector-icons";
import { validateEmail } from "../../components/functional/authentication/logic/typingValidation";
import { validatePasswordLength } from "../../components/functional/authentication/logic/typingValidation";
import { validateTwoPasswords } from "../../components/functional/authentication/logic/typingValidation";
import { createAccount } from "../../components/functional/authentication/communication/authentication";
import { setToken } from "../../components/functional/api/storedToken";
const RegisterPage = ({ navigation, onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkPasswordError, setCheckPasswordError] = useState("");

  const submit = () => {
    createAccount(email, password)
      .then(async (res) => {
        await setToken(res.token);
        navigation.navigate("Personal");
      })
      .catch((res) => console.log(res));
  };

  const validateRegister = () => {
    if (validateEmail(email)) {
      setEmailError("");
      if (validateTwoPasswords(password, checkPassword)) {
        setCheckPasswordError("");
        if (validatePasswordLength(password)) {
          setPasswordError("");
          submit();
        } else {
          setPasswordError("Niepoprawne hasło.");
        }
      } else {
        setCheckPasswordError("Hasła różnią się od siebie.");
        validatePasswordLength(password)
          ? setPasswordError("")
          : setPasswordError("Niepoprawne hasło.");
      }
    } else {
      setEmailError("Wprowadź poprawny adres e-mail.");
      validatePasswordLength
        ? setPasswordError("Niepoprawne hasło.")
        : setPasswordError("");
      if (validateTwoPasswords(password, checkPassword)) {
        setCheckPasswordError("");
      } else {
        setCheckPasswordError("Hasła różnią się od siebie.");
      }
    }
    /*validateEmail(email)
      ? (setEmailError(""),
        validateTwoPasswords(password, checkPassword)
          ? (setCheckPasswordError(""),
          validatePasswordLength(password)
              ? (setPasswordError(""), registerLogic(email, password))
              : setPasswordError("Niepoprawne hasło."))
          : (setCheckPasswordError("Hasła różnią się od siebie.")),)
      : (setEmailError("Wprowadź poprawny adres e-mail."),
        validatePassword ? setPasswordError("Niepoprawne hasło.") : ""); */
  };

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
            onPress={() => validateRegister()}
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
    justifyContent: "center",
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
