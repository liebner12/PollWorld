import React from "react";
import { View } from "react-native";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import PersonalData from "../../components/combined/personalData";
import { ScaledSheet } from "react-native-size-matters";
const ProfilePage = ({ navigation, onSignOut }) => {
  return (
    <PrimaryContainer>
      <HeaderContainer
        settings={() => navigation.navigate("Settings")}
        icon={true}
      > 
      </HeaderContainer>
      <ContentContainer>
        <ScrollableContainer>
          <View style={styles.name}>
            <Title size="big" color={true}>
              Cześć Michał
            </Title>
          </View>
          <ViewContainer wider={true}>
            <PersonalData onPress={() => navigation.navigate("Edit")} age={16} sex="mężczyzna" living="metropolia" job="IT" height={169} weight={40} />
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

const styles = ScaledSheet.create({
  name: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
});

export default ProfilePage;
