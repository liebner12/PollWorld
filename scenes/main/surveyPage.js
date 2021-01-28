import React, { useState } from "react";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import { useSelector } from "react-redux";
import Form from "../../components/form/form";
import { selectAccountData } from "../../components/redux_components/accountController";
import Dialog from "../../components/common/dialog";
import {
    prepareAnswersForServer,
    getConvertedQuestions,
    questionsToFields
} from "../../components/functional/surveys/logic/surveyConverter";

const SurveyPage = ({ route, navigation }) => {

  const keyId = route.params.itemId;
  const { account } = useSelector(selectAccountData);
  const surveys = account.surveys;
  const survey = surveys.find((el) => el.id == keyId);

  const questions = getConvertedQuestions(route.params.questions)
  const questionsFields = questionsToFields(questions)
  let answersForSurvey = {}



  const onSubmit = async () => {
      navigation.popToTop();
      route.params.snackbar("Wypełniono pomyślnie ankietę!");
  };

  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);

  const setAnswers = (...answers) =>{
      answersForSurvey=prepareAnswersForServer(answers, questionsFields)
  }

  return (
    <PrimaryContainer>
      <HeaderContainer returnButton={() => setVisible(true)}>
        <Title size="big" color={true} shadow={true}>
          {survey.name}
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <Form
              buttonText="Zakończ"
              onSubmit={onSubmit}
              action={setAnswers}
              survey={true}
              fields={questionsFields}
            />
          </ViewContainer>
        </ScrollableContainer>

        <Dialog
          text="Czy chcesz przerwać wypełnianie ankiety?"
          visible={visible}
          hideDialog={hideDialog}
          action={() => (hideDialog(), navigation.goBack())}
        />
      </ContentContainer>
    </PrimaryContainer>
  );
};

export default SurveyPage;
