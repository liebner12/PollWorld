import React, { createRef } from "react";
import Title from "../../components/common/Typography/title";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import {
  validateTwoPasswords,
  cantBeEmpty,
  validatePasswordLength,
  validateEmail,
} from "../../components/form/typingValidation";
import { createAccount } from "../../components/functional/authentication/logic/appSignIn";
import Form from "../../components/form/form";
import ReturnButton from "../../components/common/returnButton";
import {TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Link from "../../components/common/Typography/link";
import Paragraph from "../../components/common/Typography/paragraph";

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
    <ScrollableContainer padding={true}>
      <ReturnButton />
      <Title>Zarejestruj się</Title>
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
                name: "registerPolicy",
                text: (
                  <Paragraph>
                    Akceptuję <Link>Warunki świadczenia usług</Link> i{" "}
                    <Link>Politykę prywatności</Link>
                  </Paragraph>
                ),
              },
            },
          },
        }}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("RegisterCompany")}
        style={{flex: 1, alignItems: "center", marginTop: 20,}}
      >
        <Paragraph>Jesteś firmą? <Link> Załóż konto dla firm!</Link></Paragraph>
      </TouchableOpacity>
    </ScrollableContainer>
  );
};

export default RegisterPage;
