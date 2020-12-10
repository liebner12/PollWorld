import React, { useRef } from "react";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import ItemsList from "../../components/combined/itemsList";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import { useSelector } from "react-redux";
import Survey from "../../components/combined/survey";
import { selectAccountData } from "../../components/redux_components/accountController";
import { Animated } from "react-native";
const SurveysPage = ({ navigation, onSignOut }) => {
  const { account } = useSelector(selectAccountData);
  const surveys = account.surveys;
  const offset = useRef(new Animated.Value(0)).current;
  const renderSurveys = () => {
    return surveys.map((survey, index) => (
      <Survey
        key={index}
        id={survey.id}
        name={survey.name}
        category={survey.category}
        description={survey.shortDescription}
        price={survey.price}
        rate={survey.rate}
        type="surveys"
        fit={true}
        even={index % 2 ? false : true}
      />
    ));
  };

  return (
    <PrimaryContainer>
      <HeaderContainer animatedValue={offset}>
        <Title size="big" color={true} shadow={true}>
          Ankiety
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ScrollableContainer offset={offset}>
          <ViewContainer wider={true}>
            <ItemsList title="Ankiety:" fit={true}>
              {renderSurveys()}
            </ItemsList>
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

export default SurveysPage;
