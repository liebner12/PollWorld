import React, { useState } from "react";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import { View, StyleSheet } from "react-native";
import { backgroundColors } from "../../styles/colors";
import { elevation, rounded } from "../../styles/base";
import TextField from "../../components/combined/input/textField";
import RadioButtonGroup from "../../components/combined/input/radioButton";
import CheckBoxGroup from "../../components/combined/input/checkbox";
import QuestionFooter from "../../components/combined/surveyCreator/questionFooter";
import QuestionListCreator from "../../components/combined/surveyCreator/questionListCreator";
import QuestionHeader from "../../components/combined/surveyCreator/questionHeader";
import SurveyHeader from "../../components/combined/surveyCreator/surveyHeader";
import SurveyFooter from "../../components/combined/surveyCreator/surveyFooter";

const HomePage = ({ navigation }) => {
  const handleAddObj = (key, value) => {
    const newState = { ...questionObj, [key]: value };
    console.log(newState);
    setQuestionObj(newState);
  };
  const [survey, setSurvey] = useState({ ...questionObj, surveyTitle: "" });
  const [questionObj, setQuestionObj] = useState({
    0: {
      title: "",
      type: "Krótka odpowiedź",
      required: false,
      values: { 0: "" },
    },
  });
  const [objIterator, setObjIterator] = useState(1);
  const [radioIterator, setRadioIterator] = useState(1);

  return (
    <PrimaryContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <SurveyHeader
              survey={survey}
              setSurvey={setSurvey}
              questionObj={questionObj}
            />
            {Object.keys(questionObj).map((key) => {
              const field = questionObj[key];
              return (
                <View style={styles.container} key={key}>
                  <QuestionHeader
                    handleAddObj={handleAddObj}
                    setQuestionObj={setQuestionObj}
                    questionObj={questionObj}
                    field={field}
                    objKey={key}
                  />
                  {field.type == "Krótka odpowiedź" ? (
                    <View>
                      <TextField
                        survey={true}
                        editable={false}
                        placeholder="..."
                      />
                      <QuestionFooter
                        setRadioIterator={setRadioIterator}
                        handleAddObj={handleAddObj}
                        field={field}
                        radioIterator={radioIterator}
                        objKey={key}
                        add={false}
                      />
                    </View>
                  ) : field.type == "Wielokrotny wybór" ? (
                    <View>
                      <CheckBoxGroup
                        fields={field.values}
                        onPress={console.log()}
                        create={questionObj}
                        value={field}
                        objKey={key}
                        onChangeObj={handleAddObj}
                        setQuestionList={setQuestionObj}
                      />
                      <QuestionFooter
                        setRadioIterator={setRadioIterator}
                        handleAddObj={handleAddObj}
                        field={field}
                        radioIterator={radioIterator}
                        objKey={key}
                      />
                    </View>
                  ) : field.type == "Lista rozwijana" ? (
                    <View>
                      <QuestionListCreator
                        fields={field.values}
                        onPress={console.log()}
                        create={questionObj}
                        value={field}
                        objKey={key}
                        onChangeObj={handleAddObj}
                        setQuestionList={setQuestionObj}
                      />
                      <QuestionFooter
                        setRadioIterator={setRadioIterator}
                        handleAddObj={handleAddObj}
                        field={field}
                        radioIterator={radioIterator}
                        objKey={key}
                      />
                    </View>
                  ) : (
                    <View>
                      <RadioButtonGroup
                        value={field}
                        objKey={key}
                        survey={true}
                        fields={field.values}
                        setValue={() => console.log()}
                        create={questionObj}
                        onChangeValueRadio={handleAddObj}
                        setQuestionList={setQuestionObj}
                      />
                      <QuestionFooter
                        setRadioIterator={setRadioIterator}
                        handleAddObj={handleAddObj}
                        field={field}
                        radioIterator={radioIterator}
                        objKey={key}
                      />
                    </View>
                  )}
                </View>
              );
            })}
            <SurveyFooter
              objIterator={objIterator}
              setObjIterator={setObjIterator}
              handleAddObj={handleAddObj}
            />
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColors.secondary,
    borderRadius: rounded.md,
    padding: 25,
    marginBottom: 25,
    elevation: elevation.elevation,
  },
});
export default HomePage;
