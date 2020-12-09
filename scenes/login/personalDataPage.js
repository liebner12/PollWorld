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
const PersonalDataPage = ({ navigation }) => {
  const secondTextField = createRef();
  const handleSubmit = () => {
    navigation.navigate("Details");
  };

  return (
    <ScrollableContainer padding={true}>
      <ReturnButton />
      <View>
        <Title>Dane osobowe</Title>
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
    </ScrollableContainer>
  );
};

export default PersonalDataPage;
