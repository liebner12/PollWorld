import React from "react";
import { TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SubTitle from "../../common/Typography/subTitle";
import { ScaledSheet } from "react-native-size-matters";
import { colors, backgroundColors } from "../../../styles/colors";
import { rounded } from "../../../styles/base";
const TextField = React.forwardRef(
  (
    {
      name,
      password,
      secured,
      value,
      onChangeText,
      onSubmitEditing,
      keyboardType,
      blurOnSubmit,
      defaultValue,
      survey,
      placeholder,
      editable,
      multiline = false,
      numberOfLines,
    },
    ref
  ) => {
    const [secure, setSecure] = React.useState(secured);
    const styles = ScaledSheet.create({
      container: {
        marginBottom: "10@mvs",
      },
      textField: {
        flex: 1,
        marginBottom: survey ? 0 : "5@mvs",
        fontSize: "16@ms",
        color: colors.white,
        backgroundColor: survey ? backgroundColors.lightGrey : null,
        borderRadius: survey ? rounded.sm : 0,
        padding: survey ? "6@ms" : 0,
      },
      textFieldContainer: {
        flexDirection: "row",
        borderBottomColor: colors.primary,
        borderBottomWidth: survey ? 0 : 2,
      },
    });
    return (
      <View style={styles.container}>
        {survey ? null : (
          <SubTitle small={true} color="color">
            {name}
          </SubTitle>
        )}
        <View style={styles.textFieldContainer}>
          <TextInput
            value={value}
            defaultValue={defaultValue}
            onChangeText={onChangeText}
            color="#fff"
            style={styles.textField}
            selectionColor="#32e0c4"
            secureTextEntry={secure}
            onSubmitEditing={onSubmitEditing}
            keyboardType={keyboardType}
            maxLength={multiline ? 150 : 40}
            ref={ref}
            editable={editable}
            blurOnSubmit={blurOnSubmit}
            placeholder={
              placeholder ? placeholder : survey ? "Wpisz tekst tutaj" : ""
            }
            placeholderTextColor={placeholder ? "#fff" : "#aaa"}
            multiline={multiline}
            numberOfLines={numberOfLines}
          />
          {password ? (
            <AntDesign
              name="eye"
              size={24}
              color={secure ? "#d1d6db" : "#32e0c4"}
              onPress={() => setSecure(!secure)}
            />
          ) : null}
        </View>
      </View>
    );
  }
);

export default TextField;
