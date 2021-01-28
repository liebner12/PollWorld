import React, { useState } from "react";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import ItemsListHorizontal from "../../components/combined/itemsListHorizontal";
import ItemsList from "../../components/combined/itemsList";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import Wallet from "../../components/combined/wallet";
import { useSelector } from "react-redux";
import { selectAccountData } from "../../components/redux_components/accountController";
import BuyingWindow from "../../components/combined/buyingWindow";
import PopUp from "../../components/common/popUp";
import { View } from "react-native";

const ShoppingPage = () => {
  let { account } = useSelector(selectAccountData);
  let ownedCoupons = account.owned_coupons;
  let couponsToBuy = account.coupons_to_buy;
  const [modalVisible, setModalVisible] = useState(false);
  const [couponId, setCouponId] = useState(1);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const onToggleSnackBar = (text) => {
    setVisible(!visible);
    setMessage(text);
  };

  const renderCheckout = (couponId) => {
    const coupon = couponsToBuy.find((item) => item.id == couponId);
    if (coupon != null) {
      return (
        <BuyingWindow
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          id={coupon.id}
          name={coupon.company}
          category={coupon.category}
          description={coupon.description}
          price={coupon.price}
          points={account.points}
          snackbar={onToggleSnackBar}
        />
      );
    }
  };

  return (
    <PrimaryContainer>
      <HeaderContainer>
        <Title size="big" color={true} shadow={true}>
          Kupony
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ItemsList
          title="Kupony:"
          type="coupons"
          data={couponsToBuy}
          setModalVisible={setModalVisible}
          setCouponId={setCouponId}
          snackbar={onToggleSnackBar}
          ListHeaderComponent={
            <View>
              <ItemsListHorizontal
                title="Twoje kupony:"
                type="coupons"
                data={ownedCoupons}
                snackbar={onToggleSnackBar}
              />
              <Wallet amount={account.points} />
            </View>
          }
        />

        <PopUp visible={visible} setVisible={setVisible} message={message} />
      </ContentContainer>
      {renderCheckout(couponId)}
    </PrimaryContainer>
  );
};

export default ShoppingPage;
