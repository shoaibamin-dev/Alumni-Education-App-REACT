import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Text, Button } from "native-base";
import { RFPercentage } from "react-native-responsive-fontsize";
import font from "../shared/font";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Intro1 = (props) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    }}
  >
    <Image
      source={require("../assets/images/illustration3.jpg")}
      style={styles.image}
    />
    <View style={styles.mainTextView}>
      {/* <Text style={styles.mainText}> {props.text1} </Text> */}
      <Text style={styles.textDetails}>{props.text2} </Text>
    </View>
  </View>
);

const Intro2 = (props) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    }}
  >
    <Image
      source={require("../assets/images/illustration2.jpg")}
      style={styles.image}
    />
    <View style={styles.mainTextView}>
      {/* <Text style={styles.mainText}> {props.text1} </Text> */}
      <Text style={styles.textDetails}>{props.text2} </Text>
    </View>
  </View>
);

const Intro3 = (props) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    }}
  >
    <Image
      source={require("../assets/images/illustration1.jpg")}
      style={styles.image}
    />
    <View style={styles.mainTextView}>
      {/* <Text style={styles.mainText}> {props.text1} </Text> */}
      <Text style={styles.textDetails}>{props.text2} </Text>
    </View>
  </View>
);

export default class Introduction extends Component {
  SCREENS = [
    <Intro1
      navigation={this.props.navigation}
      // text1="TEXT"
      text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    />,
    <Intro2
      navigation={this.props.navigation}
      // text1="TEXT"
      text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    />,
    <Intro3
      navigation={this.props.navigation}
      // text1="TEXT"
      text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    />,
  ];

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  //async storage
  async storeIsWelcomeStatus(status) {
    try {
      await AsyncStorage.setItem("welcomestatus", JSON.stringify(status));
    } catch (e) {
      throw e;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={(ref) => (this.carouselRef = ref)}
          data={this.SCREENS}
          renderItem={({ item }) => item}
          onSnapToItem={(i) => this.setState({ activeTab: i })}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH}
          slideStyle={{ width: SCREEN_WIDTH }}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
        />

        <View style={styles.tabBar}>
          <Pagination
            dotStyle={styles.ww}
            inactiveDotOpacity={0.8}
            inactiveDotScale={0.6}
            activeDotIndex={this.state.activeTab}
            dotsLength={this.SCREENS.length}
            inactiveDotStyle={{
              backgroundColor: "#fff",
              borderColor: "#e6df05",
              borderWidth: 4,
            }}
          />
        </View>
        {this.state.activeTab == 2 ? (
          <Button
            block
            style={styles.btn}
            onPress={() => {
              this.storeIsWelcomeStatus(true);
              this.props.navigation.navigate("auth");
            }}
          >
            <Text style={[styles.continueText]}>{"GET STARTED"}</Text>
          </Button>
        ) : (
          <Button
            block
            style={styles.btn}
            onPress={() => {
              this.carouselRef.snapToNext();
            }}
          >
            <Text style={styles.continueText}> {"continue"} </Text>
          </Button>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ww: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: -6,
    backgroundColor: "#e6df05",
  },
  container: {
    flex: 1,
  },
  tabBar: {
    position: "absolute",
    right: 0,
    bottom: Dimensions.get("window").width / 3.5,
    left: 0,
    borderColor: "#ddd",
  },
  tabsContainer: {
    flexDirection: "row",
    height: 50,
    paddingTop: 0,
    paddingBottom: 0,
  },
  btn: {
    backgroundColor: "#e62b05",
    width: 120,
    position: "absolute",
    top: Dimensions.get("window").height / 1.15,
    right: 25,
  },
  // skipText: {
  //   fontSize: RFPercentage(2.7),
  //   fontWeight: "bold",
  //   color: "#fff",
  // },
  image: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").width / 1.4,
    marginTop: Dimensions.get("window").width / 6,
  },
  // mainText: {
  //   fontSize: RFPercentage(3.5),
  //   fontWeight: "bold",
  //   color: "#B247A7",
  //   marginVertical: 50,
  // },
  textDetails: {
    fontSize: RFPercentage(2.4),
    textAlign: "justify",
    fontFamily: font.primary,
  },
  continueText: {
    textTransform: "capitalize",
    fontSize: RFPercentage(2.6),
    fontWeight: "bold",
  },
  mainTextView: {
    width: "100%",
    paddingHorizontal: 25,
    alignItems: "center",
    marginTop: 40,
  },
});
