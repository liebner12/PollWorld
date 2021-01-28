import React, { useRef, useState } from "react";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import ItemsList from "../../components/combined/itemsList";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import { useSelector } from "react-redux";
import { selectAccountData } from "../../components/redux_components/accountController";
import { Animated } from "react-native";
import PopUp from "../../components/common/popUp";
const SurveysPage = () => {
  const { account } = useSelector(selectAccountData);
  const surveys = account.surveys;
  const offset = useRef(new Animated.Value(0)).current;

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const onToggleSnackBar = (text) => {
    setVisible(!visible);
    setMessage(text);
  };

  return (
    <PrimaryContainer>
      <HeaderContainer animatedValue={offset}>
        <Title size="big" color={true} shadow={true}>
          Ankiety
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ItemsList
          title="Ankiety:"
          data={surveys}
          type="surveys"
          snackbar={onToggleSnackBar}
        />
      </ContentContainer>
      <PopUp visible={visible} setVisible={setVisible} message={message} />
    </PrimaryContainer>
  );
};

export default SurveysPage;
