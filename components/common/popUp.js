import React from "react";
import { StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";
import { rounded } from "../../styles/base";
import { backgroundColors } from "../../styles/colors";
import Title from "./Typography/title";

const PopUp = ({ visible, setVisible, message, action }) => {
  const styles = StyleSheet.create({
    snackbar: {
      backgroundColor: backgroundColors.lightDark,
      borderRadius: rounded.sm,
      borderWidth: 2,
      borderColor: backgroundColors.green,
      margin: 10,
      marginBottom: 30,
    },
  });
  const onDismissSnackBar = () => setVisible(false);
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismissSnackBar}
      duration={action ? 4000 : 1000}
      style={styles.snackbar}
      action={action}
    >
      <Title size="small">
        {message}
      </Title>
    </Snackbar>
  );
};

export default PopUp;
