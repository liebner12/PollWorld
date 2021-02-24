import React, { useState } from "react";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import Title from "../../components/common/Typography/title";
import SmallBox from "../../components/common/Boxes/smallBox";
import LargeBox from "../../components/common/Boxes/lgBox";
import WideBox from "../../components/common/Boxes/wideBox";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { colors } from "../../styles/colors";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import SubTitle from "../../components/common/Typography/subTitle";
import { ScaledSheet } from "react-native-size-matters";
import { chartConfig } from "../../components/common/Charts/chartsConfig";
import { useSelector } from "react-redux";
import { selectCompanySurveys } from "../../components/redux_components/companyController";
const data = {
  data: [0.73],
};

const wideData = {
  labels: ["01.01", "01.02", "01.03", "01.04", "01.05", "01.06", "01.07"],
  datasets: [
    {
      data: [100, 1060, 150, 346, 478, 750, 280],
    },
  ],
};

const HomePage = ({ navigation }) => {
  const [width, setWidth] = useState(0);
  const [wideWidth, setWideWidth] = useState(0);

  return (
    <PrimaryContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <View style={styles.title}>
              <Title>Dashboard</Title>
            </View>
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
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <SmallBox
                  green={true}
                  onPress={() => navigation.navigate("AddSurvey")}
                >
                  <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                      <Title grey={true}>Dodaj{"\n"}ankietę</Title>
                    </View>
                    <MaterialIcons
                      name="add-circle"
                      size={36}
                      color={colors.darkGrey}
                      style={styles.icons}
                    />
                  </View>
                </SmallBox>
                <LargeBox>
                  <View style={styles.uniqueUsers}>
                    <MaterialIcons
                      name="check-circle"
                      size={36}
                      color={colors.white}
                    />
                    <Title size="extra" color="white">
                      17999
                    </Title>
                    <SubTitle small={true} color="white">
                      Unikalni użytkownicy
                    </SubTitle>
                  </View>
                </LargeBox>
              </View>
              <View style={{ flex: 1, marginLeft: 20 }}>
                <LargeBox
                  onLayout={(event) => {
                    var { width } = event.nativeEvent.layout;
                    setWidth(width);
                  }}
                >
                  <View style={styles.surveysDone}>
                    <Title size="small" center={true} color="white">
                      Wypełnione ankiety
                    </Title>
                  </View>
                  <ProgressChart
                    data={data}
                    width={width}
                    height={180}
                    strokeWidth={16}
                    radius={50}
                    chartConfig={chartConfig}
                    hideLegend={true}
                  />
                  <View style={styles.percentageChart}>
                    <Title color="white" size="big">
                      75%
                    </Title>
                  </View>
                </LargeBox>
                <SmallBox green={true} onPress={() => console.log("asdf")}>
                  <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                      <Title grey={true}>Pobierz{"\n"}XML</Title>
                    </View>
                    <MaterialIcons
                      name="file-download"
                      size={36}
                      color={colors.darkGrey}
                      style={styles.icons}
                    />
                  </View>
                </SmallBox>
              </View>
            </View>
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

const styles = ScaledSheet.create({
  percentageChart: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginTop: 25,
  },
  surveysDone: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  uniqueUsers: {
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  dailyChartText: {
    flexDirection: "row",
    alignItems: "center",
  },
  lineChart: {
    padding: 0,
    marginLeft: -25,
    marginTop: 5,
  },
  icons: {
    paddingVertical: 5,
    alignSelf: "flex-end",
  },
});

export default HomePage;
