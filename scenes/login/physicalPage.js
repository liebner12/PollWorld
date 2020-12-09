import React, { createRef } from "react";
import { View } from "react-native";
import Title from "../../components/common/Typography/title";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ReturnButton from "../../components/common/returnButton";
import Form from "../../components/form/form";
import {
  cantBeEmpty,
  onlyNumbers,
} from "../../components/form/typingValidation";
const PhysicalPage = ({ navigation, onSignIn }) => {
  const secondTextField = createRef();
  const handleSubmit = () => {
    onSignIn();
  };

  return (
    <ScrollableContainer padding={true}>
      <ReturnButton />
      <View>
        <Title>Fizyczne statystyki</Title>
        <View>
          <Form
            buttonText="Zakończ"
            onSubmit={handleSubmit}
            action={() => console.log("fake")}
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
    </ScrollableContainer>
  );
};

export default PhysicalPage;
