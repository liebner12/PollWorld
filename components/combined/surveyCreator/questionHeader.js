import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { MaterialIcons } from "@expo/vector-icons";
import TextField from "../input/textField";
import { colors } from "../../../styles/colors";
import ExpandableList from "../input/expandableList";
import HorizontalLine from "../../common/horizontalLine";
const QuestionHeader = ({
  handleAddObj,
  field,
  setQuestionObj,
  objKey,
  questionObj,
}) => {
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
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <TextField
            value={field.title}
            survey={true}
            onChangeText={(text) => {
              handleAddObj(objKey, { ...field, title: text });
            }}
            placeholder="Pytanie"
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            delete questionObj[objKey];
            setQuestionObj({ ...questionObj });
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
          value={field.type}
          onPress={(value) => {
            handleAddObj(objKey, { ...field, type: value });
          }}
        />
      </View>
    </View>
  );
};

export default QuestionHeader;
