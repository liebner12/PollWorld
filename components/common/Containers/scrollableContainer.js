import React from "react";
import { ScrollView, Animated } from "react-native";
import { backgroundColors } from "../../../styles/colors";
import { rounded } from "../../../styles/base";
const ScrollableContainer = ({ children, padding, list, offset }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: padding ? "10%" : 0,
        paddingVertical: 20,
        backgroundColor: list
          ? backgroundColors.lightDark
          : backgroundColors.primary,
        borderBottomLeftRadius: list ? rounded.md : 0,
        borderBottomRightRadius: list ? rounded.md : 0,
      }}
      onScroll={
        offset
          ? Animated.event(
              [{ nativeEvent: { contentOffset: { y: offset } } }],
              { useNativeDriver: false }
            )
          : null
      }
      scrollEventThrottle={16}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollableContainer;
