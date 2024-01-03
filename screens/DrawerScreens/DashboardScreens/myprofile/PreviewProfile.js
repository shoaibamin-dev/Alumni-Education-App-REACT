import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import font from "../../../../shared/font";

export default function MyProfile({ navigation }) {
  const [imagePreviewModal, setImagePreviewModal] = useState(false);

  const toggleModal = () => {
    setImagePreviewModal(!imagePreviewModal);
  };

  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <AntDesign
          name="back"
          size={30}
          color="#fff"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={[styles.text, { color: "#fff", fontSize: RFPercentage(3.2) }]}
        >
          Ali Raza
        </Text>
        <View style={{ width: "10%" }} />
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#e62b05",
              width: "100%",
              padding: 10,
            }}
          >
            <TouchableOpacity onPress={toggleModal}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      "http://www.arena-pakistan.com/uploads/events/IMG-20181228-WA0021_-_Copy.jpg",
                  }}
                  resizeMode="cover"
                />
              </View>
            </TouchableOpacity>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={imagePreviewModal}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <View style={styles.imagePreview}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{
                    uri:
                      "http://www.arena-pakistan.com/uploads/events/IMG-20181228-WA0021_-_Copy.jpg",
                  }}
                  resizeMode="cover"
                />
                <AntDesign
                  name="close"
                  size={24}
                  color="#e6df05"
                  style={styles.close}
                  onPress={toggleModal}
                />
              </View>
            </View>
          </Modal>

          <View style={styles.updateLayout}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.text,
                  { fontSize: RFPercentage(3), fontFamily: font.primaryBold },
                ]}
              >
                {" "}
                About
              </Text>
            </View>
            <View
              style={{
                borderColor: "#ccc",
                borderWidth: 0.7,
                width: "100%",
                marginBottom: 15,
              }}
            />
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s..{" "}
            </Text>
          </View>

          <View
            style={{
              borderColor: "#ccc",
              borderWidth: 0.7,
              width: "100%",
              marginBottom: 15,
            }}
          />

          <View style={styles.updateLayout}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.text,
                  { fontSize: RFPercentage(3), fontFamily: font.primaryBold },
                ]}
              >
                {" "}
                Interests
              </Text>
            </View>
            <View
              style={{
                borderColor: "#ccc",
                borderWidth: 0.7,
                width: "100%",
                marginBottom: 15,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <View style={styles.interestBox}>
                <Text
                  style={[
                    styles.text,
                    { color: "#fff", fontSize: RFPercentage(1.8) },
                  ]}
                >
                  {" "}
                  Book Reading{" "}
                </Text>
              </View>
              <View style={styles.interestBox}>
                <Text
                  style={[
                    styles.text,
                    { color: "#fff", fontSize: RFPercentage(1.8) },
                  ]}
                >
                  {" "}
                  Painting{" "}
                </Text>
              </View>
              <View style={styles.interestBox}>
                <Text
                  style={[
                    styles.text,
                    { color: "#fff", fontSize: RFPercentage(1.8) },
                  ]}
                >
                  {" "}
                  painting{" "}
                </Text>
              </View>
              <View style={styles.interestBox}>
                <Text
                  style={[
                    styles.text,
                    { color: "#fff", fontSize: RFPercentage(1.8) },
                  ]}
                >
                  {" "}
                  Book Reading{" "}
                </Text>
              </View>
              <View style={styles.interestBox}>
                <Text
                  style={[
                    styles.text,
                    { color: "#fff", fontSize: RFPercentage(1.8) },
                  ]}
                >
                  {" "}
                  Book Reading{" "}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              borderColor: "#ccc",
              borderWidth: 0.7,
              width: "100%",
              marginBottom: 15,
            }}
          />

          <View style={styles.updateLayout}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.text,
                  { fontSize: RFPercentage(3), fontFamily: font.primaryBold },
                ]}
              >
                {" "}
                Education
              </Text>
            </View>
            <View
              style={{
                borderColor: "#ccc",
                borderWidth: 0.7,
                width: "100%",
                marginBottom: 10,
              }}
            />
            <View style={styles.card}>
              <View
                style={[
                  styles.row,
                  { justifyContent: "flex-start", marginBottom: 5 },
                ]}
              >
                <Text style={styles.text}> Degree: </Text>
                <Text style={styles.text}> Diploma in 3D Graphics </Text>
              </View>
              <View
                style={[
                  styles.row,
                  { justifyContent: "flex-start", marginBottom: 5 },
                ]}
              >
                <Text style={styles.text}> Institution: </Text>
                <Text style={styles.text}> Arena Multimedia </Text>
              </View>
              <View
                style={[
                  styles.row,
                  { justifyContent: "flex-start", marginBottom: 5 },
                ]}
              >
                <Text style={styles.text}> Start Year: </Text>
                <Text style={styles.text}> 2017 </Text>
              </View>

              <View
                style={[
                  styles.row,
                  { justifyContent: "flex-start", marginBottom: 5 },
                ]}
              >
                <Text style={styles.text}> End Year: </Text>
                <Text style={styles.text}> 2019 </Text>
              </View>
            </View>
          </View>

          <View style={styles.updateLayout}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.text,
                  { fontSize: RFPercentage(3), fontFamily: font.primaryBold },
                ]}
              >
                {" "}
                Employment
              </Text>
            </View>
            <View
              style={{
                borderColor: "#ccc",
                borderWidth: 0.7,
                width: "100%",
                marginBottom: 10,
              }}
            />
            <View style={styles.card}>
              <View
                style={[
                  styles.row,
                  { justifyContent: "flex-start", marginBottom: 5 },
                ]}
              >
                <Text style={styles.text}> Position: </Text>
                <Text style={styles.text}> 3D Designer </Text>
              </View>
              <View
                style={[
                  styles.row,
                  { justifyContent: "flex-start", marginBottom: 5 },
                ]}
              >
                <Text style={styles.text}> Company: </Text>
                <Text style={styles.text}> Arena Multimedia </Text>
              </View>
              <View
                style={[
                  styles.row,
                  { justifyContent: "flex-start", marginBottom: 5 },
                ]}
              >
                <Text style={styles.text}> Start Year: </Text>
                <Text style={styles.text}> 2019 </Text>
              </View>

              <View
                style={[
                  styles.row,
                  { justifyContent: "flex-start", marginBottom: 5 },
                ]}
              >
                <Text style={styles.text}> End Year: </Text>
                <Text style={styles.text}> 2020 </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
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
  imageContainer: {
    borderColor: "#fff",
    borderWidth: 1,
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  interestBox: {
    padding: 4,
    backgroundColor: "#e62b05",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    marginBottom: 10,
    flexDirection: "row",
  },
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 7,
    marginVertical: 5,
    // flexDirection: "row",
    // justifyContent: "space-between",
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
  input: {
    width: "100%",
    height: Dimensions.get("window").width / 3.5,
    borderColor: "#ccc",
    borderWidth: 1,
    textAlignVertical: "top",
    padding: 10,
  },
  input2: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 5,
  },
  saveBtn: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  imagePreview: {
    padding: 10,
    width: "100%",
    height: Dimensions.get("window").width / 1.4,
  },
  close: {
    position: "absolute",
    top: 25,
    left: Dimensions.get("window").width / 1.2,
  },
});
