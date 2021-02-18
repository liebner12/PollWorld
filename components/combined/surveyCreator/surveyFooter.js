import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import MainButton from "../../common/mainButton";

const SurveyFooter = ({ setObjIterator, handleAddObj, objIterator }) => {
  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "flex-end",
    },
    topContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 3 }}>
          <MainButton
            name="Zatwierdź"
            icon={<MaterialIcons name="check" size={24} color={colors.white} />}
            onPress={() => console.log()}
          />
        </View>
        <View style={{ flex: 4, alignItems: "flex-end" }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ width: 50, borderRadius: 50 }}
            onPress={() => {
              setObjIterator(objIterator + 1);
              handleAddObj(objIterator, {
                title: "",
                type: "Krótka odpowiedź",
                required: false,
                values: { 0: "" },
              });
            }}
          >
            <MaterialIcons
              name="add-circle"
              size={50}
              color={colors.primary}
            ></MaterialIcons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SurveyFooter;
