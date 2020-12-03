import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MainButton from "../../components/common/MainButton";
import Title from "../../components/common/Title";
import Header from "../../components/common/Header";
import ViewContainer from "../../components/common/ViewContainer";
import SubTitle from "../../components/common/SubTitle";
import PersonalData from "../../components/combined/PersonalData";
const ProfilePage = ({ navigation, onSignOut }) => {

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#212121" }}
    >
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Header settings={() => navigation.navigate("Settings")}>
          <View style={styles.pudzian}></View>
        </Header>
        <ViewContainer wider={true}>
          <View style={styles.name}>
            <Title>Cześć Michał</Title>
          </View>
          <PersonalData onPress={() => navigation.navigate("Edit")} />
        </ViewContainer>
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
    top: 90,
    borderRadius: 16,
  },
  name: {
    alignItems: "center",
    marginTop: 25,
    marginVertical: 20,
  },
});

export default ProfilePage;
