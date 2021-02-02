import React, { useState } from "react";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import {useDispatch, useSelector} from "react-redux";
import Form from "../../components/form/form";
import {
    dispatchAccountData, dispatchEmail,
    dispatchSurveysWithValue, dispatchUserPoints,
    selectAccountData
} from "../../components/redux_components/accountController";
import Dialog from "../../components/common/dialog";
import {
    prepareAnswersForServer,
    getConvertedQuestions,
    questionsToFields, convertToAppSurvey
} from "../../components/functional/surveys/logic/surveyConverter";
import {getSurveysForUser, sendAnswersForSurvey} from "../../components/functional/surveys/logic/survey";
import {getAccessToken, getUser} from "../../components/functional/api/storedTokens";
import {profileDataSeparator} from "../../components/functional/profile/logic/profileDataHandlers";
import {getUserDataForUser} from "../../components/functional/profile/logic/userData";


const SurveyPage = ({ route, navigation }) => {
    const dispatchSurveys = useDispatch();

  const keyId = route.params.itemId;
  const { account } = useSelector(selectAccountData);
  const surveys = account.surveys;
  let message;
  const survey = surveys.filter((el) => el.id == keyId);
  const dispatchPoints = useDispatch();
  const questions = getConvertedQuestions(route.params.questions)
  const questionsFields = questionsToFields(questions)
  let answersForSurvey = {}


    const onSubmit = async () => {
        let response = await sendAnswersForSurvey(keyId,answersForSurvey)
        if(response.response_status===200){
            navigation.popToTop();
            route.params.snackbar("Dziękujemy za udział w ankiecie!")
            let newPoints = account.points
            newPoints += survey[0].price
            console.log("PUNKCISZE",newPoints)
            let newSurveys= surveys.filter((el) => el.id !== keyId)
            dispatchPoints(dispatchUserPoints(newPoints))
            dispatchSurveys(dispatchSurveysWithValue(newSurveys))
        }
        else{
            navigation.popToTop();
            route.params.snackbar("Błąd podczas wypełniania ankiety!")
        }
        const token = await getAccessToken();
        const surveyList = await getSurveysForUser(token);
        const profileData = await getUserDataForUser(token);
        dispatchPoints(dispatchUserPoints(profileDataSeparator(profileData).account.points))
        dispatchSurveys(dispatchSurveysWithValue(surveyList.map(convertToAppSurvey)));
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
            {survey[0].name}
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
