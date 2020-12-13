import React from "react";
import { View } from "react-native";
import Title from "../../components/common/Typography/title";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ReturnButton from "../../components/common/returnButton";
import Form from "../../components/form/form";
import { cantBeEmpty } from "../../components/form/typingValidation";
import {useDispatch, useSelector} from "react-redux";
import {dispatchDetailsData, selectDetailsData} from "../../components/redux_components/detailsDataController";
import {selectPersonalData} from "../../components/redux_components/personalDataController";
import {selectPhysicalData} from "../../components/redux_components/physicalDataController";
import {putUserDataForUser} from "../../components/functional/profile/logic/userData";
import {getAccessToken} from "../../components/functional/api/storedTokens";

const DetailsPage = ({ navigation, onSignIn }) => {
  const dispatchDetails = useDispatch()

  const handleDispatcher = (hometown,job) =>{
    dispatchDetails(dispatchDetailsData({
      profession: job,
      hometown: hometown
    }))
  }

  const handleSubmit = () => {
    navigation.navigate("Physical");
  };

  return (
    <ScrollableContainer padding={true}>
      <ReturnButton />
      <View>
        <Title>Fizyczne statystyki</Title>

        <View>
          <Form
            buttonText="Zakończ"
            defaultValue="leśnictwo"
            onSubmit={handleSubmit}
            action={handleDispatcher}
            fields={{
              job: {
                type: "list",
                title: "Branża",
                defaultValue: "leśnictwo",
                fields: {
                  1: { name: "przemysł" },
                  2: { name: "budownictwo" },
                  3: { name: "rolnictwo" },
                  4: { name: "leśnictwo" },
                  5: { name: "transport" },
                  6: { name: "łączność" },
                  7: { name: "handel" },
                  8: { name: "IT" },
                  9: {
                    name:
                      "pozostałe gałęzie produkcji materialnej (wydawnictwa, filmy, usługi informacyjne i inne)",
                  },
                  10: { name: "gospodarka komunalna" },
                  11: {
                    name:
                      "gospodarka mieszkaniowa oraz niematerialne usługi komunalne",
                  },
                  12: { name: "nauka i rozwój techniki " },
                  13: { name: "oświata i wychowanie" },
                  14: { name: "kultura i sztuka" },
                  15: { name: "ochrona zdrowia i pomoc społeczna" },
                  16: { name: "kultura fizyczna, turystyka i wypoczynek" },
                  17: {
                    name:
                      "pozostałe branże usług niematerialnych (fryzjerskie, kosmetyczne, fotograficzne i inne)",
                  },
                  18: {
                    name: "administracja państwowa i wymiar sprawiedliwości",
                  },
                  19: { name: "finanse i ubezpieczenia" },
                  20: { name: "organizacje polityczne, związki zawodowe" },
                },
                validate: [cantBeEmpty],
              },
              hometown: {
                type: "radio",
                title: "Miejsce zamieszkania",
                fields: {
                  city: { name: "metropolia" },
                  town: { name: "miasto" },
                  village: { name: "wieś" },
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

export default DetailsPage;
