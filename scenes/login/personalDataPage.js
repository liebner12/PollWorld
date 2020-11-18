import React, { createRef } from "react";
import { View } from "react-native";
import Title from "../../components/common/Title";
import Container from "../../components/common/Container";
import ReturnButton from "../../components/common/ReturnButton";
import Form from "../../components/form/Form";
import {
  cantBeEmpty,
  onlyNumbers,
} from "../../components/form/typingValidation";
import TitleContainer from "../../components/common/TitleContainer";
const PersonalDataPage = ({ navigation }) => {
  const secondTextField = createRef();
  const handleSubmit = () => {
    navigation.navigate("Physical");
  };

  return (
    <Container>
      <ReturnButton onPress={() => navigation.navigate("Register")} />
      <View>
        <TitleContainer>
          <Title>Dane osobowe</Title>
        </TitleContainer>
        <Form
          buttonText="Kontynuuj"
          onSubmit={handleSubmit}
          action={() => console.log("fake")}
          fields={{
            name: {
              name: "Imię",
              validate: [cantBeEmpty],
              blurOnSubmit: false,
              onSubmitEditing: () => secondTextField.current.focus(),
            },
            age: {
              name: "Wiek",
              keyboardType: "numeric",
              validate: [onlyNumbers, cantBeEmpty],
              ref: secondTextField,
            },
            sex: {
              type: "radio",
              title: "Płeć",
              fields: {
                male: { name: "mężczyzna" },
                female: { name: "kobieta" },
                others: { name: "inne" },
              },
              validate: [cantBeEmpty],
            },
          }}
        />
      </View>
    </Container>
  );
};

export default PersonalDataPage;
