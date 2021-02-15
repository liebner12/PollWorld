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
import Link from "../../components/common/Typography/link";
import Paragraph from "../../components/common/Typography/paragraph";

const RegisterCompany = ({ navigation, onSignIn }) => {
  const secondTextField = createRef();
  const thirdTextField = createRef();
  const handleRegister = (result) => {
    if (result === 200) {
      navigation.navigate("ComapnyData");
    } else if (result === 400) {
      throw new Error("Ten adres email jest już używany.");
    } else {
      throw new Error("Coś poszło nie tak.");
    }
  };

  return (
    <ScrollableContainer padding={true}>
      <ReturnButton />
      <Title>Rejestracja dla firm!</Title>
      <Form
        buttonText="Zarejestruj się"
        onSubmit={()=> onSignIn(true)}
        action={()=>console.log("fake")}
        fields={{
          email: {
            name: "Email",
            keyboardType: "email-address",
            //validate: [validateEmail],
            blurOnSubmit: false,
            onSubmitEditing: () => secondTextField.current.focus(),
          },
          password: {
            name: "Hasło",
            password: true,
            secured: true,
            //validate: [validatePasswordLength],
            ref: secondTextField,
            blurOnSubmit: false,
            onSubmitEditing: () => thirdTextField.current.focus(),
          },
          secondPassword: {
            name: "Powtórz hasło",
            password: true,
            secured: true,
            //validate: [validateTwoPasswords],
            ref: thirdTextField,
          },
          registerPolicy: {
            type: "checkbox",
            //validate: [cantBeEmpty],
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
    </ScrollableContainer>
  );
};

export default RegisterCompany;
