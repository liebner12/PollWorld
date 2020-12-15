import React, { createRef } from "react";
import { View } from "react-native";
import Title from "../../components/common/Typography/title";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ReturnButton from "../../components/common/returnButton";
import Form from "../../components/form/form";
import {
  cantBeEmpty,
  onlyNumbers,
} from "../../components/form/typingValidation";
import {useDispatch, useSelector} from "react-redux";
import {dispatchPhysicalData, selectPhysicalData} from "../../components/redux_components/physicalDataController";
import {getAccessToken} from "../../components/functional/api/storedTokens";
import {putUserDataForUser} from "../../components/functional/profile/logic/userData";
import {profileDataJoiner} from "../../components/functional/profile/logic/profileDataHandlers";
import {selectPersonalData} from "../../components/redux_components/personalDataController";
import {selectDetailsData} from "../../components/redux_components/detailsDataController";
const PhysicalPage = ({ navigation, onSignIn }) => {
  const secondTextField = createRef();
  const dispatchPhysical = useDispatch()

    let { personal } = useSelector(selectPersonalData);
    let { details } = useSelector(selectDetailsData);
    let data = {}

    const handleDispatcher = (height, weight,activity) =>{
        data.growth=height
        data.weight=weight
        data.level_of_fitness=activity
        dispatchPhysical(dispatchPhysicalData(
          {
              growth: height,
              weight: weight,
              level_of_fitness: activity,
      }))
  }
    const handleSubmit = async () => {
        const accessToken = await getAccessToken()
        console.log(accessToken)
        let response = await putUserDataForUser(accessToken, await profileDataJoiner(personal, data, details))
        await onSignIn();
  };

  return (
    <ScrollableContainer padding={true}>
      <ReturnButton />
      <View>
        <Title>Fizyczne statystyki</Title>
        <View>
          <Form
            buttonText="Zakończ"
            onSubmit={handleSubmit}
            action={handleDispatcher}
            fields={{
              height: {
                name: "Wzrost",
                keyboardType: "numeric",
                validate: [onlyNumbers, cantBeEmpty],
                blurOnSubmit: false,
                onSubmitEditing: () => secondTextField.current.focus(),
              },
              weight: {
                name: "Waga",
                keyboardType: "numeric",
                validate: [onlyNumbers, cantBeEmpty],
                ref: secondTextField,
              },
              activity: {
                type: "radio",
                title: "Poziom aktywności fizycznej",
                fields: {
                  1: { name: "1" },
                  2: { name: "2" },
                  3: { name: "3" },
                  4: { name: "4" },
                  5: { name: "5" },
                },
                validate: [cantBeEmpty],
              },
            }}
          />
        </View>
      </View>
    </ScrollableContainer>
  );
};

export default PhysicalPage;
