import React, { useState } from "react";
import ItemsList from "../../components/combined/itemsList";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import { useSelector } from "react-redux";
import PopUp from "../../components/common/popUp";
import { ScaledSheet } from "react-native-size-matters";
import { View } from "react-native";
import Title from "../../components/common/Typography/title";
import { mock_surveys_company } from "../../components/redux_components/mock";
import { TouchableOpacity } from "react-native-gesture-handler";
import { selectCompanySurveys } from "../../components/redux_components/companyController";

const SurveysPage = ({ navigation }) => {
  const company = useSelector(selectCompanySurveys);
  console.log(company.company.surveys)
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const onToggleSnackBar = (text) => {
    setVisible(!visible);
    setMessage(text);
  };

  return (
    <PrimaryContainer>
      <View style={styles.title}>
        <Title>Lista ankiet</Title>
      </View>
      <ContentContainer>
        <ItemsList
          title="Ankiety:"
          data={company.company.surveys}
          type="surveys"
          snackbar={onToggleSnackBar}
          company={true}
        />
      </ContentContainer>
      <PopUp visible={visible} setVisible={setVisible} message={message} />
    </PrimaryContainer>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SurveysPage;
