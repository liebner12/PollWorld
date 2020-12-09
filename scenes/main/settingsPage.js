import React from "react";
import { View } from "react-native";
import MainButton from "../../components/common/mainButton";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
const SettingsPage = ({ navigation, onSignOut }) => {
  return (
    <PrimaryContainer>
      <HeaderContainer returnButton={() => navigation.goBack()}>
        <Title size="big" color={true} shadow={true}>
          Ustawienia
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ViewContainer wider={true}>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <MainButton name="Wyloguj się" onPress={() => onSignOut()} />
          </View>
        </ViewContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

export default SettingsPage;
