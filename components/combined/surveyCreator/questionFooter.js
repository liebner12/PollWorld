import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import SubTitle from "../../common/Typography/subTitle";
import { MaterialIcons } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { colors } from "../../../styles/colors";
const QuestionFooter = ({
  add = true,
  setRadioIterator,
  handleAddObj,
  field,
  radioIterator,
  objKey,
}) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    switchContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    addIcon: {
      width: 30,
      borderRadius: 50,
      marginTop: 10,
      alignSelf: "flex-end",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <SubTitle small={true} color={colors.white}>
          Wymagane
        </SubTitle>
        <Switch
          value={field.required}
          onValueChange={() =>
            handleAddObj(objKey, {
              ...field,
              required: !field.required,
            })
          }
        />
      </View>
      {add ? (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            setRadioIterator(radioIterator + 1),
              handleAddObj(objKey, {
                ...field,
                values: {
                  ...field.values,
                  [radioIterator]: "",
                },
              });
          }}
          style={styles.addIcon}
        >
          <MaterialIcons
            name="add-circle"
            size={30}
            color={colors.primary}
          ></MaterialIcons>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default QuestionFooter;
