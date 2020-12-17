import React, { createRef } from "react";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import Title from "../../components/common/Typography/title";
import ViewContainer from "../../components/common/Containers/viewContainer";
import Form from "../../components/form/form";
import {
  cantBeEmpty,
  onlyNumbers,
} from "../../components/form/typingValidation";
import { useDispatch, useSelector } from "react-redux";
import {
  boolToSex,
  numberToPlaceOfResidence,
  placeOfResidenceToNumber,
  profileDataSeparator,
  sexToBool,
} from "../../components/functional/profile/logic/profileDataHandlers";
import { getAccessToken } from "../../components/functional/api/storedTokens";
import {
  getUserDataForUser,
  putUserDataForUser,
} from "../../components/functional/profile/logic/userData";
import {
  dispatchPersonalData,
  selectPersonalData,
} from "../../components/redux_components/personalDataController";
import {
  dispatchPhysicalData,
  selectPhysicalData,
} from "../../components/redux_components/physicalDataController";
import {
  dispatchDetailsData,
  selectDetailsData,
} from "../../components/redux_components/detailsDataController";

const EdditPage = ({ route, navigation }) => {
  let { personal } = useSelector(selectPersonalData);
  let { physical } = useSelector(selectPhysicalData);
  let { details } = useSelector(selectDetailsData);

  const dispatchPersonal = useDispatch();
  const dispatchDetails = useDispatch();
  const dispatchPhysical = useDispatch();

  const changedValues = {};

  const handleSubmit = async () => {
    const accessToken = await getAccessToken();
    const status = await putUserDataForUser(accessToken, changedValues)
      .response_status;
    if (status == 200) {
      route.params.snackbar("Zedtyowano pomyślnie dane!");

      const profileData = await getUserDataForUser(accessToken);

      dispatchPersonal(
        dispatchPersonalData(profileDataSeparator(profileData).personal)
      );
      dispatchPhysical(
        dispatchPhysicalData(profileDataSeparator(profileData).physical)
      );
      dispatchDetails(
        dispatchDetailsData(profileDataSeparator(profileData).details)
      );
    } else {
      route.params.snackbar("Błąd!");
    }
    navigation.goBack();
  };

  const setValues = (
    name,
    age,
    sex,
    job,
    hometown,
    height,
    weight,
    activity
  ) => {
    changedValues.name = name;
    changedValues.age = parseInt(age);
    changedValues.sex = sexToBool(sex);
    changedValues.profession = job;
    changedValues.place_of_residence = placeOfResidenceToNumber(hometown);
    changedValues.growth = parseInt(height);
    changedValues.weight = parseInt(weight);
    changedValues.level_of_fitness = parseInt(activity);
  };
  const secondTextField = createRef();
  const thirdTextField = createRef();

  return (
    <PrimaryContainer>
      <HeaderContainer returnButton={() => navigation.goBack()}>
        <Title color={true} shadow={true} size="big">
          Edytuj dane
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer>
            <Form
              buttonText="Zakończ"
              onSubmit={handleSubmit}
              action={setValues}
              edit={{
                name: personal.name,
                age: personal.age.toString(),
                sex: boolToSex(personal.sex),
                job: details.profession,
                hometown: numberToPlaceOfResidence(details.place_of_residence),
                height: physical.growth.toString(),
                weight: physical.weight.toString(),
                activity: physical.level_of_fitness.toString(),
              }}
              fields={{
                name: {
                  name: "Imię",
                  validate: [cantBeEmpty],
                  blurOnSubmit: false,
                  onSubmitEditing: () => secondTextField.current.focus(),
                },
                age: {
                  name: "Wiek",
                  keyboardType: "numeric",
                  validate: [onlyNumbers, cantBeEmpty],
                  ref: secondTextField,
                },
                sex: {
                  type: "radio",
                  title: "Płeć",
                  fields: {
                    male: { name: "mężczyzna" },
                    female: { name: "kobieta" },
                    others: { name: "inne" },
                  },
                  validate: [cantBeEmpty],
                },
                job: {
                  type: "list",
                  title: "Branża",
                  defaultValue: "przemysł",
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
                height: {
                  name: "Wzrost",
                  keyboardType: "numeric",
                  validate: [onlyNumbers, cantBeEmpty],
                  blurOnSubmit: false,
                  onSubmitEditing: () => thirdTextField.current.focus(),
                },
                weight: {
                  name: "Waga",
                  keyboardType: "numeric",
                  validate: [onlyNumbers, cantBeEmpty],
                  ref: thirdTextField,
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
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

export default EdditPage;
