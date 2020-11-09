import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
const SubTitle = ({ children }) => {
  return (
    <RadioButton.Group onValueChange={(value) => setValue(value)} value={value}>
      <View>
        <MainText>Metropolia</MainText>
        <RadioButton
          value="metropolia"
          color="#32e0c4"
          uncheckedColor="#32e0c4"
        />
      </View>
      <View>
        <MainText>Miasto</MainText>
        <RadioButton value="miasto" color="#32e0c4" uncheckedColor="#32e0c4" />
      </View>
      <View>
        <MainText>Wieś</MainText>
        <RadioButton value="wies" color="#32e0c4" uncheckedColor="#32e0c4" />
      </View>
    </RadioButton.Group>
  );
};
export default SubTitle;
