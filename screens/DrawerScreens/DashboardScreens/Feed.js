import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import font from "../../../shared/font";
import Slider from "../../../components/Slider";

export default function Feed({ navigation }) {
  const [shareUpdate, setShareUpdate] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  const shareToggleModal = () => {
    setShareModal(!shareModal);
  };

  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="microsoft-xbox-controller-menu"
          size={30}
          color="#fff"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.openDrawer()}
        />
        <Text
          style={[styles.text, { color: "#fff", fontSize: RFPercentage(3.2) }]}
        >
          Feed
        </Text>
        <View style={{ width: "10%" }} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "#fff",
          paddingBottom: 20,
        }}
      >
        <View style={{ width: 300 }}>
          <Slider />
        </View>

        <Modal animationType="slide" transparent={true} visible={shareModal}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={[
                styles.modalView,
                { height: Dimensions.get("window").height / 1.4 },
              ]}
            >
              <View style={styles.row2}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: RFPercentage(3),
                      fontFamily: font.primaryBold,
                    },
                  ]}
                >
                  My Connections
                </Text>
                <AntDesign
                  name="closecircle"
                  size={24}
                  color="black"
                  onPress={shareToggleModal}
                />
              </View>
              <View
                style={{
                  borderColor: "#ccc",
                  borderWidth: 0.7,
                  width: "100%",
                  marginBottom: 10,
                }}
              />
              <ScrollView>
                <View style={{ padding: 7, paddingBottom: 80 }}>
                  <View>
                    <View
                      style={[
                        styles.updateLayout,
                        { marginTop: 0, marginBottom: 20 },
                      ]}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <TextInput
                          placeholder="Search Connection"
                          placeholderTextColor="#ccc"
                          style={styles.input}
                        />
                        <TouchableOpacity onPress={() => {}}>
                          <Ionicons name="search" size={24} color="black" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.image}
                        source={{
                          uri:
                            "https://i.pinimg.com/originals/df/a1/de/dfa1de6a46586afaa0439707f78c80ec.jpg",
                        }}
                        resizeMode="contain"
                      />
                    </View>
                    <View>
                      <Text
                        style={[styles.text, { fontSize: RFPercentage(3) }]}
                      >
                        Ali Raza
                      </Text>
                      <Text style={styles.text}>Product Engineer </Text>
                    </View>

                    <View style={{ width: "35%", alignItems: "flex-end" }}>
                      {shareUpdate ? (
                        <View>
                          <Text
                            style={[
                              styles.text,
                              { color: "#e62b05", fontSize: RFPercentage(2.5) },
                            ]}
                          >
                            Shared
                          </Text>
                        </View>
                      ) : (
                        <TouchableOpacity onPress={() => setShareUpdate(true)}>
                          <Text
                            style={[
                              styles.text,
                              {
                                color: "#e62b05",
                                fontSize: RFPercentage(2.5),
                              },
                            ]}
                          >
                            Share
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                  <View
                    style={{
                      borderColor: "#ccc",
                      borderWidth: 0.7,
                      width: "100%",
                      marginTop: 10,
                    }}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <View style={{ paddingHorizontal: 15 }}>
          <View style={styles.updateLayout}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="Anything to share?"
                placeholderTextColor="#ccc"
                style={styles.input}
              />
              <TouchableOpacity onPress={() => {}}>
                <Ionicons name="image-sharp" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <View style={styles.updateLayout}>
            <View style={styles.row}>
              <View
                style={{
                  borderColor: "#888",
                  borderWidth: 1,
                  width: 50,
                  height: 50,
                  borderRadius: 60,
                  overflow: "hidden",
                  marginRight: 8,
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      "https://i.pinimg.com/originals/df/a1/de/dfa1de6a46586afaa0439707f78c80ec.jpg",
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}> Waleed Sheikh </Text>
            </View>
            <View style={styles.updateBody}>
              <Text style={[styles.text, { fontSize: RFPercentage(2.1) }]}>
                lorem epsom lorem epsom lorem epsom lorem epsom{" "}
              </Text>
            </View>
            <TouchableOpacity onPress={shareToggleModal}>
              <View style={styles.shareUpdate}>
                <Text
                  style={[
                    styles.text,
                    { color: "red", fontSize: RFPercentage(2.5) },
                  ]}
                >
                  {" "}
                  Share Update
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <View style={styles.updateLayout}>
            <View style={styles.row}>
              <View
                style={{
                  borderColor: "#888",
                  borderWidth: 1,
                  width: 50,
                  height: 50,
                  borderRadius: 60,
                  overflow: "hidden",
                  marginRight: 8,
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      "https://i.pinimg.com/originals/df/a1/de/dfa1de6a46586afaa0439707f78c80ec.jpg",
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.text}> Waleed Sheikh </Text>
            </View>
            <View style={styles.updateBody}>
              <Text style={[styles.text, { fontSize: RFPercentage(2.1) }]}>
                lorem epsom lorem epsom lorem epsom lorem epsom{" "}
              </Text>
            </View>
            <TouchableOpacity onPress={shareToggleModal}>
              <View style={styles.shareUpdate}>
                <Text
                  style={[
                    styles.text,
                    { color: "red", fontSize: RFPercentage(2.5) },
                  ]}
                >
                  {" "}
                  Share Update
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    // height: Dimensions.get("screen").height,
    // width: Dimensions.get("screen").width,
    flex: 1,
    // alignItems: "center",
    // backgroundColor: "white",
  },
  header: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 8.5,
    paddingTop: Dimensions.get("window").width / 18,
    flexDirection: "row",
    backgroundColor: "#e62b05",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },
  text: {
    fontSize: RFPercentage(2.5),
    fontFamily: font.primary,
  },
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "#fff",
    width: 370,
    height: 205,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  updateLayout: {
    borderColor: "#888",
    borderWidth: 0.7,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  shareUpdate: {
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    borderBottomColor: "#ccc",
    width: "85%",
    borderBottomWidth: 1,
    fontSize: RFPercentage(2.1),
    fontFamily: font.primary,
  },
  modalView: {
    width: "95%",
    height: Dimensions.get("window").width / 1.7,
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  saveBtn: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    borderColor: "#888",
    borderWidth: 1,
    width: 60,
    height: 60,
    borderRadius: 60,
    overflow: "hidden",
    marginRight: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
});
