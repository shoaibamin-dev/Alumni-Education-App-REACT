import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chase } from "react-native-animated-spinkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StartScreen = (props) => {
  useEffect(() => {
    const check = async () => {
      const token = await AsyncStorage.getItem("userToken");
      const status = await AsyncStorage.getItem("welcomestatus");
      const bool = JSON.parse(status);
      console.log(bool);

      if (bool) {
        if (token) {
          props.navigation.navigate("maintabs");
        } else {
          props.navigation.navigate("auth");
        }
        return;
      }
      if (!bool) {
        props.navigation.navigate("intro");
        return;
      }
    };

    check();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Chase size={40} color="#e62b05" />
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
