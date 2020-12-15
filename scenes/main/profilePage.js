import React, { useRef, useState } from "react";
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
import MarginContainer from "../../components/common/Containers/marginContainer";
import PopUp from "../../components/common/popUp";
import icon from "../../assets/user.jpg";
import {selectPersonalData} from "../../components/redux_components/personalDataController";
import {selectPhysicalData} from "../../components/redux_components/physicalDataController";
import {selectDetailsData} from "../../components/redux_components/detailsDataController";
import {selectAccountData} from "../../components/redux_components/accountController";
import {numberToPlaceOfResidence} from "../../components/functional/profile/logic/profileDataHandlers";

const ProfilePage = ({ navigation, onSignOut }) => {
  let { personal } = useSelector(selectPersonalData);
  let { physical } = useSelector(selectPhysicalData);
  let { details } = useSelector(selectDetailsData);
  let { account } = useSelector(selectAccountData)

  const offset = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const onToggleSnackBar = (text) => {
    setVisible(!visible);
    setMessage(text);
  };

  return (
    <PrimaryContainer>
      <HeaderContainer
        settings={() => navigation.navigate("Settings")}
        icon={icon}
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
              email={account.email}
              password="********"
            />
            <MarginContainer>
              <PersonalData
                onPress={() =>
                  navigation.navigate("Edit", { snackbar: onToggleSnackBar })
                }
                age={personal.age}
                sex={personal.sex}
                living={numberToPlaceOfResidence(details.place_of_residence)}
                job={details.profession}
                height={physical.growth}
                weight={physical.weight}
                fitness={physical.level_of_fitness}
              />
            </MarginContainer>
          </ViewContainer>
        </ScrollableContainer>
        <PopUp visible={visible} setVisible={setVisible} message={message} />
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
