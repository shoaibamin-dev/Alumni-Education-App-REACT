import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import font from "../../shared/font";
import { Text, Picker } from "native-base";

export default function Invitations({ navigation }) {
  const [invitationAcceptedState, setInvitationAcceptedState] = useState(false);
  const [invitationDeclinedState, setInvitationDeclinedState] = useState(false);

  const invitationAccepted = () => {
    setInvitationAcceptedState(true);
  };

  const invitationDeclined = () => {
    setInvitationDeclinedState(true);
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
          Invitations
        </Text>
        <View style={{ width: "10%" }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingBottom: 20,
          flex: 1,
        }}
      >
        {/* <View>
          {filterShown ? (
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.text}>Search By </Text>
              <View
                style={{
                  borderColor: "#ccc",
                  borderWidth: 1,
                  borderRadius: 6,
                  marginTop: 5,
                }}
              >
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  selectedValue={selected}
                  onValueChange={onSelectionChange.bind(this)}
                >
                  <Picker.Item label="Name" value="key0" />
                  <Picker.Item label="Location" value="key1" />
                  <Picker.Item label="Company" value="key2" />
                </Picker>
              </View>
              <View style={styles.filter}>
              <Text> Location</Text>
            </View>
            </View>
          ) : (
            <View />
          )}
        </View> */}

        {/* <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Search Alumni"
            placeholderTextColor="#ccc"
          />
          <Ionicons
            name="filter"
            size={24}
            color="black"
            onPress={toggleFilter}
          />
        </View> */}

        <View style={[styles.row, { alignItems: "center", marginBottom: 10 }]}>
          <TouchableOpacity
            onPress={() => navigation.navigate("alumniprofile")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                <Text style={[styles.text, { fontSize: RFPercentage(3) }]}>
                  Ali Raza
                </Text>
                <Text style={styles.text}>Product Engineer </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={[styles.row, { width: "38%" }]}>
            {invitationAcceptedState ? (
              <View>
                <Text
                  style={[
                    styles.text,
                    { color: "green", fontSize: RFPercentage(2.3) },
                  ]}
                >
                  Accepted
                </Text>
              </View>
            ) : (
              <View>
                <TouchableOpacity onPress={invitationAccepted}>
                  <Text
                    style={[
                      styles.text,
                      { color: "green", fontSize: RFPercentage(2.3) },
                    ]}
                  >
                    Accept
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {invitationDeclinedState ? (
              <View>
                <Text
                  style={[
                    styles.text,
                    { color: "red", fontSize: RFPercentage(2.3) },
                  ]}
                >
                  Declined
                </Text>
              </View>
            ) : (
              <View>
                <TouchableOpacity onPress={invitationDeclined}>
                  <Text
                    style={[
                      styles.text,
                      { color: "red", fontSize: RFPercentage(2.3) },
                    ]}
                  >
                    Decline
                  </Text>
                </TouchableOpacity>
              </View>
            )}
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
    backgroundColor: "#e62b05",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "black",
    fontSize: RFPercentage(2.1),
    fontFamily: font.primary,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
  input: {
    width: "80%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.7,
    height: 30,
    marginBottom: 20,
  },
  filter: {
    padding: 10,
  },
  picker: {
    width: "100%",
    flexGrow: 0,
  },
});
