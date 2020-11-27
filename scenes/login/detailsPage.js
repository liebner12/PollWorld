import React, { createRef } from "react";
import { View, StyleSheet } from "react-native";
import Title from "../../components/common/Title";
import Container from "../../components/common/Container";
import ReturnButton from "../../components/common/ReturnButton";
import Form from "../../components/form/Form";
import { cantBeEmpty } from "../../components/form/typingValidation";
import TitleContainer from "../../components/common/TitleContainer";

const DetailsPage = ({ navigation, onSignIn }) => {
  const handleSubmit = () => {
    navigation.navigate("Physical");
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
            action={() => console.log("fake")}
            fields={{
              job: {
                type: "list",
                title: "Branża",
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
                fields: {
                  city: { name: "metropolia" },
                  town: { name: "miasto" },
                  village: { name: "wieś" },
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

export default DetailsPage;
