import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import font from "../../shared/font";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import { useDispatch } from "react-redux";
import * as googleactions from "../../store/actions/google_auth";
import * as emailactions from "../../store/actions/email_auth";
import AwesomeAlert from "react-native-awesome-alerts";
import { Chase } from "react-native-animated-spinkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = (props) => {
  const [isPassShow, setIsPassShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showPassAlert, setShowPassAlert] = useState(false);
  const [showGoogleAuthAlert, setGoogleAuthAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = Dimensions.get("window");

  //alert for email
  const showAlertHandler = () => {
    setShowAlert(true);
  };

  const hideAlertHandler = () => {
    setShowAlert(false);
  };

  //alert for password
  const showPassAlertHandler = () => {
    setShowPassAlert(true);
  };

  const hidePassAlertHandler = () => {
    setShowPassAlert(false);
  };

  //alert for google sign up
  const showGoogleAlertHandler = () => {
    setGoogleAuthAlert(true);
  };

  const hideGoogleAlertHandler = () => {
    setGoogleAuthAlert(false);
  };

  const dispatch = useDispatch();
  console.log(email);
  console.log(password);

  //async storage
  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem("userToken", token);
    } catch (e) {
      throw e;
    }
  };

  //check if user signed up with google
  const checkGoogleSignUp = async (e_mail) => {
    // try {
    const response = await fetch(
      "https://apanapp.herokuapp.com/api/user/existEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e_mail,
        }),
      }
    );
    const resData = await response.json();
    console.log(resData);

    if (resData.email_exist === true) {
      return true;
    } else {
      return false;
    }
  };

  //login with email and password
  const siginInHandler = async () => {
    try {
      if (email === "") {
        showAlertHandler();
        return;
      }
      if (password === "") {
        showPassAlertHandler();

        return;
      }
      setIsLoading(true);
      const res = await fetch("https://apanapp.herokuapp.com/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const resData = await res.json();
      console.log(resData);
      if (resData.user_logged_in === false) {
        Alert.alert("Wrong Credentials", "Email or password is incorrect!", [
          { text: "Okay" },
        ]);
        setIsLoading(false);
        return;
      } else {
        storeToken(resData.token);
        dispatch(
          emailactions.emailSignIn(
            resData.result._id,
            resData.token,
            resData.result.profile.email,
            resData.result.profile.first_name,
            resData.result.profile.last_name,
            resData.result.profile.image_url,
            resData.result.profile.gender,
            resData.result.user_type,
            resData.result.profile.about,
            JSON.parse(resData.result.profile.education),
            JSON.parse(resData.result.profile.employment),
            resData.result.profile.age,
            resData.result.profile.city,
            resData.result.profile.phone
          )
        );
        props.navigation.navigate("maintabs");
      }
      console.log(resData);
    } catch (err) {
      throw err;
    }
    setIsLoading(false);
  };

  //google sign in
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "503907281859-rkqco2t5tu2hfbqffn8bsde6ivcb70of.apps.googleusercontent.com",
        iosClientId:
          "503907281859-njdbduqrc87aug40p1ihnckbblmhriq5.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });
      console.log(result.type);
      if (result.type === "success") {
        if (!checkGoogleSignUp(result.user.email) === false) {
          showGoogleAlertHandler();
          return;
        } else {
          const googleCrendentials = firebase.auth.GoogleAuthProvider.credential(
            result.idToken,
            result.accessToken
          );

          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(googleCrendentials)
            .then(() => {
              props.navigation.navigate("maintabs");
              dispatch(
                googleactions.googleSignIn(
                  result.user.id,
                  result.idToken,
                  result.user.givenName,
                  result.user.familyName,
                  result.user.name,
                  result.user.email,
                  result.user.photoUrl
                )
              );
              console.log("executed");
            })
            .catch((error) => {
              Alert.alert("Error", error.message, [{ text: "Okay" }]);
            });
        }
      } else return { cancelled: true };
    } catch (error) {
      return { error: true };
    }
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Chase size={48} color="#e62b05" />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 50,
        paddingBottom: 20,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            source={require("../../assets/images/Arrena-Logo.png")}
            style={{ width: 200, height: 150 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.inputView}>
          <View style={styles.input}>
            <MaterialCommunityIcons
              name="email-open-outline"
              size={28}
              color="black"
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="black"
              style={styles.innerInput}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Email is required!"
            message="Please enter your email."
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Okay"
            confirmButtonStyle={styles.confirmBtn}
            confirmButtonColor="#e62b05"
            onCancelPressed={hideAlertHandler}
            onConfirmPressed={hideAlertHandler}
            confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
            contentContainerStyle={{ width: width / 1.4, height: width / 2.3 }}
          />
          <View style={styles.input}>
            <MaterialIcons name="lock-outline" size={28} color="black" />
            <TextInput
              placeholder="********"
              placeholderTextColor="black"
              style={styles.innerInput}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={isPassShow}
            />
            {isPassShow ? (
              <MaterialCommunityIcons
                name="eye-off"
                size={28}
                color="black"
                style={{ position: "absolute", right: 20 }}
                onPress={() => setIsPassShow(!isPassShow)}
              />
            ) : (
              <MaterialCommunityIcons
                name="eye"
                size={28}
                color="black"
                style={{ position: "absolute", right: 20 }}
                onPress={() => setIsPassShow(!isPassShow)}
              />
            )}
          </View>
          <AwesomeAlert
            show={showPassAlert}
            showProgress={false}
            title="Password is required!"
            message="Please enter your password."
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Okay"
            confirmButtonStyle={styles.confirmBtn}
            confirmButtonColor="#e62b05"
            onCancelPressed={hidePassAlertHandler}
            onConfirmPressed={hidePassAlertHandler}
            confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
            contentContainerStyle={{ width: width / 1.4, height: width / 2.3 }}
          />
        </View>

        <View
          style={{
            width: Dimensions.get("window").width / 1.8,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("recovpass")}
          >
            <Text
              style={{
                fontFamily: font.primary,
                marginBottom: 10,
                marginTop: 4,
                fontSize: RFPercentage(2.5),
              }}
            >
              {" "}
              Forgot Your Password?
            </Text>
          </TouchableOpacity>

          <Button block onPress={siginInHandler} style={styles.btn}>
            <Text
              style={{
                fontSize: RFPercentage(3),
                fontFamily: font.primary,
                marginTop: 5,
              }}
            >
              {" "}
              Sign In{" "}
            </Text>
          </Button>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: font.primary,
              fontSize: RFPercentage(2.5),
            }}
          >
            Login with social account
          </Text>
          <AwesomeAlert
            show={showGoogleAuthAlert}
            showProgress={false}
            title="Authorization Failed"
            message="You are not signed up with Google"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Okay"
            confirmButtonStyle={styles.confirmBtn}
            confirmButtonColor="#e62b05"
            onConfirmPressed={hideGoogleAlertHandler}
            confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
            contentContainerStyle={{ width: width / 1.4, height: width / 2.3 }}
          />
          <View style={styles.social}>
            <TouchableOpacity onPress={signInWithGoogleAsync}>
              <Image
                source={require("../../assets/images/google_logo.png")}
                style={{ width: 45, height: 45 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerBoundary}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("signup1")}
            >
              <Text
                style={{
                  fontFamily: font.primary,
                  fontSize: RFPercentage(2.5),
                }}
              >
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  lowerBoundary: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: RFPercentage(2.5),
    fontFamily: font.primary,
  },
  inputView: {
    width: "83%",
  },
  image: {
    width: 85,
    height: 85,
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
    alignSelf: "center",
    width: "100%",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width / 2.4,
    marginVertical: 15,
  },
  skipText: {
    fontSize: RFPercentage(2.7),
    fontWeight: "bold",
    marginRight: 25,
    color: "#fff",
  },
  btn: {
    backgroundColor: "#e62b05",
    borderRadius: 10,
  },
  confirmBtn: {
    width: 60,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
