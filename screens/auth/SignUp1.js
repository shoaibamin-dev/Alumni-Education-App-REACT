import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import { Button, Text, Picker } from "native-base";
import {
  MaterialCommunityIcons,
  AntDesign,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import PasswordStrengthMeterBar from "react-native-password-strength-meter-bar";
import { RFPercentage } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
import font from "../../shared/font";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import * as ImagePicker from "expo-image-picker";
import AwesomeAlert from "react-native-awesome-alerts";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassShow, setIsPassShow] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [image, setImage] = useState("");
  const [imageURI, setImageURI] = useState("");
  const { width } = Dimensions.get("window");

  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const [showAlert4, setShowAlert4] = useState(false);
  const [showAlert5, setShowAlert5] = useState(false);
  const [showAlert6, setShowAlert6] = useState(false);
  const [showAlert7, setShowAlert7] = useState(false);

  //alert 1
  const showAlert1Handler = () => {
    setShowAlert1(true);
  };

  const hideAlert1Handler = () => {
    setShowAlert1(false);
  };

  //alert 2
  const showAlert2Handler = () => {
    setShowAlert2(true);
  };

  const hideAlert2Handler = () => {
    setShowAlert2(false);
  };

  //alert 3
  const showAlert3Handler = () => {
    setShowAlert3(true);
  };

  const hideAlert3Handler = () => {
    setShowAlert3(false);
  };

  //alert 4
  const showAlert4Handler = () => {
    setShowAlert4(true);
  };

  const hideAlert4Handler = () => {
    setShowAlert4(false);
  };

  //alert 5
  const showAlert5Handler = () => {
    setShowAlert5(true);
  };

  const hideAlert5Handler = () => {
    setShowAlert5(false);
  };

  //alert 6
  const showAlert6Handler = () => {
    setShowAlert6(true);
  };

  const hideAlert6Handler = () => {
    setShowAlert6(false);
  };

  //alert 7
  const showAlert7Handler = () => {
    setShowAlert7(true);
  };

  const hideAlert7Handler = () => {
    setShowAlert7(false);
  };

  //launch library to pick an image from
  const launchLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
    });
    if (!result.cancelled) {
      setImageURI(result.uri);
      setImage(result.base64);
    }
  };

  const sendInfo = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = emailRegex.test(email);

    if (fname === "") {
      showAlert1Handler();
      return;
    }
    if (lname === "") {
      showAlert2Handler();
      return;
    }
    if (email === "") {
      showAlert3Handler();
      return;
    }
    if (result === false) {
      showAlert7Handler();
      return;
    }
    if (password === "") {
      showAlert4Handler();
      return;
    }
    if (image === "") {
      showAlert5Handler();
      return;
    }
    props.navigation.navigate("signup2", {
      fname: fname,
      lname: lname,
      email: email,
      image: image,
      password: password,
    });
  };

  const onSignIn = (googleUser, email, first_name, last_name, photo) => {
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        const googleCrendentials = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(googleCrendentials)
          .then(() => {
            props.navigation.navigate("signup2", {
              fname: first_name,
              lname: last_name,
              email: email,
              image: photo,
              password: "",
            });
          });
      } else {
        showAlert6Handler();
      }
    });
  };

  const isUserEqual = (googleUser, firebaseUser) => {
    console.log("Google Auth ", googleUser);
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.user.id
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  //sign up with google sign in
  const signUpWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "503907281859-rkqco2t5tu2hfbqffn8bsde6ivcb70of.apps.googleusercontent.com",
        iosClientId:
          "503907281859-njdbduqrc87aug40p1ihnckbblmhriq5.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });
      console.log(result);
      if (result.type === "success") {
        console.log("success");
        setEmail(result.user.email);
        setFName(result.user.givenName);
        setLName(result.user.familyName);
        setImage(result.user.photoUrl);
        setImageURI(result.user.photoUrl);
        onSignIn(
          result,
          result.user.email,
          result.user.givenName,
          result.user.familyName,
          result.user.photoUrl
        );
      } else return { cancelled: true };
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, backgroundColor: "#fff" }}
    >
      <View style={{ width: "100%", alignItems: "center" }}>
        {image ? (
          <TouchableOpacity onPress={launchLibrary}>
            <View>
              <Image source={{ uri: imageURI }} style={styles.profileImage} />
            </View>
          </TouchableOpacity>
        ) : (
          <AntDesign
            name="pluscircle"
            size={60}
            color="#e62b05"
            style={{ marginTop: 30, marginBottom: 10 }}
            onPress={launchLibrary}
          />
        )}
        <Text
          style={{
            marginVertical: 12,
            fontFamily: font.primary,
            fontSize: RFPercentage(2.5),
          }}
        >
          Please enter your details to sign up
        </Text>
      </View>
      <AwesomeAlert
        show={showAlert5}
        showProgress={false}
        title="Empty profile photo."
        message="Please upload your profile photo."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Okay"
        confirmButtonStyle={styles.confirmBtn}
        confirmButtonColor="#e62b05"
        onConfirmPressed={hideAlert5Handler}
        confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
        messageStyle={{ textAlign: "justify" }}
        contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
      />
      <View>
        <View style={styles.input}>
          <Fontisto name="male" size={28} color="black" />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="black"
            style={styles.innerInput}
            onChangeText={(text) => setFName(text)}
            value={fname}
          />
        </View>
        <AwesomeAlert
          show={showAlert1}
          showProgress={false}
          title="Firstname is required!"
          message="Please enter your firstname."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonStyle={styles.confirmBtn}
          confirmButtonColor="#e62b05"
          onConfirmPressed={hideAlert1Handler}
          confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
          messageStyle={{ textAlign: "justify" }}
          contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
        />
        <View style={styles.input}>
          <Fontisto name="male" size={28} color="black" />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="black"
            style={styles.innerInput}
            onChangeText={(text) => setLName(text)}
            value={lname}
          />
          <AwesomeAlert
            show={showAlert2}
            showProgress={false}
            title="Lastname is required!"
            message="Please enter your lastname."
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Okay"
            confirmButtonStyle={styles.confirmBtn}
            confirmButtonColor="#e62b05"
            onConfirmPressed={hideAlert2Handler}
            confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
            messageStyle={{ textAlign: "justify" }}
            contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
          />
        </View>
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
            value={email}
          />
        </View>
        <AwesomeAlert
          show={showAlert3}
          showProgress={false}
          title="Email is required!"
          message="Please enter your email."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonStyle={styles.confirmBtn}
          confirmButtonColor="#e62b05"
          onConfirmPressed={hideAlert3Handler}
          confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
          messageStyle={{ textAlign: "justify" }}
          contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
        />
        <View style={styles.input}>
          <Ionicons name="key" size={28} color="black" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={styles.innerInput}
            secureTextEntry={isPassShow}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {isPassShow ? (
            <View
              style={{
                position: "absolute",
                right: 10,
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="eye-off"
                size={29}
                color="black"
                style={{ marginRight: 5 }}
                onPress={() => setIsPassShow(!isPassShow)}
              />
            </View>
          ) : (
            <View
              style={{
                position: "absolute",
                right: 10,
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="eye"
                size={29}
                color="black"
                style={{ marginRight: 5 }}
                onPress={() => setIsPassShow(!isPassShow)}
              />
            </View>
          )}
        </View>
        <AwesomeAlert
          show={showAlert4}
          showProgress={false}
          title="Password is required!"
          message="Please enter your password."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonStyle={styles.confirmBtn}
          confirmButtonColor="#e62b05"
          onConfirmPressed={hideAlert4Handler}
          confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
          messageStyle={{ textAlign: "justify" }}
          contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
        />

        <AwesomeAlert
          show={showAlert7}
          showProgress={false}
          title="Incorrect Format"
          message="Please enter email in correct format."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonStyle={styles.confirmBtn}
          confirmButtonColor="#e62b05"
          onConfirmPressed={hideAlert7Handler}
          confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
          // messageStyle={{ textAlign: "justify" }}
          contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
        />

        <View style={{ width: "100%", marginTop: 25 }}>
          <PasswordStrengthMeterBar password={password} />
        </View>

        <View style={styles.submitView}>
          <View style={{ width: "60%" }}>
            <Button block style={styles.btn} onPress={sendInfo}>
              <Text
                style={{
                  fontFamily: font.primary,
                  fontSize: RFPercentage(3),
                  marginTop: 5,
                }}
              >
                {" "}
                SUBMIT{" "}
              </Text>
            </Button>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontFamily: font.primaryBold,
                fontWeight: "bold",
                fontSize: RFPercentage(2.5),
              }}
            >
              OR
            </Text>
            <Text
              style={{
                fontFamily: font.primary,
                fontSize: RFPercentage(2.5),
                marginVertical: 10,
              }}
            >
              {" "}
              Signup with a social account{" "}
            </Text>
            <View style={styles.social}>
              <TouchableOpacity onPress={signUpWithGoogleAsync}>
                <Image
                  source={require("../../assets/images/google_logo.png")}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => {}}>
                <FontAwesome5 name="linkedin-in" size={43} color="#0e76a8" />
              </TouchableOpacity> */}
            </View>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate("signin")}>
            <View style={{ width: "100%", alignItems: "center", marginTop: 5 }}>
              <Text style={[styles.text, { color: "#e62b05" }]}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
        <AwesomeAlert
          show={showAlert6}
          showProgress={false}
          title="Password is required!"
          message="Please enter your password."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonStyle={styles.confirmBtn}
          confirmButtonColor="#e62b05"
          onConfirmPressed={hideAlert6Handler}
          confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
          messageStyle={{ textAlign: "justify" }}
          contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input: {
    borderColor: "#e62b05",
    borderWidth: 1.5,
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    marginTop: 15,
  },
  innerInput: {
    marginLeft: 8,
    fontSize: RFPercentage(2.4),
    width: "100%",
  },
  submitView: {
    width: Dimensions.get("window").width / 2,
    alignItems: "center",
    width: "100%",
  },
  btn: {
    marginVertical: 25,
    borderRadius: 10,
    backgroundColor: "#e62b05",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width / 2.4,
    marginVertical: 15,
  },
  text: {
    fontFamily: font.primary,
    color: "#56c4e3",
    fontSize: RFPercentage(2.2),
  },
  profileImage: {
    width: 85,
    height: 85,
    borderColor: "black",
    borderWidth: 0.7,
    borderRadius: 50,
    marginTop: 15,
  },
  confirmBtn: {
    width: 60,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
