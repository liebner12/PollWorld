//WORK IN PROGRESS
//WORK IN PROGRESS
//WORK IN PROGRESS
import React, { useState } from "react";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import Title from "../../components/common/Typography/title";
import SmallBox from "../../components/common/Boxes/smallBox";
import TwoColumn from "../../components/common/Containers/twoColumns";
import LargeBox from "../../components/common/Boxes/lgBox";
import WideBox from "../../components/common/Boxes/wideBox";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  TouchableHighlight,
  View,
  Dimensions,
  StatusBar,
} from "react-native";
import { backgroundColors, colors } from "../../styles/colors";
import SubTitle from "../../components/common/Typography/subTitle";
import { ScaledSheet } from "react-native-size-matters";

const data = [
  {
    name: "Beijing",
    population: 527612,
    color: colors.transparentPrimary,
  },
  {
    name: "New York",
    population: 438000,
    color: "#2DA794",
  },
  {
    name: "Moscow",
    population: 220000,
    color: colors.primary,
  },
];

const wideData = {
  labels: ["01.01", "01.02", "01.03", "01.04", "01.05", "01.06", "01.07"],
  datasets: [
    {
      data: [100, 1060, 150, 346, 478, 750, 280],
    },
  ],
};
const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  decimalPlaces: 0,
  fillShadowGradientOpacity: 1,
  color: (opacity = 1) => `rgba(50, 224, 196, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(50, 224, 196, ${opacity})`,
};

const SurveysCompanyPage = ({ navigation }) => {
  const [width, setWidth] = useState(0);
  const [wideWidth, setWideWidth] = useState(0);
  const [wideHeight, setWideHeight] = useState(0);
  const [textHeight, setTextHeight] = useState(0);
  return (
    <PrimaryContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <View
              style={{
                marginBottom: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Title>Dashboard</Title>
            </View>
            <WideBox
              onLayout={(event) => {
                var { x, y, width, height } = event.nativeEvent.layout;
                setWideWidth(width);
                setWideHeight(height);
              }}
            >
              <View
                style={{
                  marginLeft: 5,
                  marginBottom: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MaterialIcons name="insert-chart" size={20} color="white" />
                <SubTitle
                  small={true}
                  color={"white"}
                  onLayout={(event) => {
                    var { x, y, width, height } = event.nativeEvent.layout;
                    setTextHeight(height);
                  }}
                >
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
                style={{ padding: 0, marginLeft: -20, marginTop: 5 }}
                fromZero={true}
              />
            </WideBox>
            <TwoColumn>
              <View style={{ flex: 1 }}>
                <SmallBox
                  green={true}
                  onPress={() => navigation.navigate("AddSurvey")}
                >
                  <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                      <Title grey={true}>Dodaj {"\n"}ankietę</Title>
                    </View>
                    <MaterialIcons
                      name="add-circle"
                      size={36}
                      color={colors.darkGrey}
                      style={{
                        paddingVertical: 5,
                        alignSelf: "flex-end",
                      }}
                    />
                  </View>
                </SmallBox>
                <LargeBox>
                  <View
                    style={{
                      padding: 10,
                      flex: 1,
                      justifyContent: "space-between",
                    }}
                  >
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
                    var { x, y, width, height } = event.nativeEvent.layout;
                    setWidth(width);
                  }}
                >
                  <View
                    style={{
                      padding: 10,
                      flex: 1,
                      justifyContent: "space-between",
                    }}
                  >
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
                <SmallBox green={true} onPress={() => console.log("asdf")}>
                  <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                      <Title grey={true}>Pobierz {"\n"}XML</Title>
                    </View>
                    <MaterialIcons
                      name="file-download"
                      size={36}
                      color={colors.darkGrey}
                      style={{
                        paddingVertical: 5,
                        alignSelf: "flex-end",
                      }}
                    />
                  </View>
                </SmallBox>
              </View>
            </TwoColumn>
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
    </PrimaryContainer>
  );
};

const styles = ScaledSheet.create({
 
});

export default SurveysCompanyPage;
