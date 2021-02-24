import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import Title from "../../components/common/Typography/title";
import ViewContainer from "../../components/common/Containers/viewContainer";
import SubTitle from "../../components/common/Typography/subTitle";
import HorizontalLine from "../../components/common/horizontalLine";
import { colors } from "../../styles/colors";
import { rounded } from "../../styles/base";
import ReturnButton from "../../components/common/returnButton";
import icon from "../../assets/user.jpg";
import WideBox from "../../components/common/Boxes/wideBox";
import SmallBox from "../../components/common/Boxes/smallBox";
import { MaterialIcons } from "@expo/vector-icons";
import { fonts } from "../../styles/fonts";
import { LineChart, PieChart } from "react-native-chart-kit";
import Paragraph from "../../components/common/Typography/paragraph";
import RandomColor from "randomcolor";
import { chartConfig } from "../../components/common/Charts/chartsConfig";
import { useSelector } from "react-redux";
import { selectCompanySurveys } from "../../components/redux_components/companyController";

const wideData = {
  labels: ["01.01", "01.02", "01.03", "01.04", "01.05", "01.06", "01.07"],
  datasets: [
    {
      data: [100, 1060, 150, 346, 478, 750, 280],
    },
  ],
};

const data = [
  {
    id: 1,
    name: "Mam 3 lata dużo lat i bardzo duży tekst tutaj jest",
    count: 2000,
  },
  {
    id: 2,
    name: "Mam 5 lata",
    count: 5000,
  },
  {
    id: 3,
    name: "Mam 8 lata",
    count: 13000,
  },
  {
    id: 4,
    name: "Mam 9 lata",
    count: 10000,
  },
  {
    id: 5,
    name: "Mam 2 lata",
    count: 3500,
  },
];

const ViewSurvey = ({ route, navigation }) => {
  const keyId = route.params.itemId;
  const company = useSelector(selectCompanySurveys);
  const survey = company.company.surveys.find((el) => el.id == keyId);
  const [wideWidth, setWideWidth] = useState(0);
  return (
    <PrimaryContainer>
      <View style={styles.topContainer}>
        <ReturnButton margin={false} />
        <Title color={true} noMargin={true}>
          Informacje o ankiecie
        </Title>
      </View>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <WideBox>
              <View style={{ padding: 10 }}>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                  <View style={styles.icon}>
                    <Image style={styles.icon} source={icon} />
                  </View>
                  <View style={styles.surveyname}>
                    <Title noMargin={true} color="white">
                      {survey.name}
                    </Title>
                    <SubTitle color="color">{survey.category}</SubTitle>
                  </View>
                </View>
                <View style={styles.spaceBetween}>
                  <View style={styles.descIcon}>
                    <MaterialIcons
                      name="short-text"
                      size={fonts.md}
                      color={colors.dark}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Title noMargin={true} size="small" color={true}>
                      {survey.shortDescription}
                    </Title>
                    <SubTitle small={true}>Krótki opis ankiety</SubTitle>
                  </View>
                </View>
                <View style={styles.spaceBetween}>
                  <View style={styles.descIcon}>
                    <MaterialIcons
                      name="receipt-long"
                      size={fonts.md}
                      color={colors.dark}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <SubTitle small={true} color="white">
                      {survey.description}
                    </SubTitle>
                    <SubTitle small={true}>Długi opis ankiety</SubTitle>
                  </View>
                </View>
              </View>
            </WideBox>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <SmallBox>
                  <View style={{ flex: 1 }}>
                    <Title color="white" size="small">
                      Wypełnione ankiety:
                    </Title>
                    <View style={styles.smallBoxEnd}>
                      <View style={styles.endText}>
                        <Title noMargin={true} size="big">
                          189532
                        </Title>
                        <MaterialIcons
                          name="person"
                          size={32}
                          color={colors.primary}
                        />
                      </View>
                    </View>
                  </View>
                </SmallBox>
              </View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <SmallBox>
                  <View style={styles.centerRating}>
                    <Title size="extra">{survey.rate}</Title>
                    <MaterialIcons
                      name="star"
                      size={32}
                      color={colors.primary}
                    />
                  </View>
                  <View style={{ alignSelf: "center" }}>
                    <Title color="white" size="small">
                      Ocena ankiety
                    </Title>
                  </View>
                </SmallBox>
              </View>
            </View>
            <View style={{ marginBottom: 20 }}>
              <WideBox
                onLayout={(event) => {
                  var { width } = event.nativeEvent.layout;
                  setWideWidth(width);
                }}
              >
                <View style={styles.dailyChartText}>
                  <MaterialIcons name="insert-chart" size={20} color="white" />
                  <SubTitle small={true} color={"white"}>
                    {" "}
                    Dzienna liczba wypełnionych ankiet:
                  </SubTitle>
                </View>
                <LineChart
                  data={wideData}
                  width={wideWidth}
                  height={200}
                  chartConfig={chartConfig}
                  bezier
                  style={styles.lineChart}
                  fromZero={true}
                />
              </WideBox>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Title size="small" color={true} noMargin={true}>
                Odpowiedzi użytkowników:
              </Title>
            </View>
            {survey.survey.answers.map((key) => {
              return (
                <WideBox key={key}>
                  <SubTitle small={true} color="white">
                    1. Ile lat masz?
                  </SubTitle>
                  <HorizontalLine />
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flex: 1 }}>
                      
                      <PieChart
                        data={data}
                        width={wideWidth / 2}
                        height={150}
                        chartConfig={chartConfig}
                        accessor={"count"}
                        absolute
                        hasLegend={false}
                        center={[35, 0]}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      {data.map((item) => {
                        color = RandomColor();
                        item.color = color;
                        return (
                          <View style={styles.answearsContainer} key={item.id}>
                            <View
                              style={{
                                height: 15,
                                width: 15,
                                backgroundColor: item.color,
                                borderRadius: 50,
                                marginRight: 10,
                              }}
                            ></View>
                            <View
                              style={{
                                marginRight: 25,
                              }}
                            >
                              <Paragraph>
                                {item.id + ". " + item.name + ": " + item.count}
                              </Paragraph>
                            </View>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                </WideBox>
              );
            })}
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    height: 64,
    width: 64,
    borderRadius: 8,
  },
  smallBoxEnd: {
    flex: 1,
    paddingVertical: 5,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  endText: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  surveyname: {
    marginLeft: 10,
    alignSelf: "center",
  },
  descIcon: {
    padding: 4,
    backgroundColor: colors.primary,
    borderRadius: rounded.sm,
    marginRight: 15,
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  spaceBetween: {
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  lineChart: {
    padding: 0,
    marginLeft: -25,
    marginTop: 5,
  },
  dailyChartText: {
    flexDirection: "row",
    alignItems: "center",
  },
  centerRating: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  answearsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
});

export default ViewSurvey;
