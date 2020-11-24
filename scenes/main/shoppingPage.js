import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MainButton from "../../components/common/MainButton";
import Title from "../../components/common/Title";
import Container from "../../components/common/Container";
import Header from "../../components/combined/Header";
import SubTitle from "../../components/common/SubTitle";
import ScollableItems from "../../components/combined/ScrollableItems";
import ItemsContainer from "../../components/common/ItemsContainer";
const ShoppingPage = ({ navigation, onSignOut }) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#212121" }}
    >
      <Header>
        <Title color={true} shadow={true}>
          Kupony
        </Title>
      </Header>
      <ItemsContainer wider={true}>
        <ScollableItems
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
        <ScollableItems
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
      </ItemsContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ShoppingPage;
