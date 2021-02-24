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
import ExpandableList from "../input/expandableList";
const SurveyHeader = ({ handleSurveyChange, survey }) => {
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
          <View style={{ marginBottom: 20 }}>
            <SubTitle small={true} color="white">
              Podaj nazwę ankiety:
            </SubTitle>
            <HorizontalLine />
            <TextField
              survey={true}
              onChangeText={(text) => {
                handleSurveyChange("name", text);
              }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <SubTitle small={true} color="white">
              Wybierz kategorię ankiety:
            </SubTitle>
            <HorizontalLine />
            <ExpandableList
              survey={true}
              value={survey.category}
              defaultValue="Sport"
              fields={{
                1: { name: "Sport" },
                2: { name: "Nauka" },
                3: { name: "Zdrowie" },
                4: { name: "Rozwój" },
                5: { name: "Technologia" },
              }}
              onPress={(value) => {
                handleSurveyChange("category", value);
              }}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <SubTitle small={true} color="white">
              Krótki opis ankiety:
            </SubTitle>
            <HorizontalLine />
            <TextField
              survey={true}
              onChangeText={(text) => {
                handleSurveyChange("short_description", text);
              }}
            />
          </View>
          <SubTitle small={true} color="white">
            Długi opis ankiety:
          </SubTitle>
          <HorizontalLine />
          <TextField
            survey={true}
            onChangeText={(text) => {
              handleSurveyChange("description", text);
            }}
            multiline={true}
            numberOfLines={3}
          />
        </View>
      </View>
    </View>
  );
};

export default SurveyHeader;
