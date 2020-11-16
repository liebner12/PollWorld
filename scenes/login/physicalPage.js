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
const PhysicalPage = ({ navigation, onSignIn }) => {
  const secondTextField = createRef();
  const handleSubmit = () => {
    onSignIn();
  };

  return (
    <Container>
      <ReturnButton onPress={() => navigation.navigate("Personal")} />
      <View>
        <TitleContainer>
          <Title>Fizyczne statystyki</Title>
        </TitleContainer>
        <View>
          <Form
            buttonText="Zakończ"
            onSubmit={handleSubmit}
            fields={{
              height: {
                name: "Wzrost",
                keyboardType: "numeric",
                validate: [onlyNumbers, cantBeEmpty],
                blurOnSubmit: false,
                onSubmitEditing: () => secondTextField.current.focus(),
              },
              weight: {
                name: "Waga",
                keyboardType: "numeric",
                validate: [onlyNumbers, cantBeEmpty],
                ref: secondTextField,
              },
              activity: {
                type: "radio",
                title: "Poziom aktywności fizycznej",
                fields: {
                  1: { name: "1" },
                  2: { name: "2" },
                  3: { name: "3" },
                  4: { name: "4" },
                  5: { name: "5" },
                },
                validate: [cantBeEmpty],
              },
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default PhysicalPage;
