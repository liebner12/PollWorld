import React, { useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import MainButton from "../../components/common/mainButton";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import SubTitle from "../../components/common/Typography/subTitle";
import { useSelector } from "react-redux";
import HorizontalLine from "../../components/common/horizontalLine";
import Paragraph from "../../components/common/Typography/paragraph";
import { selectAccountData } from "../../components/redux_components/accountController";
import { backgroundColors } from "../../styles/colors";
import { elevation, rounded } from "../../styles/base";
import { mvs } from "react-native-size-matters";
import {getQuestionsForSurvey} from "../../components/functional/surveys/logic/survey";
const ItemPage = ({ route, navigation }) => {
  const keyId = route.params.itemId;
  let { account } = useSelector(selectAccountData);
  let survey = account.surveys.find((el) => el.id == keyId);
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <PrimaryContainer>
      <HeaderContainer
        returnButton={() => navigation.goBack()}
        icon={true}
        animatedValue={offset}
      ></HeaderContainer>
      <ContentContainer>
        <ScrollableContainer offset={offset}>
          <View style={styles.name}>
            <Title color={true} size="big">
              {survey ? survey.name : null}
            </Title>
            <SubTitle>{survey ? survey.company : null}</SubTitle>
          </View>
          <ViewContainer wider={true}>
            <View style={styles.itemContainer}>
              <View style={styles.container}>
                <View style={styles.itemStats}>
                  <View style={styles.evenContainer}>
                    <SubTitle>Firma</SubTitle>
                  </View>
                  <View style={styles.evenContainer}>
                    <SubTitle>Czas</SubTitle>
                  </View>
                  <View style={styles.evenContainer}>
                    <SubTitle>Punkty</SubTitle>
                  </View>
                </View>
                <HorizontalLine />
                <View style={styles.itemStats}>
                  <View style={styles.evenContainer}>
                    <Title size="small" noMargin={true} center={true}>
                      {survey ? survey.company : null}
                    </Title>
                  </View>
                  <View style={styles.evenContainer}>
                    <Title size="small" noMargin={true} center={true}>
                      {survey ? survey.time : null}
                    </Title>
                  </View>
                  <View style={styles.evenContainer}>
                    <Title size="small" noMargin={true} center={true}>
                      {survey ? survey.price : null}
                    </Title>
                  </View>
                </View>
              </View>
              <View style={styles.container}>
                <SubTitle>Opis</SubTitle>
                <HorizontalLine />
                <Paragraph>{survey ? survey.description : null}</Paragraph>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <MainButton
                name="Zaczynajmy!"
                onPress={async () => {
                  navigation.navigate("Survey", {
                    itemId: keyId,
                    survey: survey,
                    questions: await getQuestionsForSurvey(keyId),
                    snackbar: route.params.snackbar,
                  })
                }}
              />
            </View>
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

const styles = StyleSheet.create({
  name: {
    alignItems: "center",
    marginTop: mvs(40),
    marginBottom: 10,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    backgroundColor: backgroundColors.secondary,
    borderRadius: rounded.md,
    padding: mvs(25),
    marginBottom: mvs(25),
    elevation: elevation.elevation,
  },
  itemStats: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  evenContainer: {
    width: "33%",
    alignItems: "center",
  },
});

export default ItemPage;
