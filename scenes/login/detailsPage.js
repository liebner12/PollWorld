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
            fields={{
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
