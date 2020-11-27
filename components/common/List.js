import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
} from "react-native";
import SubTitle from "./SubTitle";
import { AntDesign } from "@expo/vector-icons";
const ExpandableList = ({
  fields,
  title,
  onPress,
  defaultValue,
  value = defaultValue,
}) => {
  const [open, setOpen] = useState(false);

  const fieldKeys = Object.keys(fields);
  const styles = StyleSheet.create({
    list: {
      backgroundColor: "#313131",
      borderRadius: 14,
      borderColor: "#32e0c4",
      borderWidth: 2,
      borderRadius: 14,
      color: "#fff",
      elevation: 20,
      maxHeight: 280,
    },
    text: {
      color: "#fff",
      fontSize: 16,
    },
    firstItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 16,
    },
    items: {
      paddingHorizontal: 10,
      paddingVertical: 16,
    },
    icon: {
      transform: [{ rotate: open ? "180deg" : "0deg" }],
    },
    line: {
      height: 2,
      backgroundColor: "#616161",
    },
    scrollView: {
      margin: 6,
    },
    title: {
      fontSize: 14,
      fontFamily: "Asap_600SemiBold",
      color: "#32e0c4",
      marginBottom: 10,
    },
  });
  

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TouchableWithoutFeedback
        activeOpacity={0.8}
        onPress={() => setOpen(!open)}
      >
        <View style={styles.list}>
          <TouchableOpacity
            style={styles.firstItem}
            onPress={() => setOpen(!open)}
            activeOpacity={1}
          >
            <SubTitle>
              {value.length > 20 ? value.slice(0, 20).concat("...") : value}
            </SubTitle>
            <AntDesign
              name="downcircleo"
              size={24}
              color="#32e0c4"
              style={styles.icon}
            />
          </TouchableOpacity>

          {open ? (
            <ScrollView indicatorStyle="white" style={styles.scrollView}>
              <View style={styles.line}></View>
              {fieldKeys.map((key) => {
                const field = fields[key];

                return (
                  <TouchableOpacity
                    key={key}
                    style={styles.items}
                    onPress={() => onPress(field.name)}
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
  );
};

export default ExpandableList;
