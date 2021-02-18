import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import ReturnButton from "../../common/returnButton";
import SubTitle from "../../common/Typography/subTitle";
import Title from "../../common/Typography/title";
import HorizontalLine from "../../common/horizontalLine";
import TextField from "../input/textField";
import { backgroundColors } from "../../../styles/colors";
import { elevation, rounded } from "../../../styles/base";
const SurveyHeader = ({ survey, setSurvey, questionObj }) => {
  const styles = ScaledSheet.create({
    nameContainer: {
      backgroundColor: backgroundColors.secondary,
      borderRadius: rounded.md,
      padding: 25,
      marginBottom: 25,
      elevation: elevation.elevation,
    },
    topContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
  return (
    <View>
      <View style={styles.topContainer}>
        <ReturnButton />
        <View style={{ marginBottom: 20 }}>
          <Title>Nowa ankieta</Title>
        </View>
      </View>
      <View style={styles.nameContainer}>
        <View>
          <SubTitle small={true} color="white">
            Podaj nazwę ankiety:
          </SubTitle>
          <HorizontalLine />
          <TextField
            survey={true}
            onChangeText={(text) => {
              setSurvey({ ...questionObj }, (survey.surveyTitle = text));
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SurveyHeader;
