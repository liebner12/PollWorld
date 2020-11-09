import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainButton from "../../components/common/MainButton";
import { FontAwesome } from "@expo/vector-icons";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
import Container from "../../components/common/Container";
import TextField from "../../components/common/TextField";
import { Ionicons } from "@expo/vector-icons";

const HomePage = ({ navigation, onSignOut }) => {
  console.log(onSignOut);
  
  return (
    <Container>
      <Title>Strona główna</Title>
      <MainButton
        name="Wyloguj się"
        onPress={() => onSignOut()}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default HomePage;
