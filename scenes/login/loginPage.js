import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainButton from "../../components/common/MainButton";
import { FontAwesome } from "@expo/vector-icons";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
import Container from "../../components/common/Container";
import TextField from "../../components/common/TextField";
import { Ionicons } from "@expo/vector-icons";
const LoginPage = ({navigation, onSignIn}) => {
  return (
    <Container>
      <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('Start')}>
        <Ionicons name="md-arrow-round-back" size={30} color="#32e0c4" />
      </TouchableOpacity>
      <View style={styles.main}>
        <View style={styles.container}>
          <Title>Zaloguj się</Title>
          <SubTitle>O cześć, nie zauważyłem cie, siemanko!</SubTitle>
        </View>
        <View>
          <TextField name="Email" />
          <TextField name="Hasło" password={true} secured={true} />
          <MainButton name="Zaloguj się" />
          <Text style={[styles.greyText, styles.smallText]}>
            albo użyj twojego portalu społecznościowego
          </Text>

          <View style={styles.buttonContainer}>
            <View style={[styles.btn, styles.btnLeft]}>
              <MainButton
                name="Google"
                icon={<FontAwesome name="google" size={24} color="white" />}
                onPress={()=>onSignIn}
              />
            </View>
            <View style={styles.btn}>
              <MainButton
                name="Facebook"
                icon={<FontAwesome name="facebook" size={24} color="white" />}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.greyText}>Zapomniałeś hasła?</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.login}>Zarejestruj się</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  main: {
    flex: 1,
    justifyContent: "flex-end",
  },
  login: {
    fontSize: 16,
    fontFamily: "Quicksand_700Bold",
    color: "#32e0c4",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  btn: { flex: 1 },
  btnLeft: { marginRight: 30 },
  greyText: {
    color: "#989eb1",
    fontSize: 16,
    fontFamily: "Asap_400Regular",
  },
  smallText: {
    marginVertical: 20,
    fontSize: 14,
    textAlign: "center",
  },
});

export default LoginPage;
