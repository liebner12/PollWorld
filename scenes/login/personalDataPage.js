import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainButton from "../../components/common/MainButton";
import Title from "../../components/common/Title";
import Container from "../../components/common/Container";
import TextField from "../../components/common/TextField";
import MainText from "../../components/common/MainText";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
const PersonalDataPage = ({ navigation, onSignIn }) => {
  const [value, setValue] = React.useState("first");

  return (
    <Container>
      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Start")}
      >
        <Ionicons name="md-arrow-round-back" size={30} color="#32e0c4" />
      </TouchableOpacity>
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Title>Dane osobowe</Title>
        </View>
        <View>
          <TextField name="Imię" />
          <TextField name="Wiek" />
          <TextField name="Płeć" />
          <TextField name="Zawód" />
          <Text style={styles.livingTitle}>Miejsce zamieszkania</Text>
          <RadioButton.Group
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <View style={styles.radioContainer}>
              <View style={styles.radioButton}>
                <MainText>Metropolia</MainText>
                <RadioButton
                  value="metropolia"
                  color="#32e0c4"
                  uncheckedColor="#32e0c4"
                />
              </View>
              <View style={styles.radioButton}>
                <MainText>Miasto</MainText>
                <RadioButton
                  value="miasto"
                  color="#32e0c4"
                  uncheckedColor="#32e0c4"
                />
              </View>
              <View style={styles.radioButton}>
                <MainText>Wieś</MainText>
                <RadioButton
                  value="wies"
                  color="#32e0c4"
                  uncheckedColor="#32e0c4"
                />
              </View>
            </View>
          </RadioButton.Group>
          <View style={{ marginTop: 20 }}>
            <MainButton name="Kontynuuj" onPress={() => navigation.navigate("Physical")}/>
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioButton: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  livingTitle: {
    fontSize: 14,
    fontFamily: "Asap_600SemiBold",
    color: "#32e0c4",
    marginBottom: 10,
  },

  titleContainer: {
    marginBottom: 30,
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  login: {
    fontSize: 16,
    fontFamily: "Quicksand_700Bold",
    color: "#32e0c4",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  btn: { flex: 1 },
  btnLeft: { marginRight: 30 },
  greyText: {
    color: "#989eb1",
    fontSize: 16,
    fontFamily: "Asap_400Regular",
  },
  smallText: {
    marginVertical: 20,
    fontSize: 14,
    textAlign: "center",
  },
});

export default PersonalDataPage;
