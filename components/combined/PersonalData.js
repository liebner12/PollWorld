import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
const PersonalData = () => {
  return (
    <View>
      <Title size="small">Twoje dane:</Title>
      <SubTitle>Wiek: 16</SubTitle>
      <SubTitle>Płeć: mężczyzna</SubTitle>
      <SubTitle>Miejsce zamieszkania: metropolia</SubTitle>
      <SubTitle>Zawód: lekarz</SubTitle>
      <SubTitle>Wzrost: 169cm</SubTitle>
      <SubTitle>Waga: 40kg</SubTitle>
    </View>
  );
};

export default PersonalData