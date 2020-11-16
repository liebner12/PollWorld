import React from "react";
import { StyleSheet } from "react-native";
import MainButton from "../../components/common/MainButton";
import Title from "../../components/common/Title";
import Container from "../../components/common/Container";

const HomePage = ({ navigation, onSignOut }) => {
  return (
    <Container>
      <Title>Strona główna</Title>
      <MainButton name="Wyloguj się" onPress={() => onSignOut()} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default HomePage;
