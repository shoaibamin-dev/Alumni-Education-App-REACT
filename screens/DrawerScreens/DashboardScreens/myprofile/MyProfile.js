import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import font from "../../../../shared/font";
import { useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";

export default function MyProfile({ navigation }) {
  const [aboutModal, setAboutModal] = useState(false);
  const [interestsModal, setInterestsModal] = useState(false);
  const [educationModal, setEducationModal] = useState(false);
  const [editEducationModal, setEditEducationModal] = useState(false);
  const [employmentModal, setEmploymentModal] = useState(false);
  const [editEmploymentModal, setEditEmploymentModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [image, setImage] = useState("");
  const [imageURI, setImageURI] = useState("");
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [startYear, setStartYear] = useState("");
  const [lastYear, setLastYear] = useState("");

  const [position, setPostion] = useState("");
  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState("");
  const [startJobYear, setStartJobYear] = useState("");
  const [lastJobYear, setLastJobYear] = useState("");

  const userProfile = useSelector((state) => state.emailAuth);
  const userEducation = useSelector((state) => state.emailAuth.education);
  const userEmployment = useSelector((state) => state.emailAuth.employment);

  const [newAbout, setNewAbout] = useState(userProfile.about);
  const [education, setEducation] = useState(userEducation);
  console.log("EDUCATION", education);
  const [employment, setEmployment] = useState(userEmployment);
  const [eduId, setEduId] = useState(null);
  const [empId, setEmpId] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  console.log("PROFILE ", userProfile);

  const updateProfileHandler = async () => {
    const formData = new FormData();

    formData.append("first_name", userProfile.firstname);
    formData.append("last_name", userProfile.lastname);
    formData.append("email", userProfile.email);
    formData.append("about", newAbout);
    formData.append("age", userProfile.age);
    formData.append("gender", userProfile.gender);
    formData.append("user_type", userProfile.user_type);
    formData.append("image_url", image);
    formData.append("education", JSON.stringify(education));
    formData.append("employment", JSON.stringify(employment));
    formData.append("phone", userProfile.phone);
    formData.append("city", userProfile.city);
    formData.append("campus", "");
    formData.append("batch_year", "");

    const response = await fetch(
      "https://apanapp.herokuapp.com/api/user/update/profile",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userProfile.token}`,
        },
        body: formData,
      }
    );
    const resData = await response.json();
    setIsUpdated(false);
    console.log("UPDATED", resData);
  };

  const aboutToggle = () => {
    setAboutModal(!aboutModal);
  };

  const aboutSaveHandler = () => {
    setIsUpdated(true);
    setNewAbout(newAbout);
    aboutToggle();
  };

  const otherProfileToggle = () => {
    setProfileModal(!profileModal);
  };

  const saveOtherProfileDetails = () => {
    setIsUpdated(true);
  };

  // const interestsToggle = () => {
  //   setInterestsModal(!interestsModal);
  // };

  const educationToggle = () => {
    setEducationModal(!educationModal);
  };

  const editEducationToggle = (id) => {
    const selectedEdu = education.find((edu) => edu.id === id);
    console.log(selectedEdu);
    setDegree(selectedEdu?.degree);
    setInstitution(selectedEdu?.institution);
    setStartYear(selectedEdu?.startYear);
    setLastYear(selectedEdu?.lastYear);
    setEditEducationModal(!editEducationModal);
    setEduId(id);
  };

  const employmentToggle = () => {
    setEmploymentModal(!employmentModal);
  };

  const editEmploymentToggle = (id) => {
    const selectedEmp = employment.find((edu) => edu.id === id);
    console.log(selectedEmp);
    setEduId(id);
    setPostion(selectedEmp?.position);
    setCompany(selectedEmp?.company);
    setExperience(selectedEmp?.experience);
    setStartJobYear(selectedEmp?.startJobYear);
    setLastJobYear(selectedEmp?.lastJobYear);
    setEditEmploymentModal(!editEmploymentModal);
    setEmpId(id);
  };

  //save education
  const saveEduHandler = () => {
    const index = education.findIndex((edu) => edu.id === eduId);
    console.log("INDEX", index);
    education[index].degree = degree;
    education[index].institution = institution;
    education[index].startYear = startYear;
    education[index].lastYear = lastYear;
    setIsUpdated(true);
    editEducationToggle();
  };

  //save employment
  const saveEmpHandler = () => {
    const index = employment.findIndex((edu) => edu.id === empId);
    console.log("INDEX", index);
    employment[index].position = position;
    employment[index].company = company;
    employment[index].experience = experience;
    employment[index].startJobYear = startJobYear;
    employment[index].lastJobYear = lastJobYear;
    setIsUpdated(true);
    editEmploymentToggle();
  };

  //add education
  const addEducationHandler = () => {
    setEducation([
      ...education,
      {
        id: education.length + 1,
        degree,
        institution,
        startYear,
        lastYear,
      },
    ]);
    educationToggle();
    setIsUpdated(true);
  };

  // delete the education
  const deleteEducation = (id) => {
    setIsUpdated(true);
    const filterEducation = userEducation.filter((item) => item.id !== id);
    setEducation(filterEducation);
  };

  const deleteEmployment = (id) => {
    setIsUpdated(true);
    const filterEmployment = userEmployment.filter((item) => item.id !== id);
    setEmployment(filterEmployment);
  };

  //add employment
  const addEmploymentHandler = () => {
    setEmployment([
      ...employment,
      {
        id: employment.length + 1,
        position,
        company,
        experience,
        startJobYear,
        lastJobYear,
      },
    ]);
    employmentToggle();
    setIsUpdated(true);
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

  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="microsoft-xbox-controller-menu"
          size={30}
          color="#fff"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.openDrawer()}
        />
        <Text
          style={[
            styles.text,
            {
              color: "#fff",
              fontSize: RFPercentage(3.2),
              textTransform: "capitalize",
            },
          ]}
        >
          {userProfile?.firstname + " " + userProfile?.lastname}
        </Text>
        <View style={{ width: "10%" }} />
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#e62b05",
              width: "100%",
              padding: 10,
            }}
          >
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: imageURI
                    ? imageURI
                    : `data:image/jpeg;base64,${userProfile.profile_img}`,
                }}
                resizeMode="cover"
              />
            </View>
            <TouchableOpacity onPress={launchLibrary}>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#fff",
                    marginTop: 10,
                    fontSize: RFPercentage(2.5),
                  },
                ]}
              >
                {" "}
                Change Photo
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.updateLayout}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.text,
                  { fontSize: RFPercentage(3), fontFamily: font.primaryBold },
                ]}
              >
                {" "}
                About Me
              </Text>
              <Feather
                name="edit-3"
                size={24}
                color="black"
                onPress={aboutToggle}
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
            <Text style={styles.text}> {newAbout} </Text>
          </View>

          {/* About me modal */}
          <Modal animationType="slide" transparent={true} visible={aboutModal}>
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
                    About Me
                  </Text>
                  <AntDesign
                    name="closecircle"
                    size={24}
                    color="black"
                    onPress={aboutToggle}
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
                  style={styles.input}
                  multiline={true}
                  value={newAbout}
                  onChangeText={(text) => setNewAbout(text)}
                />
                <TouchableOpacity
                  onPress={aboutSaveHandler}
                  style={styles.saveBtn}
                >
                  <Text
                    style={[
                      styles.text,
                      { color: "#e62b05", fontSize: RFPercentage(2.6) },
                    ]}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View
            style={{
              borderColor: "#ccc",
              borderWidth: 0.7,
              width: "100%",
              marginBottom: 15,
            }}
          />

          <View style={styles.updateLayout}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.text,
                  { fontSize: RFPercentage(3), fontFamily: font.primaryBold },
                ]}
              >
                {" "}
                Other Profile Details
              </Text>
              <Feather
                name="edit-3"
                size={24}
                color="black"
                onPress={otherProfileToggle}
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
            {/* <View> */}
            <Text style={styles.text}> Email: {userProfile.email}</Text>
            <Text style={styles.text}> Age: {userProfile.age}</Text>
            <Text style={styles.text}> Gender: {userProfile.gender}</Text>
            <Text style={styles.text}>
              {" "}
              Role:{" "}
              {userProfile.user_type === 1
                ? "Alumni"
                : "" || userProfile.user_type === 2
                ? "Student"
                : "" || userProfile.user_type === 3
                ? "Teacher"
                : "" || userProfile.user_type === 4
                ? "Staff"
                : ""}
            </Text>
            <Text style={styles.text}> Phone: {userProfile.phone}</Text>
            <Text style={styles.text}> City: {userProfile.city}</Text>
            <Text style={styles.text}> Campus: {userProfile?.campus}</Text>
            <Text style={styles.text}> Batch: {userProfile?.batch_year}</Text>
            {/* </View> */}
          </View>

          {/* other profile modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={profileModal}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={[
                  styles.modalView,
                  { height: Dimensions.get("window").height / 2.2 },
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
                    Edit Profile Details
                  </Text>
                  <AntDesign
                    name="closecircle"
                    size={24}
                    color="black"
                    onPress={otherProfileToggle}
                  />
                </View>
                <View
                  style={{
                    borderColor: "#ccc",
                    borderWidth: 0.7,
                    width: "100%",
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View style={{ padding: 7, paddingBottom: 80 }}>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}>
                        {" "}
                        You can only update below details.{" "}
                      </Text>
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> City: </Text>
                      <TextInput style={styles.input2} />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Campus: </Text>
                      <TextInput style={styles.input2} />
                    </View>
                    <TouchableOpacity
                      onPress={saveOtherProfileDetails}
                      style={styles.saveBtn}
                    >
                      <Text
                        style={[
                          styles.text,
                          { color: "#e62b05", fontSize: RFPercentage(2.6) },
                        ]}
                      >
                        Save
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>

          {/* <View style={styles.updateLayout}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.text,
                  { fontSize: RFPercentage(3), fontFamily: font.primaryBold },
                ]}
              >
                {" "}
                Interests
              </Text>
              <Feather
                name="edit-3"
                size={24}
                color="black"
                onPress={interestsToggle}
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

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <View style={styles.interestBox}>
                <Text
                  style={[
                    styles.text,
                    { color: "#fff", fontSize: RFPercentage(1.8) },
                  ]}
                >
                  {" "}
                  Book Reading{" "}
                </Text>
                <AntDesign name="close" size={16} color="#fff" />
              </View>
              <View style={styles.interestBox}>
                <Text
                  style={[
                    styles.text,
                    { color: "#fff", fontSize: RFPercentage(1.8) },
                  ]}
                >
                  {" "}
                  Painting{" "}
                </Text>
                <AntDesign name="close" size={16} color="#fff" />
              </View>
              <View style={styles.interestBox}>
                <Text
                  style={[
                    styles.text,
                    { color: "#fff", fontSize: RFPercentage(1.8) },
                  ]}
                >
                  {" "}
                  painting{" "}
                </Text>
                <AntDesign name="close" size={16} color="#fff" />
              </View>
              <View style={styles.interestBox}>
                <Text
                  style={[
                    styles.text,
                    { color: "#fff", fontSize: RFPercentage(1.8) },
                  ]}
                >
                  {" "}
                  Book Reading{" "}
                </Text>
                <AntDesign name="close" size={16} color="#fff" />
              </View>
              <View style={styles.interestBox}>
                <Text
                  style={[
                    styles.text,
                    { color: "#fff", fontSize: RFPercentage(1.8) },
                  ]}
                >
                  {" "}
                  Book Reading{" "}
                </Text>
                <AntDesign name="close" size={16} color="#fff" />
              </View>
            </View>
          </View> */}

          {/* interests modal */}
          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={interestsModal}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={[
                  styles.modalView,
                  { height: Dimensions.get("window").height / 1.4 },
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
                    Add Interest
                  </Text>
                  <AntDesign
                    name="closecircle"
                    size={24}
                    color="black"
                    onPress={interestsToggle}
                  />
                </View>
                <View
                  style={{
                    borderColor: "#ccc",
                    borderWidth: 0.7,
                    width: "100%",
                    marginBottom: 10,
                  }}
                />
                <ScrollView>
                  <View style={{ padding: 7, paddingBottom: 80 }}>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Interest 1: </Text>
                      <TextInput style={styles.input2} />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Interest 2: </Text>
                      <TextInput style={styles.input2} />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Interest 3 : </Text>
                      <TextInput style={styles.input2} />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Interest 4: </Text>
                      <TextInput style={styles.input2} />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Interest 5: </Text>
                      <TextInput style={styles.input2} />
                    </View>
                    <TouchableOpacity onPress={() => {}} style={styles.saveBtn}>
                      <Text
                        style={[
                          styles.text,
                          { color: "#e62b05", fontSize: RFPercentage(2.6) },
                        ]}
                      >
                        Save
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal> */}

          <View
            style={{
              borderColor: "#ccc",
              borderWidth: 0.7,
              width: "100%",
              marginBottom: 15,
            }}
          />

          <View style={styles.updateLayout}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.text,
                  { fontSize: RFPercentage(3), fontFamily: font.primaryBold },
                ]}
              >
                {" "}
                Education
              </Text>
              <AntDesign
                name="pluscircle"
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
                marginBottom: 10,
              }}
            />
            {education.map((elements) => (
              <View style={styles.card} key={elements.id}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={[
                      styles.row,
                      { justifyContent: "flex-start", marginBottom: 5 },
                    ]}
                  >
                    <Text style={styles.text}> Degree: </Text>
                    <Text style={styles.text}> {elements.degree} </Text>
                  </View>
                  <View>
                    <AntDesign
                      name="close"
                      size={20}
                      color="black"
                      onPress={deleteEducation.bind(this, elements.id)}
                    />
                  </View>
                </View>
                <View
                  style={[
                    styles.row,
                    { justifyContent: "flex-start", marginBottom: 5 },
                  ]}
                >
                  <Text style={styles.text}> Institution: </Text>
                  <Text style={styles.text}> {elements.institution} </Text>
                </View>
                <View
                  style={[
                    styles.row,
                    { justifyContent: "flex-start", marginBottom: 5 },
                  ]}
                >
                  <Text style={styles.text}> Start Year: </Text>
                  <Text style={styles.text}> {elements.startYear} </Text>
                </View>

                <View
                  style={[
                    styles.row,
                    { justifyContent: "flex-start", marginBottom: 5 },
                  ]}
                >
                  <Text style={styles.text}> End Year: </Text>
                  <Text style={styles.text}> {elements.lastYear} </Text>
                </View>
                <TouchableOpacity
                  onPress={editEducationToggle.bind(this, elements.id)}
                  style={{ alignSelf: "flex-end" }}
                >
                  <Text
                    style={[
                      styles.text,
                      { color: "#e62b05", fontSize: RFPercentage(2.5) },
                    ]}
                  >
                    {" "}
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* add education modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={educationModal}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={[
                  styles.modalView,
                  { height: Dimensions.get("window").height / 1.6 },
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
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View style={{ padding: 7, paddingBottom: 80 }}>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Degree: </Text>
                      <TextInput
                        style={styles.input2}
                        onChangeText={(text) => setDegree(text)}
                      />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Institution: </Text>
                      <TextInput
                        style={styles.input2}
                        onChangeText={(text) => setInstitution(text)}
                      />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Start Year: </Text>
                      <TextInput
                        style={styles.input2}
                        onChangeText={(text) => setStartYear(text)}
                      />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> End Year: </Text>
                      <TextInput
                        style={styles.input2}
                        onChangeText={(text) => setLastYear(text)}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={addEducationHandler}
                      style={styles.saveBtn}
                    >
                      <Text
                        style={[
                          styles.text,
                          { color: "#e62b05", fontSize: RFPercentage(2.6) },
                        ]}
                      >
                        Save
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>

          {/* edit education modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={editEducationModal}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: 5,
              }}
            >
              <View
                style={[
                  styles.modalView,
                  { height: Dimensions.get("window").height / 1.6 },
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
                    Edit Education
                  </Text>
                  <AntDesign
                    name="closecircle"
                    size={24}
                    color="black"
                    onPress={editEducationToggle}
                  />
                </View>
                <View
                  style={{
                    borderColor: "#ccc",
                    borderWidth: 0.7,
                    width: "100%",
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View style={{ padding: 7, paddingBottom: 80 }}>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Degree: </Text>
                      <TextInput
                        style={styles.input2}
                        value={degree}
                        onChangeText={(text) => setDegree(text)}
                      />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Institution: </Text>
                      <TextInput
                        style={styles.input2}
                        value={institution}
                        onChangeText={(text) => setInstitution(text)}
                      />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Start Year: </Text>
                      <TextInput
                        style={styles.input2}
                        value={startYear}
                        onChangeText={(text) => setStartYear(text)}
                      />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> End Year: </Text>
                      <TextInput
                        style={styles.input2}
                        value={lastYear}
                        onChangeText={(text) => setLastYear(text)}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={saveEduHandler}
                      style={styles.saveBtn}
                    >
                      <Text
                        style={[
                          styles.text,
                          { color: "#e62b05", fontSize: RFPercentage(2.6) },
                        ]}
                      >
                        Save
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>

          <View style={styles.updateLayout}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.text,
                  { fontSize: RFPercentage(3), fontFamily: font.primaryBold },
                ]}
              >
                {" "}
                Employment
              </Text>
              <AntDesign
                name="pluscircle"
                size={24}
                color="black"
                onPress={employmentToggle}
              />
            </View>
            <View
              style={{
                borderColor: "#ccc",
                borderWidth: 0.7,
                width: "100%",
                marginBottom: 10,
              }}
            />
            {employment.map((elements) => (
              <View style={styles.card} key={elements.id}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={[
                      styles.row,
                      { justifyContent: "flex-start", marginBottom: 5 },
                    ]}
                  >
                    <Text style={styles.text}> Position: </Text>
                    <Text style={styles.text}> {elements.position} </Text>
                  </View>
                  <View>
                    <AntDesign
                      name="close"
                      size={20}
                      color="black"
                      onPress={deleteEmployment.bind(this, elements.id)}
                    />
                  </View>
                </View>
                <View
                  style={[
                    styles.row,
                    { justifyContent: "flex-start", marginBottom: 5 },
                  ]}
                >
                  <Text style={styles.text}> Company: </Text>
                  <Text style={styles.text}> {elements.company} </Text>
                </View>
                <View
                  style={[
                    styles.row,
                    { justifyContent: "flex-start", marginBottom: 5 },
                  ]}
                >
                  <Text style={styles.text}> Experience: </Text>
                  <Text style={styles.text}> {elements.experience} </Text>
                </View>
                <View
                  style={[
                    styles.row,
                    { justifyContent: "flex-start", marginBottom: 5 },
                  ]}
                >
                  <Text style={styles.text}> Start Year: </Text>
                  <Text style={styles.text}> {elements.startJobYear} </Text>
                </View>

                <View
                  style={[
                    styles.row,
                    { justifyContent: "flex-start", marginBottom: 5 },
                  ]}
                >
                  <Text style={styles.text}> End Year: </Text>
                  <Text style={styles.text}> {elements.lastJobYear} </Text>
                </View>
                <TouchableOpacity
                  onPress={editEmploymentToggle.bind(this, elements.id)}
                  style={{ alignSelf: "flex-end" }}
                >
                  <Text
                    style={[
                      styles.text,
                      { color: "#e62b05", fontSize: RFPercentage(2.5) },
                    ]}
                  >
                    {" "}
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* add employment modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={employmentModal}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: 5,
              }}
            >
              <View
                style={[
                  styles.modalView,
                  { height: Dimensions.get("window").height / 1.6 },
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
                    onPress={employmentToggle}
                  />
                </View>
                <View
                  style={{
                    borderColor: "#ccc",
                    borderWidth: 0.7,
                    width: "100%",
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View style={{ padding: 7, paddingBottom: 80 }}>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Position: </Text>
                      <TextInput
                        style={styles.input2}
                        onChangeText={(text) => setPostion(text)}
                      />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Company: </Text>
                      <TextInput
                        style={styles.input2}
                        onChangeText={(text) => setCompany(text)}
                      />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Experience: </Text>
                      <TextInput
                        style={styles.input2}
                        onChangeText={(text) => setExperience(text)}
                      />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Start Year: </Text>
                      <TextInput
                        style={styles.input2}
                        onChangeText={(text) => setStartJobYear(text)}
                      />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> End Year: </Text>
                      <TextInput
                        style={styles.input2}
                        onChangeText={(text) => setLastJobYear(text)}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={addEmploymentHandler}
                      style={styles.saveBtn}
                    >
                      <Text
                        style={[
                          styles.text,
                          { color: "#e62b05", fontSize: RFPercentage(2.6) },
                        ]}
                      >
                        Save
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>

          {/* edit employment modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={editEmploymentModal}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: 5,
              }}
            >
              <View
                style={[
                  styles.modalView,
                  { height: Dimensions.get("window").height / 1.6 },
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
                    Edit Employment
                  </Text>
                  <AntDesign
                    name="closecircle"
                    size={24}
                    color="black"
                    onPress={editEmploymentToggle}
                  />
                </View>
                <View
                  style={{
                    borderColor: "#ccc",
                    borderWidth: 0.7,
                    width: "100%",
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View style={{ padding: 7, paddingBottom: 80 }}>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Position: </Text>
                      <TextInput style={styles.input2} value={position} />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Company: </Text>
                      <TextInput style={styles.input2} value={company} />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Experience: </Text>
                      <TextInput style={styles.input2} value={experience} />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> Start Year: </Text>
                      <TextInput style={styles.input2} value={startJobYear} />
                    </View>
                    <View style={{ marginBottom: 7 }}>
                      <Text style={styles.text}> End Year: </Text>
                      <TextInput style={styles.input2} value={lastJobYear} />
                    </View>
                    <TouchableOpacity
                      onPress={saveEmpHandler}
                      style={styles.saveBtn}
                    >
                      <Text
                        style={[
                          styles.text,
                          { color: "#e62b05", fontSize: RFPercentage(2.6) },
                        ]}
                      >
                        Save
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>

          {isUpdated ? (
            <TouchableOpacity
              onPress={updateProfileHandler}
              style={styles.saveBtn}
            >
              <Text
                style={[
                  styles.text,
                  { color: "#e62b05", fontSize: RFPercentage(2.6) },
                ]}
              >
                Update
              </Text>
            </TouchableOpacity>
          ) : (
            <View onPress={() => {}} style={styles.saveBtn}>
              <Text
                style={[
                  styles.text,
                  { color: "#888", fontSize: RFPercentage(2.6) },
                ]}
              >
                Update
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  header: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 8.5,
    paddingTop: Dimensions.get("window").width / 18,
    flexDirection: "row",
    backgroundColor: "#e62b05",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },
  imageContainer: {
    borderColor: "#fff",
    borderWidth: 1,
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  updateLayout: {
    borderColor: "#888",
    borderWidth: 0.7,
    padding: 10,
    borderRadius: 8,
    width: "100%",
    marginVertical: 15,
  },
  text: {
    color: "black",
    fontSize: RFPercentage(2.2),
    fontFamily: font.primary,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  interestBox: {
    padding: 4,
    backgroundColor: "#e62b05",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    marginBottom: 10,
    flexDirection: "row",
  },
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 7,
    marginVertical: 5,
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  modalView: {
    width: "95%",
    height: Dimensions.get("window").width / 1.7,
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
  input2: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 5,
  },
  saveBtn: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
});
