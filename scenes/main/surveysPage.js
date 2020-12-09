import React, { useEffect } from "react";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import ItemsList from "../../components/combined/itemsList";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSurveys,
  surveysSelector,
} from "../../components/functional/surveys/logic/surveysController";
import { getAssetByID } from "react-native-web/dist/modules/AssetRegistry";
import Survey from "../../components/combined/survey";

const SurveysPage = ({ navigation, onSignOut }) => {
  const dispatch = useDispatch();
  const { surveys } = useSelector(surveysSelector);
  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

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
      <HeaderContainer>
        <Title size="big" color={true} shadow={true}>
          Ankiety
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ScrollableContainer>
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
