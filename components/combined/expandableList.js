import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import SubTitle from "../common/Typography/subTitle";
import { AntDesign } from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";
import { backgroundColors, colors } from "../../styles/colors";
import { elevation, rounded } from "../../styles/base";
import HorizontalLine from "../common/horizontalLine";
import Title from "../common/Typography/title";
const ExpandableList = ({
  fields,
  title,
  onPress,
  defaultValue,
  value = defaultValue,
  survey,
}) => {
  const [open, setOpen] = useState(false);
  const fieldKeys = Object.keys(fields);
  const styles = ScaledSheet.create({
    list: {
      backgroundColor: backgroundColors.lightDark,
      borderColor: colors.primary,
      borderWidth: 2,
      borderRadius: rounded.md,
      color: colors.white,
      elevation: elevation.elevation,
      maxHeight: "300@mvs",
    },
    firstItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16@ms",
    },
    items: {
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
    icon: {
      transform: [{ rotate: open ? "180deg" : "0deg" }],
    },
    container: { marginTop: 5 },
  });

  return (
    <View>
      {survey ? null : (
        <SubTitle small={true} color="color">
          {title}
        </SubTitle>
      )}
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => setOpen(!open)}
        >
          <View style={styles.list}>
            <TouchableOpacity
              style={styles.firstItem}
              onPress={() => setOpen(!open)}
              activeOpacity={1}
            >
              <Title size="small">
                {value.length > 20 ? value.slice(0, 20).concat("...") : value}
              </Title>
              <AntDesign
                name="downcircleo"
                size={24}
                color="#32e0c4"
                style={styles.icon}
              />
            </TouchableOpacity>
            {open ? (
              <ScrollView indicatorStyle="white" nestedScrollEnabled={true}>
                <HorizontalLine />
                {fieldKeys.map((key) => {
                  const field = fields[key];
                  return (
                    <TouchableOpacity
                      key={key}
                      style={styles.items}
                      onPress={() => (onPress(field.name), setOpen(!open))}
                    >
                      <SubTitle>{field.name}</SubTitle>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            ) : null}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default ExpandableList;
