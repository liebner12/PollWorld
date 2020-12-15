import React, { createRef } from "react";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import Title from "../../components/common/Typography/title";
import ViewContainer from "../../components/common/Containers/viewContainer";
import Form from "../../components/form/form";
import {
  cantBeEmpty,
  onlyNumbers,
} from "../../components/form/typingValidation";

const EdditPage = ({ route, navigation }) => {
  const secondTextField = createRef();
  const thirdTextField = createRef();

  const onSubmit = () => {
    navigation.goBack();
    route.params.snackbar("Zedtyowano pomyślnie dane!");
  };

  return (
    <PrimaryContainer>
      <HeaderContainer returnButton={() => navigation.goBack()}>
        <Title color={true} shadow={true} size="big">
          Edytuj dane
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer>
            <Form
              buttonText="Zakończ"
              onSubmit={onSubmit}
              action={() => console.log("fake")}
              edit={true}
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
                height: {
                  name: "Wzrost",
                  keyboardType: "numeric",
                  validate: [onlyNumbers, cantBeEmpty],
                  blurOnSubmit: false,
                  onSubmitEditing: () => thirdTextField.current.focus(),
                },
                weight: {
                  name: "Waga",
                  keyboardType: "numeric",
                  validate: [onlyNumbers, cantBeEmpty],
                  ref: thirdTextField,
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
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

export default EdditPage;
