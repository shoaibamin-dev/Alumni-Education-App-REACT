import React, { useRef, useEffect, useState } from "react";
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
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import font from "../../shared/font";

const RecoveryCode = (props) => {
  const verificationID = props.navigation.getParam("verificationId");
  const phoneNumber = props.navigation.getParam("phoneNumber");

  // console.log(verificationID);
  // console.log(phoneNumber);

  const [validVerificationID, setValidVerificationID] = useState(
    verificationID
  );

  const [verificationCode, setVerificationCode] = useState();

  const recaptchaVerifier = useRef(null);
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;

  const attemptInvisibleVerification = false;

  //send verification code
  const resendVerificationCode = async () => {
    try {
      setVerificationCode("");
      setResendButtonTime(resendOPTTime);
      startOPTTimer();
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const id = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setValidVerificationID(id);
      console.log(id);
      Alert.alert("Verification code has been sent to your phone.");
    } catch (err) {
      Alert.alert("Please enter a valid verification code.");
      throw err;
    }
  };

  //time interval
  const resendOPTTime = 60;
  let timeInterval;
  const [resendButtonTime, setResendButtonTime] = useState(resendOPTTime);

  //start resend timer
  const startOPTTimer = () => {
    //if timer is running then clear it
    if (timeInterval) {
      clearInterval(timeInterval);
    }
    timeInterval = setInterval(() => {
      //if the timer reached to 0 then clear it else -1 the timer time with 1 second
      if (resendButtonTime <= 0) {
        clearInterval(timeInterval);
      } else {
        setResendButtonTime(resendButtonTime - 1);
      }
    }, 1000);
  };

  //start timer on screen on launch
  useEffect(() => {
    startOPTTimer();
    return () => {
      if (timeInterval) {
        clearInterval(timeInterval);
      }
    };
  }, [resendButtonTime]);

  //confirm the verification code
  const confirmCodeHandler = async () => {
    try {
      if (resendButtonTime <= 0) {
        setValidVerificationID(null);
        Alert.alert("Please verify the valid OTP!");
      } else {
        const credential = firebase.auth.PhoneAuthProvider.credential(
          validVerificationID,
          verificationCode
        );
        const res = await firebase.auth().signInWithCredential(credential);
        console.log(res);
        props.navigation.navigate("newpassword", {
          phoneNumber: phoneNumber,
        });
      }
    } catch (err) {
      Alert.alert("Please enter a valid OTP!");
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
            fontWeight: "bold",
            fontFamily: font.primary,
            fontSize: RFPercentage(3.7),
            color: "#e62b05",
            marginVertical: 15,
            alignSelf: "center",
          }}
        >
          {" "}
          Recover Password{" "}
        </Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Recovery Code"
            placeholderTextColor="#888"
            style={styles.innerInput}
            onChangeText={(text) => setVerificationCode(text)}
          />
        </View>
      </KeyboardAvoidingView>

      <View style={styles.submitView}>
        {/* <Text
          style={{
            fontWeight: "bold",
            fontFamily: "signika",
            fontSize: RFPercentage(2.4),
            textAlign: "center",
          }}
        >
          Please enter the code you have received!{" "}
        </Text> */}

        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={attemptInvisibleVerification}
        />

        {resendButtonTime > 0 ? (
          <View
            style={[styles.otpResendView, { justifyContent: "space-between" }]}
          >
            <Text style={styles.optText}>
              OPT expires in: {resendButtonTime}
            </Text>
            <Text style={styles.optText}> Resend </Text>
          </View>
        ) : (
          <View style={styles.otpResendView}>
            <TouchableOpacity onPress={resendVerificationCode}>
              <Text style={[styles.optText, { color: "orange" }]}>Resend</Text>
            </TouchableOpacity>
          </View>
        )}

        <Button block style={styles.btn} onPress={confirmCodeHandler}>
          <Text style={[styles.text, { color: "#fff", marginTop: 5 }]}>
            Confirm
          </Text>
        </Button>

        {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
        <TouchableOpacity onPress={() => props.navigation.navigate("signin")}>
          <View style={{ width: "100%", alignItems: "center", marginTop: 5 }}>
            <Text style={[styles.text, { color: "#e62b05" }]}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecoveryCode;

// RecoveryCode.navigationOptions = (navData) => {
//   return {
//     headerLeft: () => (
//       <TouchableOpacity onPress={() => navData.navigation.goBack()}>
//         <View
//           style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}
//         >
//           <MaterialCommunityIcons name="less-than" size={28} color="black" />
//           <Text
//             style={{
//               color: "black",
//               fontWeight: "bold",
//               fontSize: RFPercentage(2.6),
//             }}
//           >
//             Back
//           </Text>
//         </View>
//       </TouchableOpacity>
//     ),
//   };
// };

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
  },
  submitView: { width: "100%", alignItems: "center" },
  btn: {
    marginVertical: 25,
    borderRadius: 10,
    backgroundColor: "#e62b05",
  },
  optText: {
    color: "#888",
    fontSize: RFPercentage(2.5),
  },
  otpResendView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 20,
  },
  text: {
    fontFamily: font.primary,
    color: "black",
    fontSize: RFPercentage(2.4),
  },
});
