import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import font from "../../../../shared/font";

export default function Cart({ navigation }) {
  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <Text
          style={[styles.text, { color: "#fff", fontSize: RFPercentage(3) }]}
        >
          Chat
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
        <TouchableOpacity onPress={() => navigation.navigate("openmsg")}>
          <View
            style={[styles.row, { alignItems: "center", marginBottom: 10 }]}
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
              <View style={{ width: Dimensions.get("window").width / 2 }}>
                <Text style={[styles.text, { fontSize: RFPercentage(3) }]}>
                  Ali Raza
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome name="check-circle" size={18} color="#e62b05" />
                  <Text
                    style={[styles.text, { marginLeft: 5 }]}
                    numberOfLines={1}
                  >
                    I have double check the things{" "}
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Text> 1 hour ago </Text>
            </View>
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
    alignItems: "center",
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
});
