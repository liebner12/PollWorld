import React from "react";
import { View } from "react-native";
import Paragraph from "../../common/Typography/paragraph";
import TextField from "../input/textField";
import { ScaledSheet } from "react-native-size-matters";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
const QuestionListCreator = ({
  fields,
  handleSurveyChange,
  newArray,
  item,
  index,
}) => {
  const fieldKeys = Object.keys(fields);
  const styles = ScaledSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    button: {
      marginBottom: "5@mvs",
    },
    closeButton: {
      marginLeft: 5,
      marginBottom: "5@mvs",
    },
  });
  return (
    <View>
      {fieldKeys.map((key) => {
        return (
          <View key={key} style={styles.container}>
            <View
              style={{
                flex: 1,
              }}
            >
              <TextField
                survey={true}
                value={item.values[key]}
                onChangeText={(text) => {
                  let values = [...item.values];
                  values[key] = text;
                  newArray[index] = { ...item, values: values };
                  handleSurveyChange("questions", newArray);
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                let values = [...item.values];
                values.splice(key, 1);
                newArray[index] = { ...item, values: values };
                handleSurveyChange("questions", newArray);
              }}
            >
              <MaterialIcons name="close" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default QuestionListCreator;
