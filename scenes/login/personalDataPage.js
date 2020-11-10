import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainButton from "../../components/common/MainButton";
import Title from "../../components/common/Title";
import Container from "../../components/common/Container";
import TextField from "../../components/common/TextField";
import Paragraph from "../../components/common/Paragraph";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { List } from "react-native-paper";
const PersonalDataPage = ({ navigation, onSignIn }) => {
  const [value, setValue] = React.useState("0");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
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
          <TextField name="Imię" text={name} setText={setName}/>
          <TextField name="Wiek" text={age} setText={setAge} />
          <TextField name="Płeć" text={sex} setText={setSex} />
          <List.Accordion
            titleStyle={styles.listFixUp}
            title="Rejon zatrudnienia"
          >
            <List.Item
              titleStyle={styles.listItem}
              title="IT"
              onPress={() => console.log("IT")}
            />
            <List.Item
              titleStyle={styles.listItem}
              title="Bankowość"
              onPress={() => console.log("bnk")}
            />
            <List.Item
              titleStyle={styles.listItem}
              title="Branża Budowlana"
              onPress={() => console.log("bud")}
            />
            <List.Item
              titleStyle={styles.listItem}
              title="Przemysł"
              onPress={() => console.log("prz")}
            />
            <List.Item
              titleStyle={styles.listItem}
              title="Branża Sporzywcza"
              onPress={() => console.log("jed")}
            />
            <List.Item
              titleStyle={styles.listItem}
              title="Transport i Logistyka"
              onPress={() => console.log("lgi")}
            />
          </List.Accordion>
          <List.Accordion titleStyle={styles.listFixUp} title="Zainteresowania">
            <List.Item
              titleStyle={styles.listItem}
              title="Sport"
              onPress={() => console.log("SP")}
            />
            <List.Item
              titleStyle={styles.listItem}
              title="Sztuka"
              onPress={() => console.log("bnk")}
            />
            <List.Item
              titleStyle={styles.listItem}
              title="Moda"
              onPress={() => console.log("bud")}
            />
            <List.Item
              titleStyle={styles.listItem}
              title="Gry Planszowe"
              onPress={() => console.log("prz")}
            />
            <List.Item
              titleStyle={styles.listItem}
              title="Gry Wideo"
              onPress={() => console.log("jed")}
            />
          </List.Accordion>
          <Text style={styles.livingTitle}>Miejsce zamieszkania</Text>
          <RadioButton.Group
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <View style={styles.radioContainer}>
              <View style={styles.radioButton}>
                <Paragraph>Metropolia</Paragraph>
                <RadioButton
                  value="metropolia"
                  color="#32e0c4"
                  uncheckedColor="#32e0c4"
                />
              </View>
              <View style={styles.radioButton}>
                <Paragraph>Miasto</Paragraph>
                <RadioButton
                  value="miasto"
                  color="#32e0c4"
                  uncheckedColor="#32e0c4"
                />
              </View>
              <View style={styles.radioButton}>
                <Paragraph>Wieś</Paragraph>
                <RadioButton
                  value="wies"
                  color="#32e0c4"
                  uncheckedColor="#32e0c4"
                />
              </View>
            </View>
          </RadioButton.Group>
          <View style={{ marginTop: 20 }}>
            <MainButton
              name="Kontynuuj"
              onPress={() => navigation.navigate("Physical")}
            />
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
  listFixUp:{
    marginLeft: -16,
    color:"#32e0c4"
  },
  listItem:{
    color:"#32e0c4",
    fontSize: 14,
    fontFamily: "Asap_600SemiBold",

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
