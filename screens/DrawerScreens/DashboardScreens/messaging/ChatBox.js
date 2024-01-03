import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { moderateScale } from "react-native-size-matters";
import { RFPercentage } from "react-native-responsive-fontsize";
import font from "../../../../shared/font";

export default function ChatBox({ navigation }) {
  return (
    <View style={styles.bg}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <Ionicons name="chevron-back" size={20} color="white" />
            <Text style={styles.msgs}>Back</Text> */}
            <AntDesign
              name="back"
              size={30}
              color="#fff"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.item, styles.itemOut]}>
          <View style={[styles.balloon, { backgroundColor: "#e62b05" }]}>
            <Text style={styles.text}>Hello Good Afternoon</Text>
            <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
              <Svg
                style={styles.arrowRight}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.484 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5"
              >
                <Path
                  d="M476.42,76.06c0,4.64-3.5,8.46-8.01,8.99c-0.35,0.04-0.69,0.06-1.05,0.06c-0.38,0-0.75-0.03-1.12-0.08v0.08
                            H14.41c-2.11,0-3.82-1.71-3.82-3.82V32.76c0-2.11,1.71-3.82,3.82-3.82h438.65c2.11,0,3.82,1.71,3.82,3.82v29.02l13.25,5.66
                            l1.56,0.66c1.13,0.62,2.11,1.47,2.88,2.49C475.72,72.11,476.42,74,476.42,76.06z"
                  fill="#e62b05"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>

        <View style={[styles.item, styles.itemIn]}>
          <View style={[styles.balloon, { backgroundColor: "#333333" }]}>
            <Text
              style={styles.text}
            >{`Yeah Good Afternoon. How was\nyour day?`}</Text>
            <View style={[styles.arrowContainer, styles.arrowLeftContainer]}>
              <Svg
                style={styles.arrowLeft}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.484 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5"
              >
                <Path
                  d="M476.42,76.06c0,4.64-3.5,8.46-8.01,8.99c-0.35,0.04-0.69,0.06-1.05,0.06c-0.38,0-0.75-0.03-1.12-0.08v0.08
                            H14.41c-2.11,0-3.82-1.71-3.82-3.82V32.76c0-2.11,1.71-3.82,3.82-3.82h438.65c2.11,0,3.82,1.71,3.82,3.82v29.02l13.25,5.66
                            l1.56,0.66c1.13,0.62,2.11,1.47,2.88,2.49C475.72,72.11,476.42,74,476.42,76.06z"
                  fill="#333333"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>

        <View style={[styles.item, styles.itemOut]}>
          <View style={[styles.balloon, { backgroundColor: "#e62b05" }]}>
            <Text
              style={styles.text}
            >{`Fine thank you. How may I\nbe of help?`}</Text>
            <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
              <Svg
                style={styles.arrowRight}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.484 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5"
              >
                <Path
                  d="M476.42,76.06c0,4.64-3.5,8.46-8.01,8.99c-0.35,0.04-0.69,0.06-1.05,0.06c-0.38,0-0.75-0.03-1.12-0.08v0.08
                            H14.41c-2.11,0-3.82-1.71-3.82-3.82V32.76c0-2.11,1.71-3.82,3.82-3.82h438.65c2.11,0,3.82,1.71,3.82,3.82v29.02l13.25,5.66
                            l1.56,0.66c1.13,0.62,2.11,1.47,2.88,2.49C475.72,72.11,476.42,74,476.42,76.06z"
                  fill="#e62b05"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>

        <View style={[styles.item, styles.itemIn]}>
          <View style={[styles.balloon, { backgroundColor: "#333333" }]}>
            <Text
              style={styles.text}
            >{`I ve got an Amazon Gift Card I want\nto trade for cash. `}</Text>
            <View style={[styles.arrowContainer, styles.arrowLeftContainer]}>
              <Svg
                style={styles.arrowLeft}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.484 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5"
              >
                <Path
                  d="M476.42,76.06c0,4.64-3.5,8.46-8.01,8.99c-0.35,0.04-0.69,0.06-1.05,0.06c-0.38,0-0.75-0.03-1.12-0.08v0.08
                            H14.41c-2.11,0-3.82-1.71-3.82-3.82V32.76c0-2.11,1.71-3.82,3.82-3.82h438.65c2.11,0,3.82,1.71,3.82,3.82v29.02l13.25,5.66
                            l1.56,0.66c1.13,0.62,2.11,1.47,2.88,2.49C475.72,72.11,476.42,74,476.42,76.06z"
                  fill="#333333"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>

        <View style={[styles.item, styles.itemOut]}>
          <View style={[styles.balloon, { backgroundColor: "#e62b05" }]}>
            <Text
              style={styles.text}
            >{`O please take the picture of\nyour card front and back view\nso we can work the rest of the\nprocess to get you paid asap.`}</Text>
            <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
              <Svg
                style={styles.arrowRight}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.484 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5"
              >
                <Path
                  d="M476.42,76.06c0,4.64-3.5,8.46-8.01,8.99c-0.35,0.04-0.69,0.06-1.05,0.06c-0.38,0-0.75-0.03-1.12-0.08v0.08
                            H14.41c-2.11,0-3.82-1.71-3.82-3.82V32.76c0-2.11,1.71-3.82,3.82-3.82h438.65c2.11,0,3.82,1.71,3.82,3.82v29.02l13.25,5.66
                            l1.56,0.66c1.13,0.62,2.11,1.47,2.88,2.49C475.72,72.11,476.42,74,476.42,76.06z"
                  fill="#e62b05"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>

        <View style={[styles.item, styles.itemIn]}>
          <View style={[styles.balloon, { backgroundColor: "#e62b05" }]}>
            <Text style={styles.text}>Ok I'll get back to you</Text>
            <View style={[styles.arrowContainer, styles.arrowLeftContainer]}>
              <Svg
                style={styles.arrowLeft}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.484 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5"
              >
                <Path
                  d="M476.42,76.06c0,4.64-3.5,8.46-8.01,8.99c-0.35,0.04-0.69,0.06-1.05,0.06c-0.38,0-0.75-0.03-1.12-0.08v0.08
                            H14.41c-2.11,0-3.82-1.71-3.82-3.82V32.76c0-2.11,1.71-3.82,3.82-3.82h438.65c2.11,0,3.82,1.71,3.82,3.82v29.02l13.25,5.66
                            l1.56,0.66c1.13,0.62,2.11,1.47,2.88,2.49C475.72,72.11,476.42,74,476.42,76.06z"
                  fill="#e62b05"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView>
        <View
          style={{
            alignItems: "center",
            width: Dimensions.get("screen").width / 0.83,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Type something here"
              style={{
                color: "grey",
                width: Dimensions.get("window").width / 1,
                height: Dimensions.get("window").height / 16,
                borderRadius: 10,
                backgroundColor: "#fff",
                paddingLeft: 30,
                fontSize: RFPercentage(2.3),
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#e62b05",
                borderRadius: 10,
                right: 85,
                height: Dimensions.get("window").height / 20,
                width: Dimensions.get("window").width / 6,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Text style={styles.send}>Send</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 8.5,
    backgroundColor: "#e62b05",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingTop: Dimensions.get("window").width / 18,
    paddingLeft: Dimensions.get("window").width / 30,
  },
  msgs: {
    color: "white",
    fontWeight: "bold",
    fontSize: RFPercentage(3),
    fontFamily: font.primary,
  },
  bg: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: "row",
  },
  itemIn: {
    marginLeft: 20,
  },
  itemOut: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
  balloon: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 8,
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1,
  },
  arrowLeftContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  arrowRightContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  arrowLeft: {
    left: moderateScale(-6, 0.5),
  },

  arrowRight: {
    right: moderateScale(-6, 0.5),
  },
  amazon: {
    height: 200,
    width: 200,
  },
  send: {
    color: "white",
    fontSize: RFPercentage(2.5),
    fontFamily: font.primary,
  },
  clip: {
    right: 95,
    marginTop: 5,
  },
  text: {
    fontFamily: font.primary,
    paddingTop: 5,
    color: "white",
    fontSize: RFPercentage(2.4),
  },
});
