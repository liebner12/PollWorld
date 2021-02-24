import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";
import TextField from "../input/textField";
import { colors } from "../../../styles/colors";
import ExpandableList from "../input/expandableList";
import HorizontalLine from "../../common/horizontalLine";

const QuestionHeader = ({ item, handleSurveyChange, newArray, index }) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },

    deleteIcon: {
      borderRadius: 20,
      width: 24,
      marginBottom: 10,
      marginLeft: 10,
    },
  });

  const resetValues = (value) => {
    newArray[index] = { ...item, type: value, values: [""] };
    handleSurveyChange("questions", newArray);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <TextField
            value={item.name}
            survey={true}
            onChangeText={(text) => {
              newArray[index] = { ...item, name: text };
              handleSurveyChange("questions", newArray);
            }}
            placeholder="Pytanie"
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            handleSurveyChange(
              "questions",
              newArray.filter((value) => value !== item)
            );
          }}
          style={styles.deleteIcon}
        >
          <MaterialIcons
            name="delete"
            size={24}
            color={colors.primary}
          ></MaterialIcons>
        </TouchableOpacity>
      </View>
      <HorizontalLine />
      <View style={{ marginBottom: 20 }}>
        <ExpandableList
          survey={true}
          defaultValue="Krótka odpowiedź"
          fields={{
            1: { name: "Krótka odpowiedź" },
            2: { name: "Jednokrotny wybór" },
            3: { name: "Wielokrotny wybór" },
            4: { name: "Lista rozwijana" },
          }}
          value={item.type}
          onPress={(value) => {
            value == "Krótka odpowiedź"
              ? resetValues(value)
              : ((newArray[index] = { ...item, type: value }),
                handleSurveyChange("questions", newArray));
          }}
        />
      </View>
    </View>
  );
};

export default QuestionHeader;
