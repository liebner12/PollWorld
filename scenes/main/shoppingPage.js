import React from "react";
import { StyleSheet } from "react-native";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import ItemsList from "../../components/combined/itemsList";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import Wallet from "../../components/combined/wallet";

const ShoppingPage = ({ navigation, onSignOut }) => {
  return (
    <PrimaryContainer>
      <HeaderContainer>
        <Title size="big" color={true} shadow={true}>
          Kupony
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <ItemsList
              title="Twoje kupony:"
              type="coupons"
              fields={{
                1: {
                  name: "bonprix",
                  category: "Ubrania i buty",
                  description: "Czwarta sztuka gratis!",
                  coupon: "AXJZ31BD241A",
                },
                2: {
                  name: "eobuwie",
                  category: "Ubrania i buty",
                  description: "-10% na cały asortyment",
                  coupon: "D1SS",
                },
              }}
            />
            <Wallet amount="1923" />
            <ItemsList
              title="Kupony:"
              type="coupons"
              fit={true}
              fields={{
                1: {
                  name: "bonprix",
                  category: "Ubrania i buty",
                  description: "Czwarta sztuka gratis!",
                  price: "1500",
                },
                2: {
                  name: "eobuwie",
                  category: "Ubrania i buty",
                  description: "-10% na cały asortyment",
                  price: "2100",
                },
                3: {
                  name: "bonprix",
                  category: "Ubrania i buty",
                  description: "Czwarta sztuka gratis!",
                  price: "1500",
                },
                4: {
                  name: "eobuwie",
                  category: "Ubrania i buty",
                  description: "-10% na cały asortyment",
                  price: "2100",
                },
                5: {
                  name: "bonprix",
                  category: "Ubrania i buty",
                  description: "Czwarta sztuka gratis!",
                  price: "1500",
                },
                6: {
                  name: "eobuwie",
                  category: "Ubrania i buty",
                  description: "-10% na cały asortyment",
                  price: "2100",
                },
                7: {
                  name: "bonprix",
                  category: "Ubrania i buty",
                  description: "Czwarta sztuka gratis!",
                  price: "1500",
                },
                8: {
                  name: "eobuwie",
                  category: "Ubrania i buty",
                  description: "-10% na cały asortyment",
                  price: "2100",
                },
              }}
            />
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

const styles = StyleSheet.create({});

export default ShoppingPage;
