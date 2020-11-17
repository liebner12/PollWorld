import React, { createRef } from "react";
import { View, Text } from "react-native";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
import Container from "../../components/common/Container";
import {
  validateTwoPasswords,
  cantBeEmpty,
  validatePasswordLength,
  validateEmail,
} from "../../components/form/typingValidation";
import { createAccount } from "../../components/functional/authentication/logic/appSignIn";
import Form from "../../components/form/Form";
import ReturnButton from "../../components/common/ReturnButton";
import TitleContainer from "../../components/common/TitleContainer";
import Link from "../../components/common/Link";

const RegisterPage = ({ navigation }) => {
  const secondTextField = createRef();
  const thirdTextField = createRef();
  const handleRegister = (result) => {
    if (result === 200) {
      navigation.navigate("Personal");
    } else if (result === 400) {
      throw new Error("Ten adres email jest już używany.");
    } else {
      throw new Error("Coś poszło nie tak.");
    }
  };

  return (
    <Container>
      <ReturnButton onPress={() => navigation.navigate("Start")} />
      <View>
        <TitleContainer>
          <Title>Zarejestruj się</Title>
        </TitleContainer>
        <View>
          <Form
            buttonText="Zarejestruj się"
            onSubmit={handleRegister}
            action={createAccount}
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
                blurOnSubmit: false,
                onSubmitEditing: () => thirdTextField.current.focus(),
              },
              secondPassword: {
                name: "Powtórz hasło",
                password: true,
                secured: true,
                validate: [validateTwoPasswords],
                ref: thirdTextField,
              },
              registerPolicy: {
                type: "checkbox",
                validate: [cantBeEmpty],
                fields: {
                  registerPolicy: {
                    text: (
                      <Text>
                        Akceptuję <Link>Warunki świadczenia usług</Link> i{" "}
                        <Link>Politykę prywatności</Link>
                      </Text>
                    ),
                  },
                },
              },
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default RegisterPage;
