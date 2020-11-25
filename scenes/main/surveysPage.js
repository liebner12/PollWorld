import React from "react";
import { ScrollView } from "react-native";
import Title from "../../components/common/Title";
import Header from "../../components/combined/Header";
import ItemsList from "../../components/combined/ItemsList";
import ViewContainer from "../../components/common/ViewContainer";
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
      <ViewContainer wider={true}>
        <ItemsList
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
      </ViewContainer>
    </ScrollView>
  );
};

export default SurveysPage;
