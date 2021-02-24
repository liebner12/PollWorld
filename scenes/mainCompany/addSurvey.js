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

const AddPage = ({ navigation }) => {
  const handleSurveyChange = (key, value) => {
    const newState = { ...survey, [key]: value };
    console.log(newState);
    setSurvey(newState);
  };

  const [survey, setSurvey] = useState({
    name: "",
    description: "",
    short_description: "",
    category: "Sport",
    questions: [
      {
        name: "",
        type: "Krótka odpowiedź",
        required: false,
        values: [""],
      },
    ],
  });
  const renderSwitch = (item, newArray, index) => {
    switch (item.type) {
      case "Wielokrotny wybór":
        return (
          <View>
            <CheckBoxGroup
              fields={item.values}
              create={true}
              item={item}
              newArray={newArray}
              index={index}
              handleSurveyChange={handleSurveyChange}
            />
            <QuestionFooter
              handleSurveyChange={handleSurveyChange}
              newArray={newArray}
              index={index}
              item={item}
            />
          </View>
        );
      case "Lista rozwijana":
        return (
          <View>
            <QuestionListCreator
              fields={item.values}
              item={item}
              newArray={newArray}
              index={index}
              handleSurveyChange={handleSurveyChange}
            />
            <QuestionFooter
              handleSurveyChange={handleSurveyChange}
              newArray={newArray}
              index={index}
              item={item}
            />
          </View>
        );
      case "Jednokrotny wybór":
        return (
          <View>
            <RadioButtonGroup
              survey={true}
              fields={item.values}
              setValue={() => console.log()}
              item={item}
              create={true}
              newArray={newArray}
              index={index}
              handleSurveyChange={handleSurveyChange}
            />
            <QuestionFooter
              handleSurveyChange={handleSurveyChange}
              newArray={newArray}
              index={index}
              item={item}
            />
          </View>
        );
      default:
        return (
          <View>
            <TextField survey={true} editable={false} placeholder="..." />
            <QuestionFooter
              handleSurveyChange={handleSurveyChange}
              newArray={newArray}
              index={index}
              item={item}
              add={false}
            />
          </View>
        );
    }
  };
  return (
    <PrimaryContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <SurveyHeader handleSurveyChange={handleSurveyChange} survey={survey} />
            {survey.questions.map((item) => {
              let newArray = [...survey.questions];
              let index = [...survey.questions].indexOf(item);
              return (
                <View style={styles.container}>
                  <QuestionHeader
                    handleSurveyChange={handleSurveyChange}
                    item={item}
                    newArray={newArray}
                    index={index}
                  />
                  {renderSwitch(item, newArray, index)}
                </View>
              );
            })}
            <SurveyFooter
              survey={survey}
              handleSurveyChange={handleSurveyChange}
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
export default AddPage;
