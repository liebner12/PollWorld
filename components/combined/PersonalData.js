import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const PersonalData = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title size="small">Twoje dane:</Title>
        <TouchableOpacity onPress={onPress}>
          <Title>
            <MaterialIcons name="edit" size={24} color="#32e0c4" />
          </Title>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="cake" size={24} color="#000" />
        </View>
        <View>
          <Text style={styles.text}>16</Text>
          <SubTitle small={true}>Wiek</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="account-circle" size={24} color="#000" />
        </View>
        <View>
          <Text style={styles.text}>mężczyzna</Text>
          <SubTitle small={true}>Płeć</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="location-on" size={24} color="black" />
        </View>
        <View>
          <Text style={styles.text}>metropolia</Text>
          <SubTitle small={true}>Miejsce zamieszkania</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="work" size={24} color="black" />
        </View>
        <View>
          <Text style={styles.text}>lekarz</Text>
          <SubTitle small={true}>Zawód</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="human-male-height-variant"
            size={24}
            color="black"
          />
        </View>
        <View>
          <Text style={styles.text}>169cm</Text>
          <SubTitle small={true}>Wzrost</SubTitle>
        </View>
      </View>
      <View style={styles.spaceBetween}>
        <View style={styles.icon}>
          <MaterialIcons name="fitness-center" size={24} color="black" />
        </View>
        <View>
          <Text style={styles.text}>40kg</Text>
          <SubTitle small={true}>Waga</SubTitle>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontFamily: "Asap_500Medium",
    fontSize: 18,
  },
  spaceBetween: {
    marginVertical: 8,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 20,
    borderRadius: 16,
    elevation: 10,
    backgroundColor: "#444444",
  },
  line: {
    height: 2,
    backgroundColor: "#32e0c4",
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  icon: {
    padding: 4,
    backgroundColor: "#32e0c4",
    borderRadius: 100,
    marginRight: 15,
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PersonalData;
