import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import MainButton from "../../components/common/mainButton";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import SubTitle from "../../components/common/Typography/subTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSurveys,
  surveysSelector,
} from "../../components/functional/surveys/logic/surveysController";
import HorizontalLine from "../../components/common/horizontalLine";
import Paragraph from "../../components/common/Typography/paragraph";
const ItemPage = ({ route, navigation }) => {
  const keyId = route.params.itemId;
  const dispatch = useDispatch();
  const { surveys } = useSelector(surveysSelector);
  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);
  const survey = surveys.find((el) => el.id == keyId);

  return (
    <PrimaryContainer>
      <HeaderContainer
        returnButton={() => navigation.goBack()}
        icon={true}
      ></HeaderContainer>
      <ContentContainer>
        <ScrollableContainer>
          <View style={styles.name}>
            <Title color={true} size="big">
              {survey.name}
            </Title>
            <SubTitle>{survey.company}</SubTitle>
          </View>
          <ViewContainer wider={true}>
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
                    {survey.company}
                  </Title>
                </View>
                <View style={styles.evenContainer}>
                  <Title size="small" noMargin={true} center={true}>
                    {survey.time}
                  </Title>
                </View>
                <View style={styles.evenContainer}>
                  <Title size="small" noMargin={true} center={true}>
                    {survey.price}
                  </Title>
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <SubTitle>Opis</SubTitle>
              <HorizontalLine />
              <Paragraph>{survey.description}</Paragraph>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <MainButton
                name="Zaczynajmy!"
                onPress={() =>
                  navigation.navigate("Survey", {
                    itemId: survey.id,
                    survey: survey,
                  })
                }
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
    marginTop: 30,
    marginBottom: 10,
  },
  container: {
    backgroundColor: "#444444",
    borderRadius: 14,
    padding: 25,
    marginBottom: 25,
    elevation: 6,
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
