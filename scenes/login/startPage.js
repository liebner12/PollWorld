import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import MainButton from "../../components/common/mainButton";
import { FontAwesome } from "@expo/vector-icons";
import Title from "../../components/common/Typography/title";
import Link from "../../components/common/Typography/link";
import SubTitle from "../../components/common/Typography/subTitle";
import superLogoV2 from "../../assets/iconLine.png";
import {
  handleGoogleLogin,
  handleFacebookLogin,
} from "../../components/functional/authentication/socialLogInHandler";
import { ScaledSheet } from "react-native-size-matters";
import { ms } from "react-native-size-matters";
const StartPage = ({ navigation, onSignIn }) => {
  return (
    <ScrollableContainer padding={true}>
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={superLogoV2} style={styles.image} />
            <Title size="big" color={true}>
              poll world
            </Title>
          </View>
          <SubTitle>Cześć! miłego dnia :D</SubTitle>
        </View>
        <View>
          <MainButton
            name="Zarejestruj się"
            onPress={() => navigation.navigate("Register")}
          />
          <MainButton
            name="Zaloguj przez Google"
            transparent={true}
            icon={<FontAwesome name="google" size={ms(24)} color="white" />}
            onPress={() => handleGoogleLogin(onSignIn)}
          />
          <MainButton
            name="Zaloguj przez Facebooka"
            transparent={true}
            icon={<FontAwesome name="facebook" size={ms(24)} color="white" />}
            onPress={() => handleFacebookLogin()}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.login}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Link center={true}>Zaloguj się</Link>
        </TouchableOpacity>
      </View>
    </ScrollableContainer>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginBottom: "30@mvs",
  },
  main: {
    flex: 1,
    justifyContent: "flex-end",
  },
  login: {
    marginTop: "15@mvs",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "42@s",
    height: "42@vs",
    marginRight: "10@ms",
    marginTop: "12@mvs",
    resizeMode: "contain",
  },
});

export default StartPage;
