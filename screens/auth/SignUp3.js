import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import font from "../../shared/font";
import { RFPercentage } from "react-native-responsive-fontsize";
import { AntDesign, Fontisto } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Text, Picker } from "native-base";
// import { set } from "react-native-reanimated";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import AwesomeAlert from "react-native-awesome-alerts";
const { width } = Dimensions.get("window");

const SignUp3 = (props) => {
  const verificationID = props.navigation.getParam("verificationId");
  const phoneNumber = props.navigation.getParam("phoneNumber");
  const [isVerified, setIsVerified] = useState(false);
  const [eduModal, setEduModal] = useState(false);
  const [empModal, setEmpModal] = useState(false);
  const [isEduFilled, setIsEduFilled] = useState(false);
  const [isEmpFilled, setIsEmpFilled] = useState(false);

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
      showAlert1Handler();
      // Alert.alert("Verification code has been sent to your phone.");
    } catch (err) {
      showAlert2Handler();
      // Alert.alert("Please enter a valid verification code.");
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
        showAlert3Handler();
        // Alert.alert("Please verify the valid OTP!");
      } else {
        const credential = firebase.auth.PhoneAuthProvider.credential(
          validVerificationID,
          verificationCode
        );
        const res = await firebase.auth().signInWithCredential(credential);
        setIsVerified(true);
        console.log(res);
        // props.navigation.navigate("newpassword", {
        //   phoneNumber: phoneNumber,
        // });
      }
    } catch (err) {
      showAlert3Handler();
      // Alert.alert("Please enter a valid OTP!");
    }
  };

  const [educationCount, setEducationCount] = useState(1);
  const [employmentCount, setEmploymentCount] = useState(1);

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
  const [showAlert11, setShowAlert11] = useState(false);
  const [showAlert12, setShowAlert12] = useState(false);
  const [showAlert13, setShowAlert13] = useState(false);
  const [showAlert14, setShowAlert14] = useState(false);
  const [showAlert15, setShowAlert15] = useState(false);
  const [showAlert16, setShowAlert16] = useState(false);
  const [showAlert17, setShowAlert17] = useState(false);
  const [showAlert18, setShowAlert18] = useState(false);

  //education modal toggle
  const educationToggle = () => {
    setEduModal(!eduModal);
  };

  //employment modal toggle
  const empToggle = () => {
    setEmpModal(!empModal);
  };

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

  //alert 11
  const showAlert11Handler = () => {
    setShowAlert11(true);
  };

  const hideAlert11Handler = () => {
    setShowAlert11(false);
  };

  //alert 12
  const showAlert12Handler = () => {
    setShowAlert12(true);
  };

  const hideAlert12Handler = () => {
    setShowAlert12(false);
  };

  //alert 13
  const showAlert13Handler = () => {
    setShowAlert13(true);
  };

  const hideAlert13Handler = () => {
    setShowAlert13(false);
  };

  //alert 14
  const showAlert14Handler = () => {
    setShowAlert14(true);
  };

  const hideAlert14Handler = () => {
    setShowAlert14(false);
  };

  //alert 15
  const showAlert15Handler = () => {
    setShowAlert15(true);
  };

  const hideAlert15Handler = () => {
    setShowAlert15(false);
  };

  //alert 16
  const showAlert16Handler = () => {
    setShowAlert16(true);
  };

  const hideAlert16Handler = () => {
    setShowAlert16(false);
  };

  //alert 17
  const showAlert17Handler = () => {
    setShowAlert17(true);
  };

  const hideAlert17Handler = () => {
    setShowAlert17(false);
  };

  //alert 18
  const showAlert18Handler = () => {
    setShowAlert18(true);
  };

  const hideAlert18Handler = () => {
    setShowAlert18(false);
  };

  const about_ = props.navigation.getParam("about");
  const age_ = props.navigation.getParam("age");
  const gender_ = props.navigation.getParam("gender");
  const role_ = props.navigation.getParam("role");
  const phone_ = props.navigation.getParam("phone");
  const fname = props.navigation.getParam("fname");
  const lname = props.navigation.getParam("lname");
  const email_ = props.navigation.getParam("email");
  const image = props.navigation.getParam("image");
  const password_ = props.navigation.getParam("password");
  const city_ = props.navigation.getParam("city");
  const campus_ = props.navigation.getParam("campus");
  const batch_ = props.navigation.getParam("batch");

  console.log("fname", fname);
  console.log("lname", lname);
  console.log("about", about_);
  console.log("age", age_);
  console.log("gender", gender_);
  console.log("role", role_);
  console.log("phone", phone_);
  console.log("email", email_);
  console.log("password", password_);
  console.log("city", city_);
  console.log("campus", campus_);
  console.log("batch", batch_);
  console.log("image_uri", image);

  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [startYear, setStartYear] = useState("");
  const [lastYear, setLastYear] = useState("");

  console.log(startYear);
  console.log(lastYear);

  const [position, setPostion] = useState("");
  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState("");
  const [startJobYear, setStartJobYear] = useState("");
  const [lastJobYear, setLastJobYear] = useState("");

  // delete the education
  const deleteEducation = (id) => {
    setEducationCount(educationCount - 1);
    const filterEducation = userEducation.filter((item) => item.id !== id);
    setUserEducation(filterEducation);
  };

  const deleteEmployment = (id) => {
    setEmploymentCount(employmentCount - 1);
    const filterEmployment = userEmployment.filter((item) => item.id !== id);
    setUserEmployment(filterEmployment);
  };

  // const userEduDetails = [
  //   {
  //     degree: degree,
  //     institution: institution,
  //     startYear: startYear,
  //     lastYear: lastYear,
  //   },
  // ];

  // const userEmploymentDetails = [
  //   {
  //     postion: position,
  //     company: company,
  //     experience: experience,
  //     startJobYear: startJobYear,
  //     startLastYear: lastJobYear,
  //   },
  // ];

  const [userEducation, setUserEducation] = useState([]);
  console.log("EDUCATION ", userEducation);
  const [userEmployment, setUserEmployment] = useState([]);
  console.log("EMPLOYMENT ", userEducation);

  console.log("EDUCATION", userEmployment);
  console.log("EMPLOYMENT", userEmployment);

  const addEducationHandler = () => {
    //test the format of the regex
    let reg = /[0-9]\d{3}/;
    const result1 = reg.test(startYear);
    const result2 = reg.test(lastYear);
    if (degree === "") {
      showAlert4Handler();
      return;
    }
    if (institution === "") {
      showAlert5Handler();
      return;
    }
    if (startYear === "") {
      showAlert6Handler();
      return;
    }
    if (result1 === false) {
      showAlert13Handler();
      return;
    }
    if (lastYear === "") {
      showAlert7Handler();
      return;
    }
    if (result2 === false) {
      showAlert14Handler();
      return;
    }
    setEducationCount(educationCount + 1);
    setUserEducation([
      ...userEducation,
      {
        id: educationCount,
        degree,
        institution,
        startYear,
        lastYear,
      },
    ]);
    setIsEduFilled(true);
    educationToggle();
  };

  const addEmploymentHandler = () => {
    //test the format of the regex
    let reg = /[0-9]\d{3}/;
    const result1 = reg.test(startJobYear);
    const result2 = reg.test(lastJobYear);

    console.log("RESULT1", result1);
    console.log("RESULT2", result2);

    if (position === "") {
      showAlert8Handler();
      return;
    }
    if (company === "") {
      showAlert9Handler();
      return;
    }
    if (experience === "") {
      showAlert10Handler();
      return;
    }
    if (startJobYear === "") {
      showAlert11Handler();
      return;
    }
    if (result1 === false) {
      showAlert17Handler();
      return;
    }
    if (lastJobYear === "") {
      showAlert12Handler();
      return;
    }
    if (result2 === false) {
      showAlert18Handler();
      return;
    }
    setEmploymentCount(employmentCount + 1);
    setUserEmployment([
      ...userEmployment,
      {
        id: employmentCount,
        position,
        company,
        experience,
        startJobYear,
        lastJobYear,
      },
    ]);
    empToggle();
    setIsEmpFilled(true);
  };

  //login with email and password
  const signUpHandler = async () => {
    try {
      if (!isEduFilled) {
        showAlert15Handler();
        return;
      }

      if (!isEmpFilled) {
        showAlert16Handler();
        return;
      }

      const formData = new FormData();

      formData.append("first_name", fname);
      formData.append("last_name", lname);
      formData.append("email", email_);
      formData.append("password", password_);
      formData.append("about", about_);
      formData.append("age", parseInt(age_));
      formData.append("gender", gender_);
      formData.append("user_type", parseInt(role_));
      formData.append("image_url", image);
      formData.append("education", JSON.stringify(userEducation));
      formData.append("employment", JSON.stringify(userEmployment));
      formData.append("phone", phone_);
      formData.append("city", city_);
      formData.append("campus", campus_);
      formData.append("batch_year", parseInt(batch_));

      const res = await fetch(
        password_ === ""
          ? `https://apanapp.herokuapp.com/api/user/createGoogle/${role_}`
          : `https://apanapp.herokuapp.com/api/user/create/${role_}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
          body: formData,
        }
      );
      const resData = await res.json();
      console.log(resData);

      if (resData.user_created === true) {
        props.navigation.navigate("signin");
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 20,
        flexGrow: 1,
        backgroundColor: "#fff",
      }}
    >
      {/* user education */}
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={attemptInvisibleVerification}
      />

      {isVerified ? (
        <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
          <Text style={[styles.text, { color: "green" }]}>phone verified!</Text>
        </View>
      ) : (
        <View>
          <TextInput
            style={[styles.inputTwo, { marginTop: 20 }]}
            onChangeText={(text) => setVerificationCode(text)}
            value={verificationCode}
            placeholder="Verification Code"
            keyboardType="number-pad"
          />
          {resendButtonTime > 0 ? (
            <View
              style={[
                styles.otpResendView,
                { justifyContent: "space-between" },
              ]}
            >
              <Text style={styles.optText}>
                OPT expires in: {resendButtonTime}
              </Text>
              <Text style={styles.optText}> Resend </Text>
            </View>
          ) : (
            <View style={styles.otpResendView}>
              <TouchableOpacity onPress={resendVerificationCode}>
                <Text style={[styles.optText, { color: "orange" }]}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <Button block style={styles.btn} onPress={confirmCodeHandler}>
            <Text
              style={[
                styles.text,
                { color: "#fff", marginTop: 5, fontSize: RFPercentage(3) },
              ]}
            >
              Verify
            </Text>
          </Button>
        </View>
      )}

      <AwesomeAlert
        show={showAlert1}
        showProgress={false}
        title="Success"
        message="Verification code has been sent to your phone."
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

      <AwesomeAlert
        show={showAlert2}
        showProgress={false}
        title="Invalid Code"
        message="Please enter a valid verification code."
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

      <AwesomeAlert
        show={showAlert3}
        showProgress={false}
        title="Invalid OTP"
        message="Please verify a valid OTP."
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

      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}

      <View style={{ marginTop: 20 }}>
        {/*         
        <Text style={[styles.text, { fontSize: RFPercentage(3) }]}>
          {" "}
          Education
        </Text> */}

        {/* education */}
        <View
          style={{
            width: "100%",
            paddingVertical: 30,
            borderColor: "#888",
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        >
          {userEducation?.map((elements) => (
            <View key={elements.id}>
              <AntDesign
                name="closecircle"
                size={24}
                color="black"
                onPress={deleteEducation.bind(this, elements.id)}
                style={{ alignSelf: "flex-end" }}
              />

              <View style={styles.card}>
                <View style={styles.row2}>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    Degree:
                  </Text>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    {elements.degree}
                  </Text>
                </View>
                <View style={styles.row2}>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    Institution:
                  </Text>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    {elements.institution}
                  </Text>
                </View>
                <View style={styles.row2}>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    Start Year:
                  </Text>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    {elements.startYear}
                  </Text>
                </View>
                <View style={styles.row2}>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    End Year:
                  </Text>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    {elements.lastYear}
                  </Text>
                </View>
              </View>
            </View>
          ))}

          <TouchableOpacity onPress={educationToggle}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[styles.text, { marginRight: 10 }]}>
                Add Education
              </Text>
              <AntDesign name="pluscircle" size={20} color="#e62b05" />
            </View>
          </TouchableOpacity>
        </View>

        {/* add education modal */}
        <Modal animationType="slide" transparent={true} visible={eduModal}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 5,
            }}
          >
            <View style={styles.modalView}>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: RFPercentage(3),
                      fontFamily: font.primaryBold,
                    },
                  ]}
                >
                  {" "}
                  Add Education
                </Text>
                <AntDesign
                  name="closecircle"
                  size={24}
                  color="black"
                  onPress={educationToggle}
                />
              </View>
              <View
                style={{
                  borderColor: "#ccc",
                  borderWidth: 0.7,
                  width: "100%",
                  marginBottom: 15,
                }}
              />
              <TextInput
                multiline={true}
                style={styles.inputTwo}
                maxLength={250}
                onChangeText={(text) => setDegree(text)}
                placeholder="Degree"
              />

              <AwesomeAlert
                show={showAlert4}
                showProgress={false}
                title="Degree is required"
                message="Please enter your degree."
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Okay"
                confirmButtonStyle={styles.confirmBtn}
                confirmButtonColor="#e62b05"
                onConfirmPressed={hideAlert4Handler}
                confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                messageStyle={{ textAlign: "justify" }}
                contentContainerStyle={{
                  width: width / 1.4,
                  height: width / 2.1,
                }}
              />

              <TextInput
                multiline={true}
                style={styles.inputTwo}
                maxLength={250}
                onChangeText={(text) => setInstitution(text)}
                placeholder="Institution"
              />

              <AwesomeAlert
                show={showAlert5}
                showProgress={false}
                title="Institution is required."
                message="Please enter your institution"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Okay"
                confirmButtonStyle={styles.confirmBtn}
                confirmButtonColor="#e62b05"
                onConfirmPressed={hideAlert5Handler}
                confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                messageStyle={{ textAlign: "justify" }}
                contentContainerStyle={{
                  width: width / 1.4,
                  height: width / 2.1,
                }}
              />
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={{ width: "45%" }}>
                  <TextInput
                    multiline={true}
                    style={styles.inputTwo}
                    keyboardType="number-pad"
                    onChangeText={(text) => setStartYear(text)}
                    placeholder="Start Year: YYYY"
                  />
                </View>
                <View style={{ width: "10%" }} />
                <View style={{ width: "45%" }}>
                  <TextInput
                    multiline={true}
                    style={styles.inputTwo}
                    keyboardType="number-pad"
                    onChangeText={(text) => setLastYear(text)}
                    placeholder="End Year: YYYY"
                  />
                </View>
              </View>

              <AwesomeAlert
                show={showAlert7}
                showProgress={false}
                title="Last year is required."
                message="Please enter a correct last year."
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Okay"
                confirmButtonStyle={styles.confirmBtn}
                confirmButtonColor="#e62b05"
                onConfirmPressed={hideAlert7Handler}
                confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                messageStyle={{ textAlign: "justify" }}
                contentContainerStyle={{
                  width: width / 1.4,
                  height: width / 2.1,
                }}
              />

              <AwesomeAlert
                show={showAlert6}
                showProgress={false}
                title="Start year is required."
                message="Please enter a correct start year."
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Okay"
                confirmButtonStyle={styles.confirmBtn}
                confirmButtonColor="#e62b05"
                onConfirmPressed={hideAlert6Handler}
                confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                messageStyle={{ textAlign: "justify" }}
                contentContainerStyle={{
                  width: width / 1.4,
                  height: width / 2.1,
                }}
              />

              <AwesomeAlert
                show={showAlert13}
                showProgress={false}
                title="Incorrect Format"
                message="Please enter starting year in correct format."
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Okay"
                confirmButtonStyle={styles.confirmBtn}
                confirmButtonColor="#e62b05"
                onConfirmPressed={hideAlert13Handler}
                confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                messageStyle={{ textAlign: "justify" }}
                contentContainerStyle={{
                  width: width / 1.4,
                  height: width / 2.1,
                }}
              />

              <AwesomeAlert
                show={showAlert14}
                showProgress={false}
                title="Incorrect Format"
                message="Please enter ending year in correct format."
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Okay"
                confirmButtonStyle={styles.confirmBtn}
                confirmButtonColor="#e62b05"
                onConfirmPressed={hideAlert14Handler}
                confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                messageStyle={{ textAlign: "justify" }}
                contentContainerStyle={{
                  width: width / 1.4,
                  height: width / 2.1,
                }}
              />

              <TouchableOpacity
                onPress={addEducationHandler}
                style={styles.saveBtn}
              >
                <View>
                  <Text
                    style={[
                      styles.text,
                      { color: "#e62b05", fontSize: RFPercentage(2.6) },
                    ]}
                  >
                    Save
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View
          style={{
            width: "100%",
            paddingVertical: 30,
            borderColor: "#888",
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 20,
            paddingHorizontal: 10,
          }}
        >
          {userEmployment.map((elements) => (
            <View key={elements.id}>
              <AntDesign
                name="closecircle"
                size={24}
                color="black"
                onPress={deleteEmployment.bind(this, elements.id)}
                style={{ alignSelf: "flex-end" }}
              />

              <View style={styles.card}>
                <View style={styles.row2}>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    Position:
                  </Text>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    {elements.position}
                  </Text>
                </View>
                <View style={styles.row2}>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    Company:
                  </Text>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    {elements.company}
                  </Text>
                </View>
                <View style={styles.row2}>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    Experience:
                  </Text>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    {elements.experience}
                  </Text>
                </View>
                <View style={styles.row2}>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    Start Year:
                  </Text>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    {elements.startJobYear}
                  </Text>
                </View>
                <View style={styles.row2}>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    End Year:
                  </Text>
                  <Text style={[styles.text, { fontSize: RFPercentage(2.2) }]}>
                    {" "}
                    {elements.lastJobYear}
                  </Text>
                </View>
              </View>
            </View>
          ))}

          {/* add education modal */}
          <Modal animationType="slide" transparent={true} visible={empModal}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 5,
              }}
            >
              <View
                style={[
                  styles.modalView,
                  { height: Dimensions.get("window").width / 1.08 },
                ]}
              >
                <View style={styles.row}>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: RFPercentage(3),
                        fontFamily: font.primaryBold,
                      },
                    ]}
                  >
                    {" "}
                    Add Employment
                  </Text>
                  <AntDesign
                    name="closecircle"
                    size={24}
                    color="black"
                    onPress={empToggle}
                  />
                </View>
                <View
                  style={{
                    borderColor: "#ccc",
                    borderWidth: 0.7,
                    width: "100%",
                    marginBottom: 15,
                  }}
                />

                <TextInput
                  multiline={true}
                  style={styles.inputTwo}
                  maxLength={250}
                  onChangeText={(text) => setPostion(text)}
                  placeholder="Position"
                />

                <AwesomeAlert
                  show={showAlert8}
                  showProgress={false}
                  title="Position is required!"
                  message="Please enter a correct position."
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showConfirmButton={true}
                  confirmText="Okay"
                  confirmButtonStyle={styles.confirmBtn}
                  confirmButtonColor="#e62b05"
                  onConfirmPressed={hideAlert8Handler}
                  confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                  messageStyle={{ textAlign: "justify" }}
                  contentContainerStyle={{
                    width: width / 1.4,
                    height: width / 2.1,
                  }}
                />

                <TextInput
                  multiline={true}
                  style={styles.inputTwo}
                  onChangeText={(text) => setCompany(text)}
                  maxLength={250}
                  placeholder="Company"
                />

                <AwesomeAlert
                  show={showAlert9}
                  showProgress={false}
                  title="Company is required!"
                  message="Please enter company name."
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showConfirmButton={true}
                  confirmText="Okay"
                  confirmButtonStyle={styles.confirmBtn}
                  confirmButtonColor="#e62b05"
                  onConfirmPressed={hideAlert9Handler}
                  confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                  messageStyle={{ textAlign: "justify" }}
                  contentContainerStyle={{
                    width: width / 1.4,
                    height: width / 2.1,
                  }}
                />

                <TextInput
                  style={styles.inputTwo}
                  onChangeText={(text) => setExperience(text)}
                  placeholder="Years of experience"
                  keyboardType="number-pad"
                />

                <AwesomeAlert
                  show={showAlert10}
                  showProgress={false}
                  title="Experience is required!"
                  message="Please enter your experience."
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showConfirmButton={true}
                  confirmText="Okay"
                  confirmButtonStyle={styles.confirmBtn}
                  confirmButtonColor="#e62b05"
                  onConfirmPressed={hideAlert10Handler}
                  confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                  messageStyle={{ textAlign: "justify" }}
                  contentContainerStyle={{
                    width: width / 1.4,
                    height: width / 2.1,
                  }}
                />

                <View style={{ width: "100%", flexDirection: "row" }}>
                  <View style={{ width: "45%" }}>
                    <TextInput
                      style={styles.inputTwo}
                      maxLength={4}
                      onChangeText={(text) => setStartJobYear(text)}
                      placeholder="Start Year: YYYY"
                      keyboardType="number-pad"
                    />
                  </View>
                  <View style={{ width: "10%" }} />
                  <View style={{ width: "45%" }}>
                    <TextInput
                      style={styles.inputTwo}
                      maxLength={4}
                      onChangeText={(text) => setLastJobYear(text)}
                      placeholder="End Year: YYYY"
                      keyboardType="number-pad"
                    />
                  </View>
                </View>

                <AwesomeAlert
                  show={showAlert11}
                  showProgress={false}
                  title="Start Year is required!"
                  message="Please enter a starting year."
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showConfirmButton={true}
                  confirmText="Okay"
                  confirmButtonStyle={styles.confirmBtn}
                  confirmButtonColor="#e62b05"
                  onConfirmPressed={hideAlert11Handler}
                  confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                  messageStyle={{ textAlign: "justify" }}
                  contentContainerStyle={{
                    width: width / 1.4,
                    height: width / 2.1,
                  }}
                />

                <AwesomeAlert
                  show={showAlert12}
                  showProgress={false}
                  title="End year is required!"
                  message="Please enter a ending year."
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showConfirmButton={true}
                  confirmText="Okay"
                  confirmButtonStyle={styles.confirmBtn}
                  confirmButtonColor="#e62b05"
                  onConfirmPressed={hideAlert12Handler}
                  confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                  messageStyle={{ textAlign: "justify" }}
                  contentContainerStyle={{
                    width: width / 1.4,
                    height: width / 2.1,
                  }}
                />

                <AwesomeAlert
                  show={showAlert17}
                  showProgress={false}
                  title="Incorrect Format"
                  message="Please enter starting year in correct format."
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showConfirmButton={true}
                  confirmText="Okay"
                  confirmButtonStyle={styles.confirmBtn}
                  confirmButtonColor="#e62b05"
                  onConfirmPressed={hideAlert17Handler}
                  confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                  messageStyle={{ textAlign: "justify" }}
                  contentContainerStyle={{
                    width: width / 1.4,
                    height: width / 2.1,
                  }}
                />

                <AwesomeAlert
                  show={showAlert18}
                  showProgress={false}
                  title="Incorrect Format"
                  message="Please enter ending year in correct format."
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showConfirmButton={true}
                  confirmText="Okay"
                  confirmButtonStyle={styles.confirmBtn}
                  confirmButtonColor="#e62b05"
                  onConfirmPressed={hideAlert18Handler}
                  confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
                  messageStyle={{ textAlign: "justify" }}
                  contentContainerStyle={{
                    width: width / 1.4,
                    height: width / 2.1,
                  }}
                />

                <TouchableOpacity
                  onPress={addEmploymentHandler}
                  style={styles.saveBtn}
                >
                  <View>
                    <Text
                      style={[
                        styles.text,
                        { color: "#e62b05", fontSize: RFPercentage(2.6) },
                      ]}
                    >
                      Save
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity onPress={empToggle}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[styles.text, { marginRight: 10 }]}>
                Add Employment
              </Text>
              <AntDesign name="pluscircle" size={20} color="#e62b05" />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Button block style={styles.btn} onPress={signUpHandler}>
            <Text
              style={{
                fontFamily: font.primary,
                fontSize: RFPercentage(3),
                marginTop: 5,
              }}
            >
              {" "}
              Save{" "}
            </Text>
          </Button>
        </View>
        <AwesomeAlert
          show={showAlert15}
          showProgress={false}
          title="Education is required!"
          message="Please add your education."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonStyle={styles.confirmBtn}
          confirmButtonColor="#e62b05"
          onConfirmPressed={hideAlert15Handler}
          confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
          messageStyle={{ textAlign: "justify" }}
          contentContainerStyle={{
            width: width / 1.4,
            height: width / 2.1,
          }}
        />
        <AwesomeAlert
          show={showAlert16}
          showProgress={false}
          title="Employment is required!"
          message="Please enter your employments."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonStyle={styles.confirmBtn}
          confirmButtonColor="#e62b05"
          onConfirmPressed={hideAlert16Handler}
          confirmButtonTextStyle={{ fontSize: RFPercentage(2.4) }}
          messageStyle={{ textAlign: "justify" }}
          contentContainerStyle={{
            width: width / 1.4,
            height: width / 2.1,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp3;

const styles = StyleSheet.create({
  text: {
    fontFamily: font.primary,
    color: "black",
    fontSize: RFPercentage(2.4),
  },
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
  btn: {
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "#e62b05",
  },
  innerInput: {
    marginLeft: 8,
    fontSize: RFPercentage(2.4),
    alignSelf: "center",
    width: "100%",
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
  modalView: {
    width: "95%",
    height: Dimensions.get("window").width / 1.3,
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  input: {
    width: "100%",
    height: Dimensions.get("window").width / 3.5,
    borderColor: "#ccc",
    borderWidth: 1,
    textAlignVertical: "top",
    padding: 10,
  },
  saveBtn: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  card: {
    elevation: 5,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 25,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 2.5,
  },
});
