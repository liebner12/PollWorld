import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { BottomMenuItem } from "./BottomMenuItem";

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.bar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableRipple
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.barItem}
            key={label}
          >
            <BottomMenuItem isCurrent={isFocused} iconName={label.toString()} />
          </TouchableRipple>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#444444",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -20,
  },
  barItem: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default MyTabBar;
