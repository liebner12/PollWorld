import React, {useEffect} from "react";
import { ScrollView } from "react-native";
import Title from "../../components/common/Title";
import Header from "../../components/common/Header";
import ItemsList from "../../components/combined/ItemsList";
import ViewContainer from "../../components/common/ViewContainer";
import {useDispatch, useSelector} from "react-redux";
import {fetchSurveys, surveysSelector} from "../../components/functional/surveys/logic/surveysController";
import {getAssetByID} from "react-native-web/dist/modules/AssetRegistry";

const SurveysPage = ({ navigation, onSignOut }) => {
    const dispatch = useDispatch()
    const {surveys} = useSelector(surveysSelector)
    useEffect(() => {
        dispatch(fetchSurveys())
    },[dispatch])

    //TODO  Trzeba zmienić to jak przechowywane są te dane z fields, ponieważ teraz troche patologicznie to działa
    const renderSurveys = () => {
        return surveys.map((survey, index) =>
            <ItemsList
                title="Ankiety"
                type="surveys"
                fit={true}
                key={survey.id}
                fields={{
                    randomString: {
                        key: index,
                        name: survey.name,
                        category: survey.category,
                        description: survey.description,
                        price: survey.price,
                        rate: survey.rate
                    }
                }}
            />
        )
    }

    return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#212121" }}
    >
      <Header>
        <Title color={true} shadow={true}>
          Ankiety
        </Title>
      </Header>
      <ViewContainer wider={true}>
          {renderSurveys()}
      </ViewContainer>
    </ScrollView>
  );
};

export default SurveysPage;
