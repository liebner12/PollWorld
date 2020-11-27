import React, { createRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MainButton from "../../components/common/MainButton";
import Title from "../../components/common/Title";
import Header from "../../components/common/Header";
import ViewContainer from "../../components/common/ViewContainer";
import Form from "../../components/form/Form";
import {
  cantBeEmpty,
  onlyNumbers,
} from "../../components/form/typingValidation";
const EdditPage = ({ navigation }) => {
  const secondTextField = createRef();
  const thirdTextField = createRef();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#212121" }}
    >
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Header returnButton={() => navigation.goBack()}>
          <Title color={true} shadow={true}>
            Edytuj dane
          </Title>
        </Header>
        <ViewContainer>
          <Form
            buttonText="Zakończ"
            onSubmit={() => console.log("ha")}
            action={() => console.log("fake")}
            fields={{
              name: {
                name: "Imię",
                defaultValue: "Michał",
                validate: [cantBeEmpty],
                blurOnSubmit: false,
                onSubmitEditing: () => secondTextField.current.focus(),
              },
              age: {
                name: "Wiek",
                defaultValue: "16",
                keyboardType: "numeric",
                validate: [onlyNumbers, cantBeEmpty],
                ref: secondTextField,
              },
              sex: {
                type: "radio",
                title: "Płeć",
                defaultValue: "mężczyzna",
                fields: {
                  male: { name: "mężczyzna" },
                  female: { name: "kobieta" },
                  others: { name: "inne" },
                },
                validate: [cantBeEmpty],
              },
              job: {
                type: "list",
                title: "Branża",
                defaultValue: "przemysł",
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
              hometown: {
                type: "radio",
                title: "Miejsce zamieszkania",
                defaultValue: "metropolia",
                fields: {
                  city: { name: "metropolia" },
                  town: { name: "miasto" },
                  village: { name: "wieś" },
                },
                validate: [cantBeEmpty],
              },
              height: {
                name: "Wzrost",
                keyboardType: "numeric",
                defaultValue: "169",
                validate: [onlyNumbers, cantBeEmpty],
                blurOnSubmit: false,
                onSubmitEditing: () => thirdTextField.current.focus(),
              },
              weight: {
                name: "Waga",
                keyboardType: "numeric",
                defaultValue: "40",
                validate: [onlyNumbers, cantBeEmpty],
                ref: thirdTextField,
              },
              activity: {
                type: "radio",
                title: "Poziom aktywności fizycznej",
                defaultValue: "3",
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
        </ViewContainer>
      </View>
    </ScrollView>
  );
};

export default EdditPage;
