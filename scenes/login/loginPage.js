import React, { createRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainButton from "../../components/common/MainButton";
import { FontAwesome } from "@expo/vector-icons";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
import Container from "../../components/common/Container";
import { validateEmail } from "../../components/form/typingValidation";
import { validatePasswordLength } from "../../components/form/typingValidation";
import { login } from "../../components/functional/authentication/logic/appSignIn";
import Form from "../../components/form/Form";
import ReturnButton from "../../components/common/ReturnButton";
import TitleContainer from "../../components/common/TitleContainer";
import {
  handleGoogleLogin,
  handleFacebookLogin,
} from "../../components/functional/authentication/socialLogInHandler";

const LoginPage = ({ navigation, onSignIn }) => {
  const secondTextField = createRef();
  const handleLogin = async (result) => {
    if (result === 200) {
      onSignIn();
    } else if (result === 401) {
      onSignIn();
      throw new Error("Błędny email lub hasło.");
    } else {
      onSignIn();
      throw new Error("Coś poszło nie tak.");
    }
  };

  return (
    <Container>
      <ReturnButton onPress={() => navigation.navigate("Start")} />
      <View>
        <TitleContainer>
          <Title>Zaloguj się</Title>
          <SubTitle>O cześć, nie zauważyłem cie, siemanko!</SubTitle>
        </TitleContainer>
        <View>
          <Form
            buttonText="Zaloguj się"
            onSubmit={handleLogin}
            action={login}
            fields={{
              email: {
                name: "Email",
                defaultValue: "asdf@ga.com",
                keyboardType: "email-address",
                validate: [validateEmail],
                blurOnSubmit: false,
                onSubmitEditing: () => secondTextField.current.focus(),
              },
              password: {
                name: "Hasło",
                defaultValue: "vzxcvasdfzx",
                password: true,
                secured: true,
                validate: [validatePasswordLength],
                ref: secondTextField,
              },
            }}
          />
          <Text style={[styles.greyText, styles.smallText]}>
            albo użyj twojego portalu społecznościowego
          </Text>
          <View style={styles.buttonsContainer}>
            <View style={[styles.btn, styles.btnLeft]}>
              <MainButton
                name="Google"
                icon={<FontAwesome name="google" size={24} color="white" />}
                onPress={() => handleGoogleLogin(onSignIn)}
              />
            </View>
            <View style={styles.btn}>
              <MainButton
                name="Facebook"
                icon={<FontAwesome name="facebook" size={24} color="white" />}
                onPress={() => handleFacebookLogin(onSignIn)}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.greyText}>Zapomniałeś hasła?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.registerLink}>Zarejestruj się</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  registerLink: {
    fontSize: 16,
    fontFamily: "Quicksand_700Bold",
    color: "#32e0c4",
  },
  buttonsContainer: {
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
