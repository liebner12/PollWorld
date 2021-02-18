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
  create,
  onChangeObj,
  objKey,
  value,
  setQuestionList,
}) => {
  const fieldKeys = Object.keys(fields);
  const styles = ScaledSheet.create({
    checkboxButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    button: {
      marginBottom: create ? "5@mvs" : 0,
    },
    closeButton: {
      marginLeft: 5,
      marginBottom: "5@mvs",
    },
  });
  return (
    <View>
      {fieldKeys.map((key) => {
        const field = fields[key];
        return (
          <View key={key} style={styles.checkboxButton}>
            <View style={styles.button}></View>
            {create ? (
              <View
                style={{
                  flex: 1,
                }}
              >
                <TextField
                  survey={true}
                  onChangeText={(text) =>
                    onChangeObj(objKey, {
                      ...value,
                      values: {
                        ...value.values,
                        [Object.keys(value.values).find(
                          (val) => val == key
                        )]: text,
                      },
                    })
                  }
                />
              </View>
            ) : (
              <Paragraph>{field.text}</Paragraph>
            )}
            {create ? (
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  let del = Object.keys(value.values).filter(
                    (val) => val == key
                  );
                  delete value.values[del];
                  setQuestionList({ ...create });
                }}
              >
                <MaterialIcons name="close" size={24} color={colors.white} />
              </TouchableOpacity>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default QuestionListCreator;
