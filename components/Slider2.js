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
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { ScaledSheet } from "react-native-size-matters";

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
          "https://static01.nyt.com/images/2020/02/25/well/PHYSED-SHOES1/merlin_168154896_a69879b8-d43a-40d0-8297-dd7086d7d784-mobileMasterAt3x.jpg",
      }}
      style={styles.image}
    >
      <View style={{ backgroundColor: "rgba(0,0,0,0.4)", height: "100%" }}>
        <View style={{ marginTop: 30, marginLeft: 30 }}>
          <Text style={styles.mainText}> Super Flash Sale</Text>
          <Text style={styles.mainText}> 50% Off</Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.boxes}>
            <Text style={styles.text}>08</Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: RFPercentage(3),
            }}
          >
            :
          </Text>
          <View style={styles.boxes}>
            <Text style={styles.text}>08</Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: RFPercentage(3),
            }}
          >
            :
          </Text>
          <View style={styles.boxes}>
            <Text style={styles.text}> 08</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
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
        uri:
          "https://www.ksat.com/resizer/2eb6bJ0rdP91IZL_0acJJRV_Slo=/1600x1067/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/4KIZC4ATCNCZXGT7JQ7NPIBXL4.jpg",
      }}
      style={styles.image}
    >
      <View style={{ backgroundColor: "rgba(0,0,0,0.4)", height: "100%" }}>
        <View style={{ marginTop: 30, marginLeft: 30 }}>
          <Text style={styles.mainText}> Super Flash Sale</Text>
          <Text style={styles.mainText}> 50% Off</Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.boxes}>
            <Text style={styles.text}>08</Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: RFPercentage(3),
            }}
          >
            :
          </Text>
          <View style={styles.boxes}>
            <Text style={styles.text}>08</Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: RFPercentage(3),
            }}
          >
            :
          </Text>
          <View style={styles.boxes}>
            <Text style={styles.text}> 08</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
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
          "https://specials-images.forbesimg.com/imageserve/5d6595c2673aa300083c3cd7/960x0.jpg?fit=scale",
      }}
      style={styles.image}
    >
      <View style={{ backgroundColor: "rgba(0,0,0,0.4)", height: "100%" }}>
        <View style={{ marginTop: 30, marginLeft: 30 }}>
          <Text style={styles.mainText}> Super Flash Sale</Text>
          <Text style={styles.mainText}> 50% Off</Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.boxes}>
            <Text style={styles.text}>08</Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: RFPercentage(3),
            }}
          >
            :
          </Text>
          <View style={styles.boxes}>
            <Text style={styles.text}>08</Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: RFPercentage(3),
            }}
          >
            :
          </Text>
          <View style={styles.boxes}>
            <Text style={styles.text}> 08</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
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
          sliderWidth={scale(330)}
          itemWidth={scale(330)}
          slideStyle={scale(330)}
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
              borderColor: "#888",
              borderWidth: 4,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  ww: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: -6,
    backgroundColor: "#7D96EE",
  },
  tabBar: {
    position: "absolute",
    top: Dimensions.get("window").width / 2.3,
    left: Dimensions.get("window").width / 2.8,
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
    height: 240,
    borderRadius: 10,
    // opacity: 0.9,
    borderRadius: 20,
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
  container: {
    width: "330@s",
    borderRadius: 20,
  },
});
