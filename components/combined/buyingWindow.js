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
import {useDispatch, useSelector} from "react-redux";
import {
  couponsToBuy, dispatchCouponsToBuy,
  dispatchOwnedCoupons,
  dispatchUserPoints,
  selectAccountData
} from "../redux_components/accountController";
import {buyCoupon, getCouponsToBuy, getOwnedCoupons} from "../functional/surveys/logic/survey";
import {getUserDataForUser} from "../functional/profile/logic/userData";
import {profileDataSeparator} from "../functional/profile/logic/profileDataHandlers";
import {getAccessToken} from "../functional/api/storedTokens";
const BuyingWindow = ({
  modalVisible,
  setModalVisible,
  id,
  name,
  category,
  description,
  price,
  points,
  snackbar,
}) => {
  const dispatchToBuy = useDispatch();
  const dispatchOwned = useDispatch();
  const dispatchPoints = useDispatch();
  const { account } = useSelector(selectAccountData);
  let message;

  const makePurchase = async () =>{
    if(account.points<price){
      setModalVisible(false)
      message="Zbyt mało punktów na koncie!"
    }
    else{
      let response = await buyCoupon(id)
      if(response.response_status===200){
        let couponList = account.coupons_to_buy
        couponList = couponList.filter(item => item.id !== id)
        console.log("KUPONY", couponList)
        dispatchToBuy(dispatchCouponsToBuy(couponList))
        message = "Udało się zakupić kupon!"
      }
      else{
        message = "Nie udało sie dokonać zakupu!"
      }
    }
      const token = await getAccessToken();
      const profileData = await getUserDataForUser(token);
      const couponsToBuy = await getCouponsToBuy(token);
      const ownedCoupons = await getOwnedCoupons(token);
      dispatchPoints(dispatchUserPoints(profileDataSeparator(profileData).account.points))
      dispatchToBuy(dispatchCouponsToBuy(couponsToBuy))
      dispatchOwned(dispatchOwnedCoupons(ownedCoupons))
      setModalVisible(false)
      snackbar(message)
  }

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
          <MainButton name="Kup" onPress={makePurchase} />
        </View>
      </View>
    </Modal>
  );
};

export default BuyingWindow;
