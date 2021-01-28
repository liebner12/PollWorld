import * as React from "react";
import { Button, Dialog, Portal } from "react-native-paper";
import { backgroundColors } from "../../styles/colors";
import SubTitle from "./Typography/subTitle";
import Title from "./Typography/title";

const CustomDialog = ({ text, visible, hideDialog, action }) => {
  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={hideDialog}
        style={{ backgroundColor: backgroundColors.secondary, elevation: 0 }}
      >
        <Dialog.Title>
          <Title color={true} size="small">
            {text}
          </Title>
        </Dialog.Title>
        <Dialog.Actions>
          <Button onPress={() => hideDialog()}>Nie</Button>
          <Button onPress={() => action()}>Tak</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default CustomDialog;
