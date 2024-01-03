import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import font from "../../shared/font";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import AwesomeAlert from "react-native-awesome-alerts";

const RecoverPassword = (props) => {
  //firebase phone authentication
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneUnverifiedAlert, setPhoneUnverifiedAlert] = useState(false);
  const [showVeriCode, setShowVeriCode] = useState(false);
  const [showValidCode, setShowValidCode] = useState(false);
  const { width } = Dimensions.get("window");

  //alert for phone unverified
  const showPhUnverifiedHandler = () => {
    setPhoneUnverifiedAlert(true);
  };

  const hidePhUnverifiedHandler = () => {
    setPhoneUnverifiedAlert(false);
  };

  //alert for verification code
  const showVeriCodeHandler = () => {
    setShowVeriCode(true);
  };

  const hideVeriCodeHandler = () => {
    setShowVeriCode(false);
  };

  //alert for valid phone
  const showValidCodeHandler = () => {
    setShowValidCode(true);
  };

  const hideValidCodeHandler = () => {
    setShowValidCode(false);
  };

  console.log(phoneNumber);

  //initialize firebase
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;

  const attemptInvisibleVerification = false;

  //verify the phone number in record
  const verifyPhoneInRecord = async () => {
    const response = await fetch(
      "https://apanapp.herokuapp.com/api/user/existPhone",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneNumber,
        }),
      }
    );
    const resData = await response.json();
    console.log(resData);
    if (resData.phone_exists === true) {
      sendVerificationCode();
    } else {
      showPhUnverifiedHandler();
      // Alert.alert(
      //   "Phone is unverified",
      //   "Please enter the phone number you have verified while signing up",
      //   [{ text: "Okay" }]
      // );
    }
  };

  const sendVerificationCode = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const id = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );

      console.log(id);
      showVeriCodeHandler();
      props.navigation.navigate("recovcode", {
        verificationId: id,
        phoneNumber: phoneNumber,
      });
    } catch (err) {
      showValidCodeHandler();
      // Alert.alert("Please enter a valid number.");
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

        {/* firebase recaptcha model */}
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={attemptInvisibleVerification}
        />

        <Text
          style={{
            fontFamily: font.primary,
            fontSize: RFPercentage(3.8),
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          {" "}
          Recover Password{" "}
        </Text>
        <View style={styles.input}>
          <MaterialCommunityIcons
            name="email-open-outline"
            size={28}
            color="black"
          />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="black"
            keyboardType="number-pad"
            style={styles.innerInput}
            onChangeText={(text) => setPhoneNumber("+92" + text)}
          />
        </View>
        <AwesomeAlert
          show={phoneUnverifiedAlert}
          showProgress={false}
          title="Phone Unverified"
          message="Please enter the phone number you have verified while signing up"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonStyle={styles.confirmBtn}
          confirmButtonColor="#e62b05"
          onConfirmPressed={hidePhUnverifiedHandler}
          confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
          messageStyle={{ textAlign: "justify" }}
          contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
        />
        <AwesomeAlert
          show={showVeriCode}
          showProgress={false}
          title="Success"
          message="Verification code has been sent to your phone."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonStyle={styles.confirmBtn}
          confirmButtonColor="#e62b05"
          onConfirmPressed={hideVeriCodeHandler}
          confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
          messageStyle={{ textAlign: "justify" }}
          contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
        />
        <AwesomeAlert
          show={showValidCode}
          showProgress={false}
          title="Invalid Number"
          message="Please enter a valid number"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonStyle={styles.confirmBtn}
          confirmButtonColor="#e62b05"
          onConfirmPressed={hideValidCodeHandler}
          confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
          contentContainerStyle={{ width: width / 1.4, height: width / 2.3 }}
        />
      </KeyboardAvoidingView>
      <View style={styles.submitView}>
        <Text
          style={{
            fontFamily: font.primary,
            fontSize: RFPercentage(2.5),
          }}
        >
          Please enter your verified phone number to recover your password{" "}
        </Text>
        <Button block style={styles.btn} onPress={verifyPhoneInRecord}>
          <Text
            style={{
              fontFamily: font.primary,
              fontSize: RFPercentage(3),
              marginTop: 5,
            }}
          >
            {" "}
            RESET{" "}
          </Text>
        </Button>
        {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View style={{ width: "100%", alignItems: "center", marginTop: 5 }}>
            <Text style={[styles.text, { color: "#e62b05" }]}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecoverPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 30,
  },
  input: {
    borderColor: "#e62b05",
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
    width: "80%",
  },
  submitView: { width: 260, alignItems: "center", marginTop: 30 },
  btn: {
    marginVertical: 25,
    borderRadius: 10,
    backgroundColor: "#e62b05",
  },
  image: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").width / 1.7,
    marginTop: 10,
  },
  confirmBtn: {
    width: 60,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
