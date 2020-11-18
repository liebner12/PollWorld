import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
} from "react-native";
import SubTitle from "./SubTitle";
import { AntDesign } from "@expo/vector-icons";

const ExpandableList = ({ name, transparent, icon, onPress, setValue, value }) => {
  const [open, setOpen] = useState(false);
  const styles = StyleSheet.create({
    list: {
      backgroundColor: "#313131",
      borderRadius: 14,
      borderColor: "#32e0c4",
      borderWidth: 2,
      borderRadius: 14,
      color: "#fff",
      elevation: 20,
      maxHeight: 220,
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
  });
  return (
    <TouchableWithoutFeedback
      activeOpacity={0.8}
      onPress={() => setOpen(!open)}
    >
      <View style={styles.list}>
        <TouchableOpacity
          style={styles.firstItem}
          onPress={() => setOpen(!open)}
          activeOpacity={0.8}
        >
          <SubTitle>{value}</SubTitle>
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

            <TouchableOpacity style={styles.items}>
              <SubTitle>Ninja</SubTitle>
            </TouchableOpacity>
            <TouchableOpacity style={styles.items}>
              <SubTitle>Wojownik</SubTitle>
            </TouchableOpacity>
            <TouchableOpacity style={styles.items}>
              <SubTitle>Szamanka</SubTitle>
            </TouchableOpacity>
            <TouchableOpacity style={styles.items}>
              <SubTitle>Sura</SubTitle>
            </TouchableOpacity>
          </ScrollView>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ExpandableList;
