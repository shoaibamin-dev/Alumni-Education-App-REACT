import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
} from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function Header({ navigation, title }) {
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.header}>
      <MaterialCommunityIcons
        name="menu"
        size={35}
        onPress={() => navigation.openDrawer()}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}> {title} </Text>
      </View>
      {/* <SimpleLineIcons
        name="bell"
        size={35}
        onPress={() => navigation.openDrawer()}
        style={[styles.icon, { left: width / 1.35, top: 10 }]}
      />
      <Feather
        name="search"
        size={35}
        onPress={() => navigation.openDrawer()}
        style={[styles.icon, { left: width / 1.15, top: 10 }]}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: Dimensions.get("window").width,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: 16,
    color: "#fff",
  },
  headerText: {
    color: "#fff",
    fontFamily: "signika",
    fontSize: RFPercentage(4),
    fontWeight: "bold",
  },
});
