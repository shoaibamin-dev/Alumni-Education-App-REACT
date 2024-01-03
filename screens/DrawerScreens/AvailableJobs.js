import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import font from "../../shared/font";

const AvailableJobs = ({ navigation }) => {
  const [postJobModal, setPostJobModal] = useState(false);
  const [bannerImage, setBannerImage] = useState(false);

  const postJobToggle = () => {
    setPostJobModal(!postJobModal);
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
          Available Jobs
        </Text>
        <View style={{ width: "10%" }}>
          <AntDesign
            name="pluscircle"
            size={26}
            color="#fff"
            onPress={postJobToggle}
          />
        </View>
      </View>

      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          paddingBottom: 20,
        }}
      >
        <View style={styles.updateLayout}>
          <Image
            source={{
              uri:
                "https://static.vecteezy.com/system/resources/previews/000/180/696/original/vector-job-vacancy-banner.jpg",
            }}
            style={styles.image}
            resizeMode="stretch"
          />
          <View style={{ marginTop: 15 }}>
            <View style={styles.row}>
              <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                {" "}
                Title:{" "}
              </Text>
              <Text style={styles.text}> Social Media Marketing Required</Text>
            </View>
            <View style={[styles.row, { flexWrap: "wrap" }]}>
              <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                {" "}
                Description:{" "}
              </Text>
              <View>
                <Text style={styles.text}>
                  {" "}
                  We need a social media marketing expert{" "}
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.row}>
                <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                  {" "}
                  Role:{" "}
                </Text>
                <Text style={styles.text}> Social Media Marketer </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                  {" "}
                  Position:{" "}
                </Text>
                <Text style={styles.text}> Senior </Text>
              </View>
            </View>
            <View>
              <Text> Salary: </Text>
            </View>
            <View>
              <View style={[styles.row, { flexWrap: "wrap" }]}>
                <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                  {" "}
                  Company:{" "}
                </Text>
                <Text style={styles.text}> Arena Multimedia </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                  {" "}
                  Address:{" "}
                </Text>
                <Text style={styles.text}> 1-C North Karachi </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.saveBtn}>
              <Text
                style={[
                  styles.text,
                  { color: "#e62b05", fontSize: RFPercentage(2.6) },
                ]}
              >
                Apply to this job
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* post job modal */}
        <Modal animationType="slide" transparent={true} visible={postJobModal}>
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
                  {" "}
                  Post a job
                </Text>
                <AntDesign
                  name="closecircle"
                  size={24}
                  color="black"
                  onPress={postJobToggle}
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
                  <TouchableOpacity onPress={() => {}} style={styles.saveBtn}>
                    <Text
                      style={[
                        styles.text,
                        { color: "#e62b05", fontSize: RFPercentage(2.6) },
                      ]}
                    >
                      Add Banner Image
                    </Text>
                  </TouchableOpacity>
                  <View style={[styles.image, { marginBottom: 15 }]}>
                    <View>
                      <Image
                        source={{
                          uri:
                            "https://static.vecteezy.com/system/resources/previews/000/180/696/original/vector-job-vacancy-banner.jpg",
                        }}
                        style={styles.image}
                        resizeMode="stretch"
                      />
                    </View>
                  </View>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> Title: </Text>
                    <TextInput style={styles.input2} />
                  </View>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> Description: </Text>
                    <TextInput style={styles.input2} />
                  </View>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> Role: </Text>
                    <TextInput style={styles.input2} />
                  </View>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> Position: </Text>
                    <TextInput style={styles.input2} />
                  </View>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> Salary: </Text>
                    <TextInput style={styles.input2} />
                  </View>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> Company: </Text>
                    <TextInput style={styles.input2} />
                  </View>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> Address: </Text>
                    <TextInput style={styles.input2} />
                  </View>
                  <TouchableOpacity onPress={() => {}} style={styles.saveBtn}>
                    <Text
                      style={[
                        styles.text,
                        { color: "#e62b05", fontSize: RFPercentage(2.6) },
                      ]}
                    >
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <View
          style={{
            borderColor: "#ccc",
            borderWidth: 0.7,
            width: "100%",
            marginBottom: 10,
          }}
        />
        <View style={styles.updateLayout}>
          <Image
            source={{
              uri:
                "https://static.vecteezy.com/system/resources/previews/000/180/696/original/vector-job-vacancy-banner.jpg",
            }}
            style={styles.image}
            resizeMode="stretch"
          />
          <View style={{ marginTop: 15 }}>
            <View style={styles.row}>
              <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                {" "}
                Title:{" "}
              </Text>
              <Text style={styles.text}> Social Media Marketing Required</Text>
            </View>
            <View style={[styles.row, { flexWrap: "wrap" }]}>
              <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                {" "}
                Description:{" "}
              </Text>
              <View>
                <Text style={styles.text}>
                  {" "}
                  We need a social media marketing expert{" "}
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.row}>
                <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                  {" "}
                  Role:{" "}
                </Text>
                <Text style={styles.text}> Social Media Marketer </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                  {" "}
                  Position:{" "}
                </Text>
                <Text style={styles.text}> Senior </Text>
              </View>
            </View>
            <View>
              <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                {" "}
                Salary:{" "}
              </Text>
            </View>
            <View>
              <View style={[styles.row, { flexWrap: "wrap" }]}>
                <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                  {" "}
                  Company:{" "}
                </Text>
                <Text style={styles.text}> Arena Multimedia </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.text, { fontFamily: font.primaryBold }]}>
                  {" "}
                  Address:{" "}
                </Text>
                <Text style={styles.text}> 1-C North Karachi </Text>
              </View>
              <TouchableOpacity onPress={() => {}} style={styles.saveBtn}>
                <Text
                  style={[
                    styles.text,
                    { color: "#e62b05", fontSize: RFPercentage(2.6) },
                  ]}
                >
                  Apply to this job
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AvailableJobs;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").width / 2,
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
    color: "black",
    fontSize: RFPercentage(2.1),
    fontFamily: font.primary,
  },
  row: {
    flexDirection: "row",
  },
  updateLayout: {
    borderColor: "#888",
    borderWidth: 0.7,
    padding: 10,
    borderRadius: 8,
    width: "100%",
    marginVertical: 15,
  },
  text: {
    color: "black",
    fontSize: RFPercentage(2.2),
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
  input2: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 5,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
