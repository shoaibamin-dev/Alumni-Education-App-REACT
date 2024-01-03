import React, { useState } from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
  Touchable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Ionicons,
  FontAwesome,
  EvilIcons,
  Fontisto,
  Entypo,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScaledSheet } from "react-native-size-matters";

export default function Search() {
  const [touch, setTouch] = useState(false);
  const [visible, setVisible] = useState("none");

  function onTouchStart() {
    setTouch(true);
    setVisible("flex");
  }

  function onTouchCancel() {
    Keyboard.dismiss();
    setTouch(false);
    setVisible("none");
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.bg}>
        <View style={styles.title}>
          <Text style={styles.msgs}>Search</Text>
        </View>

        <View style={styles.main}>
          <View style={styles.blueTwo}>
            <View style={styles.inner}>
              <Entypo name="magnifying-glass" size={30} color="blue" />
              <TextInput
                placeholder="What are you looking for?"
                onTouchStart={onTouchStart}
                style={styles.ti}
              />

              <TouchableOpacity
                style={{ display: visible }}
                onPress={onTouchCancel}
              >
                <Ionicons
                  name="close"
                  size={30}
                  color="grey"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <View style={{ backgroundColor: "white" }}>
            <View style={styles.horizontal}>
              <ScrollView horizontal={true}>
                <Text style={styles.cat}>Summer</Text>
                <Text style={styles.cat}>T-Shirts</Text>
                <Text style={styles.cat}>Shirts</Text>
                <Text style={styles.cat}>Pants</Text>
                <Text style={styles.cat}>Jeans</Text>
              </ScrollView>
            </View>
          </View>

          {touch === false ? (
            <View>
              <View style={styles.search}>
                <View style={styles.line}>
                  <Ionicons name="filter" size={25} color="black" />
                  <Text style={styles.fil}>Filters</Text>
                </View>
                <View style={styles.lineTwo}>
                  <FontAwesome name="arrows-v" size={25} color="black" />
                  <Text style={styles.fil}>Price:lowest to high</Text>
                </View>
                <View>
                  <FontAwesome name="list" size={20} color="black" />
                </View>
              </View>

              <View style={styles.align}>
                <View style={styles.cover}>
                  <Image
                    source={require("../assets/Photos/mensbluebomber.jpg")}
                    resizeMode="cover"
                    style={styles.img}
                  />
                  <View
                    style={{
                      marginTop: Dimensions.get("window").width / 40,
                      paddingLeft: 10,
                    }}
                  >
                    <View style={styles.first}>
                      <View>
                        <Text style={styles.lime}>LIME</Text>
                        <Text style={styles.shirt}>Shirt</Text>
                      </View>
                      <EvilIcons name="close" size={30} color="black" />
                    </View>
                    <View style={styles.second}>
                      <View style={styles.row}>
                        <Text style={styles.color}>Color:</Text>
                        <Text style={styles.blue}>Blue</Text>
                      </View>
                      <View style={styles.row}>
                        <Text style={styles.size}>Size:</Text>
                        <Text style={styles.large}>L</Text>
                      </View>
                    </View>
                    <View style={styles.price}>
                      <Text style={styles.value}>$32</Text>
                      <Image
                        source={require("../assets/Photos/5stars.png")}
                        resizeMode="contain"
                        style={styles.stars}
                      />
                      <Text>(10)</Text>
                      <Fontisto
                        name="shopping-bag"
                        size={20}
                        color="white"
                        style={styles.sb}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.coverTwo}>
                  <ImageBackground
                    source={require("../assets/Photos/wredb.jpg")}
                    resizeMode="cover"
                    style={styles.img}
                  >
                    <View style={styles.new}>
                      <Text style={styles.newTwo}>NEW</Text>
                    </View>
                  </ImageBackground>
                  <View
                    style={{
                      marginTop: Dimensions.get("window").width / 40,
                      paddingLeft: 10,
                    }}
                  >
                    <View style={styles.first}>
                      <View>
                        <Text style={styles.lime}>Mango</Text>
                        <Text style={styles.shirt}>Longsleeve Violeta</Text>
                      </View>
                      <EvilIcons name="close" size={30} color="black" />
                    </View>
                    <View style={styles.second}>
                      <View style={styles.row}>
                        <Text style={styles.color}>Color:</Text>
                        <Text style={styles.blue}>Orange</Text>
                      </View>
                      <View style={styles.row}>
                        <Text style={styles.size}>Size:</Text>
                        <Text style={styles.large}>S</Text>
                      </View>
                    </View>
                    <View style={styles.price}>
                      <Text style={styles.value}>$46</Text>
                      <Image
                        source={require("../assets/Photos/estars.png")}
                        resizeMode="contain"
                        style={styles.stars}
                      />
                      <Text>(0)</Text>
                      <Fontisto
                        name="shopping-bag"
                        size={20}
                        color="white"
                        style={styles.sb}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.coverThree}>
                  <Image
                    source={require("../assets/Photos/mensjacket.jpg")}
                    resizeMode="cover"
                    style={styles.img}
                  />
                  <View
                    style={{
                      marginTop: Dimensions.get("window").width / 40,
                      paddingLeft: 10,
                    }}
                  >
                    <View style={styles.first}>
                      <View>
                        <Text style={styles.lime}>LIME</Text>
                        <Text style={styles.shirt}>Shirt</Text>
                      </View>
                      <EvilIcons name="close" size={30} color="black" />
                    </View>
                    <View style={styles.second}>
                      <View style={styles.row}>
                        <Text style={styles.color}>Color:</Text>
                        <Text style={styles.blue}>Blue</Text>
                      </View>
                      <View style={styles.row}>
                        <Text style={styles.size}>Size:</Text>
                        <Text style={styles.large}>L</Text>
                      </View>
                    </View>
                    <View style={styles.price}>
                      <Text style={styles.value}>$32</Text>
                      <Image
                        source={require("../assets/Photos/5stars.png")}
                        resizeMode="contain"
                        style={styles.stars}
                      />
                      <Text>(10)</Text>
                      <Fontisto
                        name="shopping-bag"
                        size={20}
                        color="white"
                        style={styles.sb}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.coverTwo}>
                  <ImageBackground
                    source={require("../assets/Photos/wwts.jpg")}
                    resizeMode="cover"
                    style={styles.img}
                  >
                    <View style={styles.new}>
                      <Text style={styles.newThree}>-30%</Text>
                    </View>
                  </ImageBackground>
                  <View
                    style={{
                      marginTop: Dimensions.get("window").width / 40,
                      paddingLeft: 10,
                    }}
                  >
                    <View style={styles.first}>
                      <View>
                        <Text style={styles.lime}>&Berries</Text>
                        <Text style={styles.shirt}>T-Shirt</Text>
                      </View>
                      <EvilIcons name="close" size={30} color="black" />
                    </View>
                    <View style={styles.second}>
                      <View style={styles.row}>
                        <Text style={styles.color}>Color:</Text>
                        <Text style={styles.blue}>Black</Text>
                      </View>
                      <View style={styles.row}>
                        <Text style={styles.size}>Size:</Text>
                        <Text style={styles.large}>S</Text>
                      </View>
                    </View>
                    <View style={styles.price}>
                      <Text style={styles.value}>$39</Text>
                      <Image
                        source={require("../assets/Photos/estars.png")}
                        resizeMode="contain"
                        style={styles.stars}
                      />
                      <Text>(0)</Text>
                      <Fontisto
                        name="shopping-bag"
                        size={20}
                        color="white"
                        style={styles.sb}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <View style={styles.bc}>
                <View style={styles.head}>
                  <Text style={styles.lv}>Last Viewed</Text>
                </View>

                <View style={styles.colorTwo}>
                  <View style={styles.space}>
                    <Image
                      source={require("../assets/Photos/speak.png")}
                      style={styles.speaker}
                    />
                    <View style={styles.rowTwo}>
                      <Text style={styles.font}>Google Home mini</Text>
                      <Text style={styles.blue}>USD 49</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.colorTwo}>
                  <View style={styles.space}>
                    <Image
                      source={require("../assets/Photos/mpc.png")}
                      style={styles.speaker}
                    />
                    <View style={styles.rowTwo}>
                      <Text style={styles.font}>USB C Charger</Text>
                      <Text style={styles.blue}>USD 11</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.ls}>
                <Text style={styles.lst}>Lastest Search</Text>
                <Text style={styles.cah}>Clean all history</Text>
              </View>

              <View style={styles.lsTwo}>
                <Text style={styles.cahTwo}>Smart Speaker</Text>
                <Ionicons name="close" size={20} color="grey" />
              </View>

              <View style={styles.lsTwo}>
                <Text style={styles.cahTwo}>USB C Charger</Text>
                <Ionicons name="close" size={20} color="grey" />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = ScaledSheet.create({
  bg: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    display: "flex",
    flex: 1,
  },
  title: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 10,
    backgroundColor: "#5037a3",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  msgs: {
    color: "white",
    fontWeight: "bold",
    fontSize: RFPercentage(5),
  },
  horizontal: {
    flexDirection: "row",
    marginVertical: Dimensions.get("window").width / 50,
    backgroundColor: "white",
  },
  cat: {
    color: "white",
    backgroundColor: "black",
    paddingVertical: Dimensions.get("window").width / 50,
    borderRadius: 30,
    marginHorizontal: Dimensions.get("window").width / 60,
    paddingHorizontal: Dimensions.get("window").width / 15,
    fontSize: RFPercentage(2),
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: Dimensions.get("window").width / 30,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width / 6,
    alignItems: "center",
  },
  lineTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width / 3,
    alignItems: "center",
  },
  fil: {
    fontSize: RFPercentage(2),
  },
  cover: {
    flexDirection: "row",
    backgroundColor: "white",
    width: Dimensions.get("screen").width / 1.05,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: Dimensions.get("window").width / 50,
    marginTop: Dimensions.get("window").width / 30,
  },
  img: {
    width: Dimensions.get("screen").width / 3,
    height: Dimensions.get("screen").width / 2.7,
  },
  align: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    alignItems: "center",
  },
  first: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width / 1.8,
  },
  lime: {
    color: "grey",
    fontSize: RFPercentage(2),
  },
  shirt: {
    fontSize: RFPercentage(2.3),
    fontWeight: "bold",
  },
  second: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width / 3,
  },
  row: {
    flexDirection: "row",
  },
  color: {
    color: "grey",
    fontSize: RFPercentage(1.9),
  },
  size: {
    color: "grey",
    fontSize: RFPercentage(1.9),
  },
  blue: {
    fontSize: RFPercentage(1.9),
  },
  large: {
    fontSize: RFPercentage(1.9),
  },
  stars: {
    height: Dimensions.get("window").height / 45,
    width: Dimensions.get("window").width / 5,
  },
  price: {
    flexDirection: "row",
    marginTop: Dimensions.get("window").width / 18,
    justifyContent: "space-around",
  },
  value: {
    fontSize: RFPercentage(2.2),
    fontWeight: "bold",
  },
  sb: {
    backgroundColor: "red",
    borderRadius: Dimensions.get("window").width / 10,
    paddingVertical: Dimensions.get("window").width / 35,
    paddingHorizontal: Dimensions.get("window").width / 30,
    top: Dimensions.get("window").width / 15,
    left: Dimensions.get("window").width / 30,
  },
  coverTwo: {
    flexDirection: "row",
    backgroundColor: "white",
    width: Dimensions.get("screen").width / 1.05,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: Dimensions.get("window").width / 35,
    marginTop: Dimensions.get("window").width / 13,
  },
  new: {
    alignItems: "flex-start",
    margin: Dimensions.get("window").width / 70,
  },
  newTwo: {
    color: "white",
    backgroundColor: "black",
    borderRadius: Dimensions.get("window").width / 10,
    padding: Dimensions.get("window").width / 90,
  },
  coverThree: {
    flexDirection: "row",
    backgroundColor: "white",
    width: Dimensions.get("screen").width / 1.05,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    marginTop: Dimensions.get("window").width / 14,
    opacity: 0.5,
  },
  newThree: {
    color: "white",
    backgroundColor: "red",
    borderRadius: Dimensions.get("window").width / 10,
    padding: Dimensions.get("window").width / 90,
  },
  ti: {
    // backgroundColor: 'lightblue',
    // width: Dimensions.get('window').width / 1.3,
    // height: Dimensions.get('window').height / 15,
    // borderRadius: 20,
    // paddingLeft: 50,
  },
  main: {
    width: Dimensions.get("screen").width,
    // alignItems: 'flex-start',
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 10,
  },
  bc: {
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "space-around",
    height: "300@vs",
  },
  colorTwo: {
    backgroundColor: "white",
    width: "300@s",
    height: "100@s",
    borderRadius: "10@s",
    elevation: 24,
  },
  lv: {
    fontWeight: "bold",
    fontSize: "20@s",
  },
  head: {
    width: "300@s",
  },
  font: {
    fontWeight: "bold",
    fontSize: "15@s",
  },
  blue: {
    color: "blue",
    fontWeight: "bold",
  },
  speaker: {
    width: "100@s",
    height: "100@vs",
  },
  ls: {
    flexDirection: "row",
    width: "290@s",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: "10@vs",
  },
  lst: {
    fontWeight: "bold",
    fontSize: "15@s",
  },
  cah: {
    color: "grey",
    fontSize: "13@s",
  },
  lsTwo: {
    flexDirection: "row",
    width: "290@s",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: "20@vs",
  },
  cahTwo: {
    color: "grey",
    fontSize: "13@s",
  },
  space: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "300@s",
  },
  blueTwo: {
    backgroundColor: "lightblue",
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 15,
    borderRadius: 20,
    // alignItems:'center',
    justifyContent: "center",
    // flexDirection:'row',
    // paddingLeft:10
  },
  inner: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width / 1.1,
    alignItems: "center",
    // position:'absolute',
  },
  icon: {
    // position:'relative',
    // left:30,
    // top:50
  },
});
