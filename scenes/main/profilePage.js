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
import {selectPersonalData} from "../../components/redux_components/personalDataController";
import {selectPhysicalData} from "../../components/redux_components/physicalDataController";
import {selectDetailsData} from "../../components/redux_components/detailsDataController";

const ProfilePage = ({ navigation, onSignOut }) => {
  let { personal } = useSelector(selectPersonalData);
  let { physical } = useSelector(selectPhysicalData);
  let { details } = useSelector(selectDetailsData);

  const offset = useRef(new Animated.Value(0)).current;
  const job =
   details.place_of_residence == 1
      ? "metropolia"
      : details.place_of_residence == 2
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
              Cześć {personal.name}
            </Title>
          </View>
          <ViewContainer wider={true}>
            <ImportantData
              onPress={() => navigation.navigate("Edit")}
              email={personal.email}
              password="********"
            />
            <MarginContainer>
              <PersonalData
                onPress={() => navigation.navigate("Edit")}
                age={personal.age}
                sex="mężczyzna"
                living={job}
                job={details.profession}
                height={physical.growth}
                weight={physical.weight}
                fitness={physical.level_of_fitness}
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
