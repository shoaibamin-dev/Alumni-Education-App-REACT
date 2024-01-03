import React, { useState, useEffect } from "react";
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
import font from "../../../../shared/font";
import { Text, Picker } from "native-base";
import { Chase } from "react-native-animated-spinkit";

function MainContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetchAlumni();
  }, []);

  const fetchAlumni = async () => {
    setIsLoading(true);
    const response = await fetch("https://apanapp.herokuapp.com/api/user/all");
    const resData = await response.json();
    setUsers(resData);
    console.log("RESDATA", resData);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Chase size={40} color="#e62b05" />
      </View>
    );
  }

  return (
    <View>
      {users &&
        users.result.map((elements) => (
          <View key={elements._id}>
            <View
              style={[styles.row, { alignItems: "center", marginBottom: 10 }]}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("alumniprofile")}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      source={{
                        uri:
                          elements.profile.image_url ||
                          `data:image/jpeg;base64,${elements.profile.image_url}`,
                      }}
                      resizeMode="contain"
                    />
                  </View>
                  <View>
                    <Text style={[styles.text, { fontSize: RFPercentage(3) }]}>
                      {elements.profile.first_name +
                        " " +
                        elements.profile.last_name}
                    </Text>
                    <Text style={styles.text}>{elements.profile.about}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={26}
                  color="black"
                  onPress={() => navigation.navigate("messages")}
                />
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
          </View>
        ))}
    </View>
  );
}

export default function Alumni({ navigation }) {
  const [filterShown, setFilterShown] = useState(false);

  const toggleFilter = () => {
    setFilterShown(!filterShown);
  };

  // filter picker
  const [selected, setSelected] = useState("key0");

  const onSelectionChange = (value) => {
    setSelected(value);
  };

  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <Text
          style={[styles.text, { color: "#fff", fontSize: RFPercentage(3) }]}
        >
          Alumni Profiles
        </Text>
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
        <View>
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
              {/* <View style={styles.filter}>
              <Text> Location</Text>
            </View> */}
            </View>
          ) : (
            <View />
          )}
        </View>

        <View style={styles.row}>
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
        </View>

        <MainContent />

        {/* <View style={[styles.row, { alignItems: "center", marginBottom: 10 }]}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      "https://image.shutterstock.com/image-photo/fashion-trend-guy-beard-mustache-260nw-1624957687.jpg",
                  }}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text style={[styles.text, { fontSize: RFPercentage(3) }]}>
                  Nouman Abdullah
                </Text>
                <Text style={styles.text}>System Engineer </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View>
            <MaterialCommunityIcons
              name="message-text-outline"
              size={26}
              color="black"
            />
          </View>
        </View>
        <View
          style={{
            borderColor: "#ccc",
            borderWidth: 0.7,
            width: "100%",
            marginBottom: 15,
          }}
        /> */}
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
    justifyContent: "center",
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
