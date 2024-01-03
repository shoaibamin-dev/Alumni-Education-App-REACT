import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import { Button, Text, Picker } from "native-base";
import { RFPercentage } from "react-native-responsive-fontsize";
import font from "../../shared/font";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import AwesomeAlert from "react-native-awesome-alerts";

const SignUp2 = (props) => {
  const [about, setAbout] = useState("");
  const [age, setAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("select");
  const [userType, setUserType] = useState("select");
  const [phone, setPhone] = useState("");
  console.log(phone);
  const [city, setCity] = useState("select");
  const [campus, setCampus] = useState("select");
  const [batch, setBatch] = useState("");

  const [verificationCode, setVerificationCode] = useState();
  const [validVerificationID, setValidVerificationID] = useState();
  const { width } = Dimensions.get("window");
  // const [isVerified, setIsVerified] = useState(false);

  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const [showAlert4, setShowAlert4] = useState(false);
  const [showAlert5, setShowAlert5] = useState(false);
  const [showAlert6, setShowAlert6] = useState(false);
  const [showAlert7, setShowAlert7] = useState(false);
  const [showAlert8, setShowAlert8] = useState(false);
  const [showAlert9, setShowAlert9] = useState(false);
  const [showAlert10, setShowAlert10] = useState(false);

  const fname = props.navigation.getParam("fname");
  const lname = props.navigation.getParam("lname");
  const email = props.navigation.getParam("email");
  const image = props.navigation.getParam("image");
  const password = props.navigation.getParam("password");

  console.log("firstname", fname);
  console.log("lastname", lname);
  console.log("email", email);
  console.log("image", image);
  console.log("password", password);

  const recaptchaVerifier = useRef(null);
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;

  const attemptInvisibleVerification = false;

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

  //alert 8
  const showAlert8Handler = () => {
    setShowAlert8(true);
  };

  const hideAlert8Handler = () => {
    setShowAlert8(false);
  };

  //alert 9
  const showAlert9Handler = () => {
    setShowAlert9(true);
  };

  const hideAlert9Handler = () => {
    setShowAlert9(false);
  };

  //alert 10
  const showAlert10Handler = () => {
    setShowAlert10(true);
  };

  const hideAlert10Handler = () => {
    setShowAlert10(false);
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

  // start timer on screen on launch
  useEffect(() => {
    startOPTTimer();
    return () => {
      if (timeInterval) {
        clearInterval(timeInterval);
      }
    };
  }, [resendButtonTime]);

  const sendVerificationCode = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const id = await phoneProvider.verifyPhoneNumber(
        phone,
        recaptchaVerifier.current
      );
      showAlert9Handler();
      setValidVerificationID(id);
      props.navigation.navigate("signup3", {
        verificationId: id,
        phoneNumber: phone,
        about: about,
        age: age,
        gender: selectedGender,
        role: userType,
        phone: phone,
        fname: fname,
        lname: lname,
        email: email,
        image: image,
        phone: phone,
        city: city,
        campus: campus,
        batch: batch,
        password: password,
      });
    } catch (err) {
      showAlert10Handler();
      throw err;
    }
  };

  const validateInfo = () => {
    try {
      if (about === "") {
        showAlert1Handler();
        // Alert.alert("About is required", "Please tell us about yourself", [
        //   { text: "Okay" },
        // ]);
        return;
      }
      if (age === "") {
        showAlert2Handler();
        return;
      }
      if (selectedGender === "select") {
        showAlert3Handler();
        return;
      }
      if (userType === "select") {
        showAlert4Handler();
        return;
      }
      if (city === "select") {
        showAlert5Handler();
        return;
      }
      if (campus === "select") {
        showAlert6Handler();
        return;
      }
      if (batch === "") {
        showAlert7Handler();
        return;
      }
      if (phone === "") {
        showAlert8Handler();
        return;
      }
      sendVerificationCode();
    } catch (err) {
      throw err;
    }
  };

  const onGenderChange = (value) => {
    setSelectedGender(value);
  };

  const onUserTypeChange = (value) => {
    setUserType(value);
  };

  const onCityChange = (value) => {
    setCity(value);
  };

  const onCampusChange = (value) => {
    setCampus(value);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      {/* firebase recaptcha model */}
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={attemptInvisibleVerification}
      />

      <View style={{ marginVertical: 20 }}>
        <Text style={[styles.text, { fontSize: RFPercentage(3) }]}> About</Text>
        <TextInput
          multiline={true}
          style={styles.input}
          textAlignVertical="top"
          maxLength={250}
          onChangeText={(text) => setAbout(text)}
          placeholder="Tell us about yourself max. 250 characters"
        />
      </View>

      <AwesomeAlert
        show={showAlert1}
        showProgress={false}
        title="About is required!"
        message="Please tell us about yourself."
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

      {/* user age */}
      <TextInput
        style={styles.inputTwo}
        onChangeText={(text) => setAge(text)}
        placeholder="Age"
        keyboardType="number-pad"
      />

      <AwesomeAlert
        show={showAlert2}
        showProgress={false}
        title="Age is required!"
        message="Please enter your age."
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

      {/* select gender */}
      <View
        style={{
          borderColor: "#e62b05",
          borderWidth: 1.5,
          borderRadius: 6,
          marginTop: 10,
        }}
      >
        <Picker
          note
          mode="dropdown"
          selectedValue={selectedGender}
          onValueChange={onGenderChange.bind(this)}
        >
          <Picker.Item label="Gender" value="gender" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      </View>

      <AwesomeAlert
        show={showAlert3}
        showProgress={false}
        title="Gender is required!"
        message="Please select your gender."
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

      {/* select user role */}
      <View
        style={{
          borderColor: "#e62b05",
          borderWidth: 1.5,
          borderRadius: 6,
          marginTop: 10,
        }}
      >
        <Picker
          note
          mode="dropdown"
          itemStyle={{ fontSize: RFPercentage(2) }}
          //   textStyle={{ fontSize: RFPercentage(2.2) }}
          selectedValue={userType}
          onValueChange={onUserTypeChange.bind(this)}
        >
          <Picker.Item label="Role" value="role" />
          <Picker.Item label="Alumni" value="1" />
          <Picker.Item label="Student" value="2" />
          <Picker.Item label="Teacher" value="3" />
          <Picker.Item label="Staff" value="4" />
        </Picker>
      </View>

      <AwesomeAlert
        show={showAlert4}
        showProgress={false}
        title="Role is required!"
        message="Please select your role."
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

      {/* select user city */}
      <View
        style={{
          borderColor: "#e62b05",
          borderWidth: 1.5,
          borderRadius: 6,
          marginTop: 10,
        }}
      >
        <Picker
          note
          mode="dropdown"
          itemStyle={{ fontSize: RFPercentage(2) }}
          //   textStyle={{ fontSize: RFPercentage(2.2) }}
          selectedValue={city}
          onValueChange={onCityChange.bind(this)}
        >
          <Picker.Item label="City" value="city" />
          <Picker.Item label="Karachi" value="karachi" />
          <Picker.Item label="Lahore" value="lahore" />
          <Picker.Item label="Multan" value="multan" />
          <Picker.Item label="Peshawar" value="peshawar" />
        </Picker>
      </View>

      <AwesomeAlert
        show={showAlert5}
        showProgress={false}
        title="City is required!"
        message="Please select your city."
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

      {/* select user campus */}
      <View
        style={{
          borderColor: "#e62b05",
          borderWidth: 1.5,
          borderRadius: 6,
          marginTop: 10,
        }}
      >
        <Picker
          note
          mode="dropdown"
          itemStyle={{ fontSize: RFPercentage(2) }}
          //   textStyle={{ fontSize: RFPercentage(2.2) }}
          selectedValue={campus}
          onValueChange={onCampusChange.bind(this)}
        >
          <Picker.Item label="Campus" value="campus" />
          <Picker.Item label="Karachi" value="karachi" />
          <Picker.Item label="Lahore" value="lahore" />
          <Picker.Item label="Multan" value="multan" />
          <Picker.Item label="Peshawar" value="peshawar" />
        </Picker>
      </View>

      <AwesomeAlert
        show={showAlert6}
        showProgress={false}
        title="Campus is required!"
        message="Please select your campus."
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

      {userType === "4" ? (
        <View />
      ) : (
        <TextInput
          style={styles.inputTwo}
          onChangeText={(text) => setBatch(text)}
          placeholder="Batch Year i.e. 2017"
          keyboardType="number-pad"
        />
      )}

      <AwesomeAlert
        show={showAlert7}
        showProgress={false}
        title="Batch is required!"
        message="Please enter your batch i.e. 2017."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Okay"
        confirmButtonStyle={styles.confirmBtn}
        confirmButtonColor="#e62b05"
        onConfirmPressed={hideAlert7Handler}
        confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
        messageStyle={{ textAlign: "justify" }}
        contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
      />

      {/* phone */}
      <TextInput
        style={styles.inputTwo}
        // value={phone}
        onChangeText={(text) => setPhone("+92" + text)}
        placeholder="Phone i.e. 03001112222"
        keyboardType="number-pad"
      />

      <AwesomeAlert
        show={showAlert8}
        showProgress={false}
        title="Phone is required!"
        message="Please enter your phone number."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Okay"
        confirmButtonStyle={styles.confirmBtn}
        confirmButtonColor="#e62b05"
        onConfirmPressed={hideAlert8Handler}
        confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
        messageStyle={{ textAlign: "justify" }}
        contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
      />

      <AwesomeAlert
        show={showAlert9}
        showProgress={false}
        title="Success"
        message="Verification code has been sent to your phone."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Okay"
        confirmButtonStyle={styles.confirmBtn}
        confirmButtonColor="#e62b05"
        onConfirmPressed={hideAlert9Handler}
        confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
        messageStyle={{ textAlign: "justify" }}
        contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
      />

      <AwesomeAlert
        show={showAlert10}
        showProgress={false}
        title="Invalid Phone"
        message="Please enter a valid phone number."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Okay"
        confirmButtonStyle={styles.confirmBtn}
        confirmButtonColor="#e62b05"
        onConfirmPressed={hideAlert10Handler}
        confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
        messageStyle={{ textAlign: "justify" }}
        contentContainerStyle={{ width: width / 1.4, height: width / 2.1 }}
      />
      <View>
        <Button block style={styles.btn} onPress={validateInfo}>
          <Text
            style={[
              styles.text,
              { marginTop: 5, color: "#fff", fontSize: RFPercentage(3) },
            ]}
          >
            {" "}
            Next{" "}
          </Text>
        </Button>
      </View>
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#e62b05",
    borderWidth: 1.5,
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    marginTop: 5,
    height: Dimensions.get("window").width / 3.5,
  },
  inputTwo: {
    borderColor: "#e62b05",
    borderWidth: 1.5,
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontFamily: font.primary,
    color: "black",
    fontSize: RFPercentage(2.4),
  },
  btn: {
    marginVertical: 15,
    marginTop: 20,
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
  confirmBtn: {
    width: 60,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUp2;
