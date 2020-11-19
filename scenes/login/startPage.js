import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MainButton from "../../components/common/MainButton";
import { FontAwesome } from "@expo/vector-icons";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
import Container from "../../components/common/Container";
import Alert from "../../components/common/Alert";
import superLogoV2 from "../../assets/iconLine.png";
import { signInWithGoogle } from "../../components/functional/authentication/logic/appSignIn";
import { signInWithFacebook } from "../../components/functional/authentication/logic/appSignIn";
const StartPage = ({ navigation, onSignIn }) => {
  const [open, setOpen] = useState(false);

  const handleGoogleLogin = async () => {
    await signInWithGoogle() == 200 ? onSignIn() : setOpen(true);
  };

  const handleFacebookLogin = async () => {
    console.log(await signInWithFacebook);
  };

  return (
    <Container>
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={superLogoV2} style={styles.image} />
            <Title big={true} color={true}>
              poll world
            </Title>
          </View>
          <SubTitle>Cześć mordeczko miłego dnia :D</SubTitle>
        </View>
        <View>
          <MainButton
            name="Zarejestruj się"
            onPress={() => navigation.navigate("Register")}
          />
          <MainButton
            name="Zaloguj przez Google"
            transparent={true}
            icon={<FontAwesome name="google" size={24} color="white" />}
            onPress={() => handleGoogleLogin()}
          />
          <MainButton
            name="Zaloguj przez Facebooka"
            transparent={true}
            icon={<FontAwesome name="facebook" size={24} color="white" />}
            onPress={() => navigation.navigate("Details")}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.login}>Zaloguj się</Text>
        </TouchableOpacity>
      </View>
      {open ? <Alert name="Błąd" /> : null}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  header: {
    height: "50%",
  },
  main: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  login: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Quicksand_700Bold",
    color: "#32e0c4",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 42,
    height: 42,
    marginRight: 10,
    marginTop: 12,
    resizeMode: "contain",
  },
});

export default StartPage;
