import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MainButton from "../../components/common/MainButton";
import Title from "../../components/common/Title";
import Container from "../../components/common/Container";
import Header from "../../components/combined/Header";
import SubTitle from "../../components/common/SubTitle";
import ScollableItems from "../../components/combined/ScrollableItems";
import ItemsContainer from "../../components/common/ItemsContainer";

const SurveysPage = ({ navigation, onSignOut }) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#212121" }}
    >
      <Header>
        <Title color={true} shadow={true}>
          Ankiety
        </Title>
      </Header>
      <Container wider={true}>
        <ScollableItems
          title="Ankiety:"
          type="surveys"
          fit={true}
          fields={{
            1: {
              name: "Familiada",
              category: "Familiada",
              description:
                "Dołącz do elitarnego grona ankietowanych ludzi Familiady!",
              price: "150",
              rate: 4.5,
            },
            2: {
              name: "Smart",
              category: "Allegro",
              description:
                "Pomóż nam udoskonalić usługę Smart, tak by była jeszcze wygodniejsza dla Ciebie!",
              price: "250",
            },
            3: {
              name: "Familiada",
              category: "Familiada",
              description:
                "Dołącz do elitarnego grona ankietowanych ludzi Familiady!",
              price: "150",
            },
            4: {
              name: "Smart",
              category: "Allegro",
              description:
                "Pomóż nam udoskonalić usługę Smart, tak by była jeszcze wygodniejsza dla Ciebie!",
              price: "250",
            },
            5: {
              name: "Familiada",
              category: "Familiada",
              description:
                "Dołącz do elitarnego grona ankietowanych ludzi Familiady!",
              price: "150",
            },
            6: {
              name: "Smart",
              category: "Allegro",
              description:
                "Pomóż nam udoskonalić usługę Smart, tak by była jeszcze wygodniejsza dla Ciebie!",
              price: "250",
            },
            7: {
              name: "Familiada",
              category: "Familiada",
              description:
                "Dołącz do elitarnego grona ankietowanych ludzi Familiady!",
              price: "150",
            },
            8: {
              name: "Smart",
              category: "Allegro",
              description:
                "Pomóż nam udoskonalić usługę Smart, tak by była jeszcze wygodniejsza dla Ciebie!",
              price: "250",
            },
          }}
        />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SurveysPage;
