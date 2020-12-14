import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Title from "../common/Typography/title";
import { colors, backgroundColors } from "../../styles/colors";
import { elevation, rounded } from "../../styles/base";
import MainButton from "../common/mainButton";
import ItemHeader from "../common/itemHeader";
import HorizontalLine from "../common/horizontalLine";
import SubTitle from "../common/Typography/subTitle";
import { getUserPoints } from "../functional/surveys/communication/survey";
const BuyingWindow = ({
  modalVisible,
  setModalVisible,
  id,
  name,
  category,
  description,
  price,
  points,
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(21,21,21,0.8)",
      position: "absolute",
      width: "100%",
      height: "100%",
      justifyContent: "flex-end",
    },
    buyingContainer: {
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 20,
      borderTopRightRadius: rounded.md,
      borderTopLeftRadius: rounded.md,
      backgroundColor: backgroundColors.lightDark,
    },
    priceContainer: {
      marginTop: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
  return (
    <Modal
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
      visible={modalVisible}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={{ flex: 1 }}></View>
        </TouchableWithoutFeedback>
        <View style={styles.buyingContainer}>
          <ItemHeader name={description} category={name} fit={true} />
          <View style={styles.priceContainer}>
            <SubTitle noMargin={true}>Stan konta:</SubTitle>
            <SubTitle noMargin={true} color={true}>
              {points} - {price} = {points-price}{" "}
              <FontAwesome5 name="money-bill" size={18} color={colors.white} />
            </SubTitle>
          </View>
          <HorizontalLine grey={true} />
          <MainButton name="Kup" onPress={() => setModalVisible(false)} />
        </View>
      </View>
    </Modal>
  );
};

export default BuyingWindow;
