import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MainButton from "../../components/common/MainButton";
import Title from "../../components/common/Title";
import Container from "../../components/common/Container";
import Header from "../../components/combined/Header";
import SubTitle from "../../components/common/SubTitle";

const ProfilePage = ({ navigation, onSignOut }) => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header>
          <View style={styles.pudzian}></View>
        </Header>
        <Container wider={true}>
          <View style={styles.name}>
            <Title>Pudzian Pudzianowski</Title>
          </View>
          <MainButton name="Wyloguj się" onPress={() => onSignOut()} />
        </Container>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pudzian: {
    height: 125,
    width: 125,
    backgroundColor: "#444444",
    position: "absolute",
    top: 80,
    borderRadius: 16,
  },
  name: {
    alignItems: "center",
    marginTop: 30,
  },
});

export default ProfilePage;
