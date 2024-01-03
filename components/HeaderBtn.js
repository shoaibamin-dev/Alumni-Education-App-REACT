import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
} from "@expo/vector-icons";

const HeaderBtn = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialCommunityIcons}
      iconSize={40}
      color="#fff"
    />
  );
};

export default HeaderBtn;

const styles = StyleSheet.create({});
