import React from "react";
import { View, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Title from "../common/Typography/title";
import Link from "../common/Typography/link";
import { ScaledSheet } from "react-native-size-matters";
import Coupon from "./coupon";
import Survey from "./survey";
import Placeholder from "./placeholder";

const ItemsListHorizontal = ({
  title,
  subTitle,
  action,
  data,
  type,
  snackbar,
  setModalVisible,
  setCouponId,
}) => {
  const renderItem = ({ item }) => (
    <Survey
      id={item.id}
      name={item.name}
      category={item.category}
      description={item.shortDescription}
      price={item.price}
      rate={item.rate}
      snackbar={snackbar}
    />
  );
  const renderCoupon = ({ item }) => (
    <Coupon
      id={item.id}
      name={item.company}
      category={item.category}
      description={item.description}
      price={item.price}
      setModalVisible={setModalVisible}
      setCouponId={setCouponId}
      code={item.code}
      snackbar={snackbar}
    />
  );

  const renderPlaceholder = () => {
    const numOfPlaceholders = [0, 1, 2, 3];
    return (
      <ScrollView style={{ overflow: "visible" }} horizontal={true}>
        {numOfPlaceholders.map((key) => (
          <Placeholder key={key} />
        ))}
      </ScrollView>
    );
  };

  return (
    <View>
      <View style={styles.title}>
        <Title size="small" color={true} noMargin={true}>
          {title}
        </Title>
        {subTitle ? (
          <TouchableOpacity activeOpacity={0.3} onPress={() => action()}>
            <Link>{subTitle}</Link>
          </TouchableOpacity>
        ) : null}
      </View>
      <FlatList
        removeClippedSubviews={true}
        horizontal={true}
        style={styles.contentContainer}
        data={data}
        renderItem={type == "coupons" ? renderCoupon : renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => renderPlaceholder()}
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  contentContainer: {
    overflow: "visible",
  },
  title: {
    marginBottom: "10@mvs",
  },
});

export default ItemsListHorizontal;
