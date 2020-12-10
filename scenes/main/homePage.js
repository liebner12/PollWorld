import React, { useEffect } from "react";
import { View} from "react-native";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import { FontAwesome5 } from "@expo/vector-icons";
import SubTitle from "../../components/common/Typography/subTitle";
import ItemsList from "../../components/combined/itemsList";
import { useDispatch, useSelector } from "react-redux";
import Survey from "../../components/combined/survey";
import Coupon from "../../components/combined/coupon";
import {
  dispatchAccountData,
  selectAccountData,
} from "../../components/redux_components/accountController";
import {
  dispatchProfileData,
  selectProfileData,
} from "../../components/redux_components/profileController";
import MarginContainer from "../../components/common/Containers/marginContainer";
import { StatusBar } from "expo-status-bar";
import { backgroundColors } from "../../styles/colors";
const HomePage = ({ navigation }) => {
  const { account } = useSelector(selectAccountData);
  const { profile } = useSelector(selectProfileData);
  const surveys = account.surveys;
  const coupons = account.coupons_to_buy;
  const dispatchAccount = useDispatch();
  useEffect(() => {
    dispatchAccount(dispatchAccountData());
  }, [dispatchAccount]);

  const dispatchProfile = useDispatch();
  useEffect(() => {
    dispatchProfile(dispatchProfileData());
  }, [dispatchProfile]);

  const renderSurveys = () => {
    return surveys
      .slice(0, 4)
      .map((survey, index) => (
        <Survey
          key={index}
          id={survey.id}
          name={survey.name}
          category={survey.category}
          description={survey.shortDescription}
          price={survey.price}
          rate={survey.rate}
        />
      ));
  };

  const renderCoupons = () => {
    return coupons
      .slice(0, 4)
      .map((coupon, index) => (
        <Coupon
          key={index}
          id={coupon.id}
          name={coupon.company}
          category={coupon.category}
          description={coupon.description}
          price={coupon.price}
        />
      ));
  };

  return (
    <PrimaryContainer>
      <StatusBar style="light" backgroundColor={backgroundColors.green} />
      <HeaderContainer>
        <Title color={true} shadow={true} size="big">
          Twoje punkty:
        </Title>
        <Title color={true} size="big" shadow={true} noMargin={true}>
          {account.points}{" "}
          <FontAwesome5 name="money-bill" size={24} color="white" />
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <Title>Witaj {profile.name}</Title>
            <SubTitle>Mamy dla Ciebie super ankiety!</SubTitle>
            <View>
              <MarginContainer>
                <ItemsList
                  title="Nowe ankiety"
                  subTitle="Zobacz wszystkie:"
                  action={() => navigation.navigate("Surveys")}
                >
                  {renderSurveys()}
                </ItemsList>
              </MarginContainer>
              <MarginContainer>
                <ItemsList
                  title="Kupony"
                  subTitle="Zobacz wszystkie:"
                  type="coupons"
                  action={() => navigation.navigate("Shopping")}
                >
                  {renderCoupons()}
                </ItemsList>
              </MarginContainer>
            </View>
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

export default HomePage;
