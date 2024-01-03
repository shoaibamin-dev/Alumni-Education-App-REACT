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
  Platform,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";
import font from "../../../../shared/font";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Events({ navigation }) {
  const [eventToggle, setEventToggle] = useState(false);
  const [date, setDate] = useState(new Date(1616761680000));
  const [mode, setMode] = useState(
    Platform.OS === "android" ? "date" : "datetime"
  );
  const [show, setShow] = useState(false);

  const [endDate, setEndDate] = useState(new Date(1616761680000));
  const [endMode, setEndMode] = useState(
    Platform.OS === "android" ? "date" : "datetime"
  );
  const [endShow, setEndShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const onChangeEnd = (event, selectedEndDate) => {
    const currentEndDate = selectedEndDate || endDate;
    setEndShow(Platform.OS === "ios");
    setEndDate(currentEndDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showEndMode = (currentEndMode) => {
    setEndShow(true);
    setEndMode(currentEndMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showEndDatepicker = () => {
    showEndMode("date");
  };

  const eventToggleModal = () => {
    setEventToggle(!eventToggle);
  };

  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <View style={{ width: "9%" }} />
        <Text
          style={[styles.text, { fontSize: RFPercentage(3), color: "#fff" }]}
        >
          Events
        </Text>
        <AntDesign
          name="pluscircle"
          size={24}
          style={{ marginRight: 10 }}
          color="#fff"
          onPress={eventToggleModal}
        />
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "#fff",
          paddingBottom: 20,
          // flex: 1,
        }}
      >
        {/* event toggle modal */}
        <Modal animationType="slide" transparent={true} visible={eventToggle}>
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
                { height: Dimensions.get("window").height / 1.2 },
              ]}
            >
              <View style={styles.row}>
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
                  Add Event
                </Text>
                <AntDesign
                  name="closecircle"
                  size={24}
                  color="black"
                  onPress={eventToggleModal}
                />
              </View>
              <View
                style={{
                  borderColor: "#ccc",
                  borderWidth: 0.7,
                  width: "100%",
                  marginBottom: 5,
                }}
              />
              <ScrollView>
                <View style={{ padding: 7, paddingBottom: 80 }}>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> Title: </Text>
                    <TextInput style={styles.input2} />
                  </View>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> Location: </Text>
                    <TextInput style={styles.input2} />
                  </View>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> Venue: </Text>
                    <TextInput style={styles.input2} />
                  </View>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> Start Date: </Text>
                    <TextInput
                      style={[styles.input2, { backgroundColor: "#dee0e0" }]}
                      editable={false}
                    />
                    <View style={{ marginTop: 8, marginBottom: 5 }}>
                      <TouchableOpacity onPress={showDatepicker}>
                        <Text style={[styles.text, { color: "#e62b05" }]}>
                          {" "}
                          Select Start Date{" "}
                        </Text>
                      </TouchableOpacity>
                      <View>
                        {show && (
                          <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                  <View style={{ marginBottom: 7 }}>
                    <Text style={styles.text}> End Date: </Text>
                    <TextInput
                      style={[styles.input2, { backgroundColor: "#dee0e0" }]}
                      editable={false}
                    />
                    <View style={{ marginTop: 8, marginBottom: 5 }}>
                      <TouchableOpacity onPress={showEndDatepicker}>
                        <Text style={[styles.text, { color: "#e62b05" }]}>
                          {" "}
                          Select End Date{" "}
                        </Text>
                      </TouchableOpacity>
                      <View>
                        {endShow && (
                          <DateTimePicker
                            testID="dateTimePicker"
                            value={endDate}
                            mode={endMode}
                            is24Hour={true}
                            display="default"
                            onChange={onChangeEnd}
                          />
                        )}
                      </View>
                    </View>
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

        <View style={[styles.row, { marginBottom: 10, padding: 7 }]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
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
            <View style={{ width: Dimensions.get("window").width / 2 }}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: RFPercentage(2.8),
                    fontFamily: font.primaryBold,
                  },
                ]}
              >
                3D Modelling Training
              </Text>
              <View>
                <Text style={styles.text}>Location: Avari Tower, karachi</Text>
                <Text style={styles.text}>
                  Event from 03/04/2020 to 06/04/2020
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.saveBtn}>
          <View style={styles.interestedBtnView}>
            <Text
              style={[
                styles.text,
                { color: "#e62b05", fontSize: RFPercentage(2.6) },
              ]}
            >
              Interested
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            borderColor: "#ccc",
            borderWidth: 0.7,
            width: "100%",
            marginBottom: 15,
          }}
        />
        <View style={[styles.row, { marginBottom: 10, padding: 7 }]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
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
            <View style={{ width: Dimensions.get("window").width / 2 }}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: RFPercentage(2.8),
                    fontFamily: font.primaryBold,
                  },
                ]}
              >
                3D Modelling Training
              </Text>
              <View>
                <Text style={styles.text}>Location: Avari Tower, karachi</Text>
                <Text style={styles.text}>
                  Event from 03/04/2020 to 06/04/2020
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.saveBtn}>
          <View style={styles.interestedBtnView}>
            <Text
              style={[
                styles.text,
                { color: "#e62b05", fontSize: RFPercentage(2.6) },
              ]}
            >
              Interested
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            borderColor: "#ccc",
            borderWidth: 0.7,
            width: "100%",
            marginBottom: 15,
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 8.5,
    paddingTop: Dimensions.get("window").width / 18,
    backgroundColor: "#e62b05",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
    justifyContent: "space-between",
  },
  imageContainer: {
    borderColor: "#888",
    borderWidth: 1,
    width: Dimensions.get("window").width / 2.2,
    height: Dimensions.get("window").width / 2.8,
    overflow: "hidden",
    marginRight: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  saveBtn: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  interestedBtnView: {
    borderColor: "#e62b05",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
  input2: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 5,
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
  // saveBtn: {
  //   width: "100%",
  //   alignItems: "center",
  //   marginVertical: 10,
  // },
});
