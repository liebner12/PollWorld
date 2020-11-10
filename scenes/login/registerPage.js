import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainButton from "../../components/common/MainButton";
import { FontAwesome } from "@expo/vector-icons";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
import Container from "../../components/common/Container";
import TextField from "../../components/common/TextField";
import { List } from 'react-native-paper'
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";


const RegisterPage = ({navigation, onSignIn}) => {
  return (
    <ScrollView>
    <Container>
      <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('Start')}>
        <Ionicons name="md-arrow-round-back" size={30} color="#32e0c4" />
      </TouchableOpacity>
      <View style={styles.main}>
        <View style={styles.container}>
          <Title>Zarejestruj się</Title>
          <SubTitle>ziomeczku!</SubTitle>
        </View>
        <View>
          <TextField name="Email" />
          <TextField name="Hasło" password={true} secured={true} />
          <TextField name="Powtórz hasło" password={true} secured={true} />
          <MainButton name="Zarejestruj się" />
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
      </View>
    </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  listFixUp:{
    marginLeft: -16,
    marginBottom: 30,
    color: "#32e0c4"
  },
  listItem:{
    fontSize: 14,
    fontFamily: "Quicksand_700Bold",
    color: "#32e0c4",
  },
  main: {
    flex: 1,
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

export default RegisterPage;
