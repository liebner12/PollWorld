import React from "react";
import { View, ScrollView } from "react-native";
import Title from "../../components/common/Title";
import Header from "../../components/common/Header";
import { FontAwesome5 } from "@expo/vector-icons";
import SubTitle from "../../components/common/SubTitle";
import ItemsList from "../../components/combined/ItemsList";
import ViewContainer from "../../components/common/ViewContainer";

const HomePage = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#212121" }}
    >
      <Header>
        <Title color={true} shadow={true}>
          Twoje punkty:
        </Title>
        <Title color={true} size="big" shadow={true} noMargin={true}>
          1923 <FontAwesome5 name="money-bill" size={24} color="white" />
        </Title>
      </Header>
      <ViewContainer wider={true}>
        <Title>Witaj Michał</Title>
        <SubTitle>Mamy dla Ciebie super ankiety!</SubTitle>
        <View style={{ marginTop: 40 }}>
          <ItemsList
            title="Nowe ankiety"
            subTitle="Zobacz wszystkie:"
            action={() => navigation.navigate("Surveys")}
            fields={{
              1: {
                name: "Familiada",
                category: "Familiada",
                description:
                  "Dołącz do elitarnego grona ankietowanych ludzi Familiady!",
                price: "150",
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
            }}
          />
          <ItemsList
            title="Kupony"
            subTitle="Zobacz wszystkie:"
            type="coupons"
            action={() => navigation.navigate("Shopping")}
            fields={{
              1: {
                name: "bonprix",
                category: "Ubrania i buty",
                description: "Czwarta sztuka gratis!",
                price: "1500",
              },
              2: {
                name: "eobuwie",
                category: "Ubrania i buty",
                description: "-10% na cały asortyment",
                price: "2100",
              },
              3: {
                name: "bonprix",
                category: "Ubrania i buty",
                description: "Czwarta sztuka gratis!",
                price: "1500",
              },
            }}
          />
        </View>
      </ViewContainer>
    </ScrollView>
  );
};

export default HomePage;
