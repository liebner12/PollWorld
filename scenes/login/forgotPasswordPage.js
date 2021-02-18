//IN PROGRESS
import React from "react";
import { View } from "react-native";
import Title from "../../components/common/Typography/title";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ReturnButton from "../../components/common/returnButton";
import Form from "../../components/form/form";
import { cantBeEmpty } from "../../components/form/typingValidation";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchDetailsData,
  selectDetailsData,
} from "../../components/redux_components/detailsDataController";
import { selectPersonalData } from "../../components/redux_components/personalDataController";
import { selectPhysicalData } from "../../components/redux_components/physicalDataController";
import { putUserDataForUser } from "../../components/functional/profile/logic/userData";
import { getAccessToken } from "../../components/functional/api/storedTokens";
import { placeOfResidenceToNumber } from "../../components/functional/profile/logic/profileDataHandlers";

const DetailsPage = ({ navigation, onSignIn }) => {
  const dispatchDetails = useDispatch();

  const handleDispatcher = (job, hometown) => {
    dispatchDetails(
      dispatchDetailsData({
        profession: job,
        place_of_residence: placeOfResidenceToNumber(hometown),
      })
    );
  };

  const handleSubmit = () => {
    navigation.navigate("Physical");
  };

  return (
    <ScrollableContainer padding={true}>
      <ReturnButton />

      <Title>Fizyczne statystyki</Title>
    </ScrollableContainer>
  );
};

export default DetailsPage;
