import React, { useEffect } from "react";
import { View } from "react-native";
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
import { verticalScale } from "react-native-size-matters";
import Survey from "../../components/combined/survey";
import Coupon from "../../components/combined/coupon";
import {
  dispatchAccountData,
  selectAccountData
} from "../../components/redux_components/accountController";
import {dispatchProfileData, selectProfileData} from "../../components/redux_components/profileController";
import {selectPersonalData} from "../../components/redux_components/personalDataController";
import {getAccessToken} from "../../components/functional/api/storedTokens";
import {putUserDataForUser} from "../../components/functional/profile/logic/userData";
import {profileDataJoiner} from "../../components/functional/profile/logic/profileDataHandlers";
import {selectPhysicalData} from "../../components/redux_components/physicalDataController";
import {selectDetailsData} from "../../components/redux_components/detailsDataController";


const HomePage = ({ navigation }) => {
  const {account} = useSelector(selectAccountData)
  const {personal} = useSelector(selectPersonalData)

  const surveys = account.surveys

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
          type="surveys"
        />
      ));
  };

  const renderCoupons = () => {
    return surveys
      .slice(0, 4)
      .map((survey, index) => (
        <Coupon
          key={index}
          id={survey.id}
          name={survey.name}
          category={survey.category}
          description={survey.shortDescription}
          price={survey.price}
          rate={survey.rate}
          type="coupons"
          horizontal={true}
        />
      ));
  };

  return (
    <PrimaryContainer>
      <HeaderContainer>
        <Title color={true} shadow={true} size="big">
          Twoje punkty:
        </Title>
        <Title color={true} size="big" shadow={true} noMargin={true}>
          {account.points}<FontAwesome5 name="money-bill" size={24} color="white" />
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <Title>Witaj {personal.name}</Title>
            <SubTitle>Mamy dla Ciebie super ankiety!</SubTitle>
            <View style={{ marginTop: verticalScale(20) }}>
              <View>
                <ItemsList
                  title="Nowe ankiety"
                  subTitle="Zobacz wszystkie:"
                  action={() => navigation.navigate("Surveys")}
                >
                  {renderSurveys()}
                </ItemsList>
              </View>
              <View style={{ marginTop: verticalScale(20) }}>
                <ItemsList
                  title="Kupony"
                  subTitle="Zobacz wszystkie:"
                  type="coupons"
                  action={() => navigation.navigate("Shopping")}
                >
                  {renderCoupons()}
                </ItemsList>
              </View>
            </View>
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

export default HomePage;
