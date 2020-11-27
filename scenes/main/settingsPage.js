import React from "react";
import { View, ScrollView } from "react-native";
import MainButton from "../../components/common/MainButton";
import Title from "../../components/common/Title";
import Header from "../../components/common/Header";
import ViewContainer from "../../components/common/ViewContainer";

const SettingsPage = ({ navigation, onSignOut }) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#212121" }}
    >
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Header returnButton={() => navigation.goBack()}>
          <Title color={true} shadow={true}>
            Ustawienia
          </Title>
        </Header>
        <ViewContainer wider={true}>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <MainButton name="Wyloguj się" onPress={() => onSignOut()} />
          </View>
        </ViewContainer>
      </View>
    </ScrollView>
  );
};

export default SettingsPage;
