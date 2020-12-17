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
import PopUp from "../../components/common/popUp";
import Dialog from "../../components/common/dialog";
import { NavigationEvents } from "react-navigation";
const SurveyPage = ({ route, navigation }) => {
  const keyId = route.params.itemId;
  const { account } = useSelector(selectAccountData);
  const surveys = account.surveys;
  const survey = surveys.find((el) => el.id == keyId);
  const onSubmit = () => {
    navigation.popToTop();
    route.params.snackbar("Wypełniono pomyślnie ankietę!");
  };
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);

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
              onSubmit={() => onSubmit()}
              action={() => console.log("ha")}
              survey={true}
              fields={{
                name: {
                  name: "Jakie jest twoje zainteresowanie?",
                  blurOnSubmit: false,
                },
                age: {
                  name: "Ile masz lat?",
                },
                sex: {
                  name: "Określ swoją płeć.",
                  type: "radio",
                  title: "Płeć",
                  fields: {
                    male: { name: "mężczyzna" },
                    female: { name: "kobieta" },
                    others: { name: "inne" },
                  },
                },
                have: {
                  name: "Powiedz co masz.",
                  type: "checkbox",
                  title: "Powiedz co masz.",
                  fields: {
                    2: { text: "Mam 2 złote" },
                    3: { text: "Mam 3 złote" },
                    5: { text: "Mam 5 złotych" },
                  },
                },
              }}
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
