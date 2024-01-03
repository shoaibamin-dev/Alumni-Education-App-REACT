import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import AppNavigation from "./navigation/navigation";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import firebaseConfig from "./config";
import * as firebase from "firebase";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import googleAuthReducer from "./store/reducers/google_auth";
import emailAuthReducer from "./store/reducers/email_auth";

export default function App() {
  //initialize firebase

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  // firebase.initializeApp(FirebaseConfig);

  //root reducers
  const rootReducers = combineReducers({
    googleAuth: googleAuthReducer,
    emailAuth: emailAuthReducer,
  });

  const store = createStore(rootReducers);

  //load custom fonts
  let [fontsLoaded] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <AppNavigation />
      </View>
    </Provider>
  );
}
