import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Button, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import PasswordStrengthMeterBar from "react-native-password-strength-meter-bar";
import font from "../../shared/font";

const NewPassword = (props) => {
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const phoneNumber = props.navigation.getParam("phoneNumber");
  console.log(password);
  console.log(conPassword);
  console.log(phoneNumber);

  const passwordResetHandler = async () => {
    try {
      if (password === conPassword && password !== "") {
        Alert.alert("Success", "Password has been reset!", [
          {
            text: "Okay",
            onPress: () => props.navigation.navigate("mainSignUp"),
          },
        ]);
      } else {
        Alert.alert(
          "Password mismatched",
          "Provided password is not matching, please enter the same password!",
          [{ text: "Okay" }]
        );
      }
      if (password === "") {
        Alert.alert(
          "Password Field Empty",
          "Password provided is empty, please enter your new password",
          [{ text: "Okay" }]
        );
      }

      const res = await fetch("https://apanapp.herokuapp.com/api/user/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: "923312111050",
          password: password,
        }),
      });

      const resData = await res.json();
      console.log(resData);
    } catch (err) {
      throw err;
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" style={{ width: "100%" }}>
        <Image
          source={require("../../assets/images/forgotpassword.jpg")}
          style={styles.image}
        />
        <Text
          style={{
            fontFamily: font.primary,
            fontSize: RFPercentage(4.7),
            color: "#e62b05",
            marginTop: 15,
            alignSelf: "center",
          }}
        >
          {" "}
          Set New Password{" "}
        </Text>
        {/* <Text
          style={{
            fontFamily: font.primary,
            fontSize: RFPercentage(2.3),
            alignSelf: "center",
          }}
        >
          {" "}
          Please enter your desired password
        </Text> */}
        <View style={styles.input}>
          {/* <MaterialCommunityIcons
          name="email-open-outline"
          size={28}
          color="#B247A7"
        /> */}
          <TextInput
            placeholder="New Password"
            placeholderTextColor="#888"
            style={styles.innerInput}
            onChangeText={(text) => setPassword(text)}
          />
          {/* {isPassShow ? (
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              right: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="eye-off"
              size={28}
              color="#888"
              style={{ marginRight: 5 }}
              onPress={() => setIsPassShow(!isPassShow)}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              right: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="eye"
              size={29}
              color="#888"
              style={{ marginRight: 5 }}
              onPress={() => setIsPassShow(!isPassShow)}
            />
          </View>
        )} */}
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#888"
            style={styles.innerInput}
            onChangeText={(text) => setConPassword(text)}
          />
          {/* {isPassShow ? (
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              right: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="eye-off"
              size={29}
              color="#888"
              style={{ marginRight: 5 }}
              onPress={() => setIsPassShow(!isPassShow)}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              right: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="eye"
              size={29}
              color="#888"
              style={{ marginRight: 5 }}
              onPress={() => setIsPassShow(!isPassShow)}
            />
          </View>
        )} */}
        </View>
      </KeyboardAvoidingView>
      <View style={{ width: "100%", marginTop: 25 }}>
        <PasswordStrengthMeterBar password={password} />
      </View>

      <View style={styles.submitView}>
        <Button block style={styles.btn} onPress={passwordResetHandler}>
          <Text
            style={{
              fontFamily: font.primary,
              fontSize: RFPercentage(2.6),
              marginTop: 5,
            }}
          >
            {" "}
            RESET{" "}
          </Text>
        </Button>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("signin")}>
        <View style={{ width: "100%", alignItems: "center", marginTop: 25 }}>
          <Text style={[styles.text, { color: "#e62b05" }]}>Sign In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewPassword;

NewPassword.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={() => navData.navigation.goBack()}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}
        >
          <MaterialCommunityIcons name="less-than" size={28} color="#fff" />
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: RFPercentage(2.6),
            }}
          >
            Back
          </Text>
        </View>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 30,
  },
  image: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").width / 1.7,
    marginTop: 10,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1.5,
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    marginTop: 20,
  },
  innerInput: {
    marginLeft: 8,
    fontSize: RFPercentage(2.4),
    width: "100%",
  },
  submitView: {
    width: Dimensions.get("window").width / 2,
    alignItems: "center",
  },
  btn: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#e62b05",
  },
});
