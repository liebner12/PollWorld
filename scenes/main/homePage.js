import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import { FontAwesome5 } from "@expo/vector-icons";
import SubTitle from "../../components/common/Typography/subTitle";
import ItemsListHorizontal from "../../components/combined/itemsListHorizontal";
import { useSelector } from "react-redux";
import { selectAccountData } from "../../components/redux_components/accountController";
import MarginContainer from "../../components/common/Containers/marginContainer";
import PopUp from "../../components/common/popUp";
import BuyingWindow from "../../components/combined/buyingWindow";
import { selectPersonalData } from "../../components/redux_components/personalDataController";
import { backgroundColors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
const HomePage = ({ navigation }) => {
  let { account } = useSelector(selectAccountData);
  let { personal } = useSelector(selectPersonalData);
  const surveys = account.surveys;
  const coupons = account.coupons_to_buy;
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [couponId, setCouponId] = useState(1);
  const onToggleSnackBar = (text) => {
    setVisible(!visible);
    setMessage(text);
  };

  const renderCheckout = (couponId) => {
    const coupon = coupons.find((item) => item.id == couponId);
    if (coupon) {
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
      <StatusBar style="light" backgroundColor={backgroundColors.green} />
      <HeaderContainer>
        <Title color={true} shadow={true} size="big">
          Twoje punkty:
        </Title>
        <Title color={true} size="big" shadow={true} noMargin={true}>
          {account.points}{" "}
          <FontAwesome5 name="money-bill" size={fonts.md} color="white" />
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <Title>Witaj {personal.name}</Title>
            <SubTitle>Mamy dla Ciebie super ankiety!</SubTitle>
            <MarginContainer>
              <ItemsListHorizontal
                title="Nowe ankiety"
                subTitle="Zobacz wszystkie:"
                action={() => navigation.navigate("Surveys")}
                data={surveys}
                type="surveys"
                snackbar={onToggleSnackBar}
              />
            </MarginContainer>
            <ItemsListHorizontal
              title="Kupony"
              subTitle="Zobacz wszystkie:"
              type="coupons"
              action={() => navigation.navigate("Shopping")}
              data={coupons}
              setModalVisible={setModalVisible}
              setCouponId={setCouponId}
            />
          </ViewContainer>
        </ScrollableContainer>
        <PopUp visible={visible} setVisible={setVisible} message={message} />
      </ContentContainer>
      {renderCheckout(couponId)}
    </PrimaryContainer>
  );
};

export default HomePage;
