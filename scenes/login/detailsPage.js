import React, { createRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Title from "../../components/common/Title";
import Container from "../../components/common/Container";
import ReturnButton from "../../components/common/ReturnButton";
import Form from "../../components/form/Form";
import {
  cantBeEmpty,
  onlyNumbers,
} from "../../components/form/typingValidation";
import TitleContainer from "../../components/common/TitleContainer";
import { List } from "react-native-paper";
import ExpandableList from "../../components/common/List";
const DetailsPage = ({ navigation, onSignIn }) => {
  const secondTextField = createRef();
  const handleSubmit = () => {
    onSignIn();
  };
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

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
      <ExpandableList />
    </Container>
  );
};
const styles = StyleSheet.create({
  listFixUp: {
    fontFamily: "Asap_600SemiBold",
    color: "#32e0c4",
  },
  listItem: {
    fontSize: 14,
    fontFamily: "Asap_400Regular",
    color: "#ffffff",
  },
  myFloatingList: {
    backgroundColor: "#313131",
    borderRadius: 20,
    position: "absolute",
    top: 80,
    width: "100%",
  },
  myList: {
    height: 60,
    borderColor: "#32e0c4",
    borderWidth: 2,
    borderRadius: 14,
    borderColor: "#32e0c4",
    elevation: 19,
  },
});
export default DetailsPage;
