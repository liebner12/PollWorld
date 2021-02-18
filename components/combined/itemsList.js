import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import Title from "../common/Typography/title";
import Link from "../common/Typography/link";
import { ScaledSheet } from "react-native-size-matters";
import Coupon from "./coupon";
import Survey from "./survey";
import Placeholder from "./placeholder";
const ItemsList = ({
  title,
  subTitle,
  action,
  data,
  type,
  snackbar,
  setModalVisible,
  setCouponId,
  ListHeaderComponent,
}) => {
  const renderItem = ({ item, index }) => (
    <Survey
      id={item.id}
      name={item.name}
      category={item.category}
      description={item.shortDescription}
      price={item.price}
      rate={item.rate}
      fit={true}
      even={index % 2 ? false : true}
      snackbar={snackbar}
    />
  );
  const renderCoupon = ({ item, index }) => (
    <Coupon
      id={item.id}
      name={item.company}
      category={item.category}
      description={item.description}
      price={item.price}
      setModalVisible={setModalVisible}
      setCouponId={setCouponId}
      fit={true}
      even={index % 2 ? false : true}
      code={item.code}
      snackbar={snackbar}
    />
  );
  const renderPlaceholder = () => {
    const numOfPlaceholders = [0, 1, 2, 3];
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {numOfPlaceholders.map((key, index) => (
          <Placeholder fit={true} even={index % 2 ? false : true} key={key} />
        ))}
      </View>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={
        <View>
          {ListHeaderComponent}
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
        </View>
      }
      ListHeaderComponentStyle={{ paddingHorizontal: "5%" }}
      style={styles.contentContainer}
      data={data}
      renderItem={type == "coupons" ? renderCoupon : renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      ListFooterComponent={<View></View>}
      ListFooterComponentStyle={{ paddingBottom: 20 }}
      ListEmptyComponent={renderPlaceholder()}
    />
  );
};

const styles = ScaledSheet.create({
  contentContainer: {
    paddingTop: 20,
  },
  title: {
    marginBottom: "10@mvs",
  },
});

export default ItemsList;
