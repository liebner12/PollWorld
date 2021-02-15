import React, { createRef } from "react";
import Title from "../../components/common/Typography/title";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import {cantBeEmpty} from "../../components/form/typingValidation";
import { createAccount } from "../../components/functional/authentication/logic/appSignIn";
import Form from "../../components/form/form";
import ReturnButton from "../../components/common/returnButton";

const RegisterPage = ({ navigation }) => {
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
      <Title>Dane firmy</Title>
      <Form
        buttonText="Zarejestruj się"
        onSubmit={handleRegister}
        action={createAccount}
        fields={{
          nazwa: {
            name: "Nazwa",
            keyboardType: "email-address",
            blurOnSubmit: false,
            validate: [cantBeEmpty],
            onSubmitEditing: () => secondTextField.current.focus(),
          },
          job: {
            type: "list",
            title: "Branża",
            defaultValue: "leśnictwo",
            fields: {
              1: { name: "przemysł" },
              2: { name: "budownictwo" },
              3: { name: "rolnictwo" },
              4: { name: "leśnictwo" },
              5: { name: "transport" },
              6: { name: "łączność" },
              7: { name: "handel" },
              8: { name: "IT" },
              9: {
                name:
                  "pozostałe gałęzie produkcji materialnej (wydawnictwa, filmy, usługi informacyjne i inne)",
              },
              10: { name: "gospodarka komunalna" },
              11: {
                name:
                  "gospodarka mieszkaniowa oraz niematerialne usługi komunalne",
              },
              12: { name: "nauka i rozwój techniki " },
              13: { name: "oświata i wychowanie" },
              14: { name: "kultura i sztuka" },
              15: { name: "ochrona zdrowia i pomoc społeczna" },
              16: { name: "kultura fizyczna, turystyka i wypoczynek" },
              17: {
                name:
                  "pozostałe branże usług niematerialnych (fryzjerskie, kosmetyczne, fotograficzne i inne)",
              },
              18: {
                name: "administracja państwowa i wymiar sprawiedliwości",
              },
              19: { name: "finanse i ubezpieczenia" },
              20: { name: "organizacje polityczne, związki zawodowe" },
            },
            validate: [cantBeEmpty],
          },
        }}
      />
    </ScrollableContainer>
  );
};

export default RegisterPage;
