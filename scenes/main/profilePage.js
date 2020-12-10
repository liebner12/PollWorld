import React, { useRef } from "react";
import { View, Animated } from "react-native";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import PersonalData from "../../components/combined/personalData";
import ImportantData from "../../components/combined/importantData";
import { ScaledSheet } from "react-native-size-matters";
import { useSelector } from "react-redux";
import { selectProfileData } from "../../components/redux_components/profileController";
import MarginContainer from "../../components/common/Containers/marginContainer";

const ProfilePage = ({ navigation, onSignOut }) => {
  const { profile } = useSelector(selectProfileData);
  const offset = useRef(new Animated.Value(0)).current;
  const job =
    profile.place_of_residence == 1
      ? "metropolia"
      : profile.place_of_residence == 2
      ? "miasto"
      : "wieś";
  return (
    <PrimaryContainer>
      <HeaderContainer
        settings={() => navigation.navigate("Settings")}
        icon={true}
        animatedValue={offset}
      ></HeaderContainer>
      <ContentContainer>
        <ScrollableContainer offset={offset}>
          <View style={styles.name}>
            <Title size="big" color={true}>
              Cześć {profile.name}
            </Title>
          </View>
          <ViewContainer wider={true}>
            <ImportantData
              onPress={() => navigation.navigate("Edit")}
              email={profile.email}
              password="********"
            />
            <MarginContainer>
              <PersonalData
                onPress={() => navigation.navigate("Edit")}
                age={profile.age}
                sex="mężczyzna"
                living={job}
                job={profile.profession}
                height={profile.growth}
                weight={profile.weight}
                fitness={profile.level_of_fitness}
              />
            </MarginContainer>
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
