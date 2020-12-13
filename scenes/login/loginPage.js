import React, { createRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainButton from "../../components/common/mainButton";
import { FontAwesome } from "@expo/vector-icons";
import Title from "../../components/common/Typography/title";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import { validateEmail } from "../../components/form/typingValidation";
import { validatePasswordLength } from "../../components/form/typingValidation";
import { login } from "../../components/functional/authentication/logic/appSignIn";
import Form from "../../components/form/form";
import ReturnButton from "../../components/common/returnButton";
import {
  handleGoogleLogin,
  handleFacebookLogin,
} from "../../components/functional/authentication/socialLogInHandler";
import Link from "../../components/common/Typography/link";
import Paragraph from "../../components/common/Typography/paragraph";
import {useDispatch} from "react-redux";
import {getAccessToken} from "../../components/functional/api/storedTokens";
import {dispatchSurveysWithValue} from "../../components/redux_components/accountController";
import {getSurveysForUser} from "../../components/functional/surveys/logic/survey";
import {serverToSurvey} from "../../components/functional/surveys/logic/surveyConverter";
import {getUserDataForUser} from "../../components/functional/profile/logic/userData";
import {dispatchProfileData, dispatchProfileDataWithValues} from "../../components/redux_components/profileController";

const LoginPage = ({ navigation, onSignIn }) => {
  const secondTextField = createRef();
  const dispatchSurveysWithData = useDispatch()
  const dispatchProfileWithData = useDispatch()

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
    <ScrollableContainer padding={true}>
      <ReturnButton />
      <View>
        <Title>Zaloguj się</Title>
        <View>
          <Form
            buttonText="Zaloguj się"
            onSubmit={handleLogin}
            action={login}
            fields={{
              email: {
                name: "Email",
                keyboardType: "email-address",
                validate: [validateEmail],
                blurOnSubmit: false,
                onSubmitEditing: () => secondTextField.current.focus(),
              },
              password: {
                name: "Hasło",
                password: true,
                secured: true,
                validate: [validatePasswordLength],
                ref: secondTextField,
              },
            }}
          />
          <View style={styles.smallText}>
            <Paragraph center={true}>
              albo użyj twojego portalu społecznościowego
            </Paragraph>
          </View>
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
            <Paragraph>Zapomniałeś hasła?</Paragraph>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Register")}
          >
            <Link style={styles.registerLink}>Zarejestruj się!</Link>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollableContainer>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  btn: { flex: 1 },
  btnLeft: { marginRight: 30 },
  smallText: {
    marginVertical: 5,
  },
});

export default LoginPage;
