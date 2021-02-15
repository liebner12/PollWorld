//WORK IN PROGRESS 
//WORK IN PROGRESS 
//WORK IN PROGRESS 
import React, { useState } from "react";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import Title from "../../components/common/Typography/title";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { backgroundColors, colors } from "../../styles/colors";
import SubTitle from "../../components/common/Typography/subTitle";
import ReturnButton from "../../components/common/returnButton";
import { fonts } from "../../styles/fonts";
import { elevation, rounded } from "../../styles/base";
import HorizontalLine from "../../components/common/horizontalLine";
import TextField from "../../components/combined/textField";
import ExpandableList from "../../components/combined/expandableList";
import RadioButtonGroup from "../../components/combined/radioButton";
import { Switch } from "react-native-paper";
const HomePage = ({ navigation }) => {
  const [values, setValues] = useState("");
  const [questionNum, setQuestionNum] = useState(0);
  const onChangeValue = (key, value) => {
    const newState = { ...values, [key]: value };
    setValues(newState);
  };
  const handleAddObj = (key, value) => {
    const newState = { ...questionObj, [key]: value };
    console.log(newState);
    setQuestionObj(newState);
  };
  const handleAddRadio = (key, value) => {
    const newState = { ...questionObj, [key]: value };
    setQuestionObj(newState);
  };
  const [questionObj, setQuestionObj] = useState({
    0: {
      title: "",
      type: "Krótka odpowiedź",
      required: false,
      values: { 0: "a" },
    },
  });
  const [radioList, setRadioList] = useState({ 0: "" });
  const onChangeValueRadio = (key, value) => {
    const newState = { ...radioList, [key]: value };
    setRadioList(newState);
  };
  const [objIterator, setObjIterator] = useState(1);
  const [radioIterator, setRadioIterator] = useState(1);

  return (
    <PrimaryContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ReturnButton />
              <View style={{ marginBottom: 20 }}>
                <Title>Nowa ankieta</Title>
              </View>
            </View>
            <View style={styles.container}>
              <View>
                <SubTitle small={true} color="white">
                  Podaj nazwę ankiety:
                </SubTitle>
                <HorizontalLine />
                <TextField
                  value={values[questionNum]}
                  survey={true}
                  onChangeText={(text) => onChangeValue(questionNum, text)}
                />
              </View>
            </View>
            {Object.keys(questionObj).map((key) => {
              const field = questionObj[key];
              return (
                <View style={styles.container} key={key}>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <TextField
                        value={field.title}
                        survey={true}
                        onChangeText={(text) => {
                          handleAddObj(key, { ...field, title: text });
                        }}
                        placeholder="Pytanie"
                      />
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() => console.log()}
                      style={{
                        borderRadius: 20,
                        width: 24,
                        marginBottom: 10,
                        marginLeft: 10,
                      }}
                    >
                      <MaterialIcons
                        name="delete"
                        size={24}
                        color={colors.primary}
                      ></MaterialIcons>
                    </TouchableOpacity>
                  </View>
                  <HorizontalLine />
                  <View style={{ marginBottom: 20 }}>
                    <ExpandableList
                      survey={true}
                      defaultValue="Krótka odpowiedź"
                      fields={{
                        1: { name: "Jednokrotny wybór" },
                        2: { name: "Krótka odpowiedź" },
                        3: { name: "Wielokrotny wybór" },
                        4: { name: "Lista rozwijana" },
                      }}
                      value={field.type}
                      onPress={(value) => {
                        handleAddObj(key, { ...field, type: value });
                      }}
                    />
                  </View>
                  {field.type == "Krótka odpowiedź" ? (
                    <View>
                      <TextField
                        survey={true}
                        editable={false}
                        placeholder="..."
                      />
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <SubTitle small={true} color="white">
                          Wymagane
                        </SubTitle>
                        <Switch
                          value={field.required}
                          onValueChange={() =>
                            handleAddObj(key, {
                              ...field,
                              required: !field.required,
                            })
                          }
                        />
                      </View>
                    </View>
                  ) : (
                    <View>
                      <RadioButtonGroup
                        value={field}
                        objKey={key}
                        survey={true}
                        fields={field.values}
                        setValue={(value) => console.log(value)}
                        create={true}
                        onChangeValueRadio={handleAddRadio}
                        setRadioList={setQuestionObj}
                      />
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <SubTitle small={true} color="white">
                            Wymagane
                          </SubTitle>
                          <Switch
                            value={field.required}
                            onValueChange={() =>
                              handleAddObj(key, {
                                ...field,
                                required: !field.required,
                              })
                            }
                          />
                        </View>
                        <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={() => {
                            setRadioIterator(radioIterator + 1),
                              handleAddObj(key, {
                                ...field,
                                values: {
                                  ...field.values,
                                  [radioIterator]: "",
                                },
                              });
                          }}
                          style={{
                            width: 30,
                            borderRadius: 50,
                            marginTop: 10,
                            alignSelf: "flex-end",
                          }}
                        >
                          <MaterialIcons
                            name="add-circle"
                            size={30}
                            color={colors.primary}
                          ></MaterialIcons>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
              );
            })}
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{ width: 50, borderRadius: 50, alignSelf: "flex-end" }}
                onPress={() => {
                  handleAddObj(objIterator, {
                    title: "",
                    type: "Krótka odpowiedź",
                    required: false,
                    values: { 0: "" },
                  });
                  setObjIterator(objIterator + 1);
                  console.log(Object.keys(questionObj));
                }}
              >
                <MaterialIcons
                  name="add-circle"
                  size={50}
                  color={colors.primary}
                ></MaterialIcons>
              </TouchableOpacity>
            </View>
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};
const styles = StyleSheet.create({
  error: {
    fontFamily: fonts.secondary,
    minHeight: 20,
    color: colors.error,
    marginBottom: "1%",
  },
  container: {
    backgroundColor: backgroundColors.secondary,
    borderRadius: rounded.md,
    padding: 25,
    marginBottom: 25,
    elevation: elevation.elevation,
  },
});
export default HomePage;
