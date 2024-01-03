import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Text, Button } from "native-base";
import { RFPercentage } from "react-native-responsive-fontsize";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Intro1 = (props) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    }}
  >
    <ImageBackground
      source={{
        uri:
          "https://s3images.coroflot.com/user_files/individual_files/379162_aQSBYe8z2MzLj6mfPRH8TsKKm.jpg",
      }}
      style={styles.image}
    ></ImageBackground>
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
    <ImageBackground
      source={{
        uri: "http://www.arena-pakistan.com/uploads/events/584818393.jpg",
      }}
      style={styles.image}
    ></ImageBackground>
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
    <ImageBackground
      source={{
        uri:
          "http://www.arena-pakistan.com/uploads/announcements/724600473.jpg",
      }}
      style={styles.image}
    ></ImageBackground>
  </View>
);

export default class Slider extends Component {
  SCREENS = [
    <Intro1 navigation={this.props.navigation} />,
    <Intro2 navigation={this.props.navigation} />,
    <Intro3 navigation={this.props.navigation} />,
  ];

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
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
          autoplay={true}
          enableMomentum={false}
          lockScrollWhileSnapping={true}
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
              borderColor: "#ccc",
              borderWidth: 4,
            }}
          />
        </View>
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
    backgroundColor: "#e62b05",
  },
  container: {
    height: Dimensions.get("window").width / 1.5,
  },
  tabBar: {
    position: "absolute",
    top: Dimensions.get("window").width / 2,
    left: Dimensions.get("window").width / 2.5,
    borderColor: "#ddd",
  },
  tabsContainer: {
    flexDirection: "row",
    height: 50,
    paddingTop: 0,
    paddingBottom: 0,
  },
  btn: {
    backgroundColor: "#5657C8",
    width: 140,
    position: "absolute",
    top: Dimensions.get("window").height / 1.3,
    right: 25,
  },
  skipText: {
    fontSize: RFPercentage(2.7),
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    // opacity: 0.9,
  },
  continueText: {
    textTransform: "capitalize",
    fontSize: 17,
    fontWeight: "bold",
  },
  mainText: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "signika",
    fontSize: RFPercentage(5),
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontFamily: "signika",
    fontSize: RFPercentage(2.7),
  },
  boxes: {
    padding: 12,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    borderWidth: 0.7,
    borderColor: "#fff",
    borderRadius: 7,
  },
  boxContainer: {
    flexDirection: "row",
    marginLeft: 35,
    marginTop: 10,
    alignItems: "center",
  },
});
