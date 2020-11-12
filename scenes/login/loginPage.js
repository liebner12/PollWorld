import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainButton from "../../components/common/MainButton";
import { FontAwesome } from "@expo/vector-icons";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
import Container from "../../components/common/Container";
import TextField from "../../components/common/TextField";
import { Ionicons } from "@expo/vector-icons";
import { validateEmail } from "../../components/functional/typingValidation";
import { validatePasswordLength } from "../../components/functional/typingValidation";
import { login } from "../../api/authentication";
const LoginPage = ({ navigation, onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const submit = () => {
    login(email, password)
      .then(async (res) => {
        await setToken(res.token);
        onSignIn();
      })
      .catch((res) => console.log(res));
  };
  const validateLogin = () => {
    if (validateEmail(email)) {
      setEmailError("");
      validatePasswordLength(password)
        ? (setPasswordError(""), submit())
        : setPasswordError("Niepoprawne hasło.");
    } else {
      setEmailError("Wprowadź poprawny adres e-mail.");
      validatePasswordLength ? setPasswordError("Niepoprawne hasło.") : "";
    }
  };
  /*validateEmail(email)
      ? (setEmailError(""),
        validatePasswordLength(password)
          ? (setPasswordError(""), onSignIn())
          : setPasswordError("Niepoprawne hasło."))
      : (setEmailError("Wprowadź poprawny adres e-mail."),
        validatePassword ? setPasswordError("Niepoprawne hasło.") : "");*/

  return (
    <Container>
      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Start")}
      >
        <Ionicons name="md-arrow-round-back" size={30} color="#32e0c4" />
      </TouchableOpacity>
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Title>Zaloguj się</Title>
          <SubTitle>O cześć, nie zauważyłem cie, siemanko!</SubTitle>
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
          <MainButton name="Zaloguj się" onPress={() => validateLogin()} />
          <Text style={[styles.greyText, styles.smallText]}>
            albo użyj twojego portalu społecznościowego
          </Text>

          <View style={styles.buttonContainer}>
            <View style={[styles.btn, styles.btnLeft]}>
              <MainButton
                name="Google"
                icon={<FontAwesome name="google" size={24} color="white" />}
                onPress={() => onSignIn}
              />
            </View>
            <View style={styles.btn}>
              <MainButton
                name="Facebook"
                icon={<FontAwesome name="facebook" size={24} color="white" />}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.greyText}>Zapomniałeś hasła?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.login}>Zarejestruj się</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 30,
  },
  main: {
    flex: 1,
    marginTop: 70,
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

export default LoginPage;
