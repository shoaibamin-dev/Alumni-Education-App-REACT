import React, { useState, useEffect } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView, { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import font from "../../shared/font";

const NearbyAlumni = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 30.3753,
    longitude: 69.3451,
  });
  console.log(currentLocation);
  const [isFetch, setIsFetch] = useState(false);

  const initialRegion = {
    latitude: currentLocation ? currentLocation.lat : 30.3753,
    longitude: currentLocation ? currentLocation.lng : 69.3451,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  let markerCoordinates;

  if (currentLocation) {
    markerCoordinates = {
      latitude: currentLocation?.lat,
      longitude: currentLocation?.lng,
    };
  }

  //verify the location permissions
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to see your nearby Alumni",
        [{ text: "Okay" }]
      );
      return false;
    } else {
      return true;
    }
  };

  //get the user current location
  const getLocationHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    } else {
      try {
        setIsFetch(true);
        const location = await Location.getCurrentPositionAsync({
          timeout: 5000,
        });
        console.log(location);
        setCurrentLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      } catch (err) {
        Alert.alert("Could not fetch location!", "Please try again!", [
          { text: "Okay" },
        ]);
      }
      setIsFetch(false);
    }
  };

  useEffect(() => {
    getLocationHandler();
  }, []);

  if (isFetch) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="e62b05" size={30} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="microsoft-xbox-controller-menu"
          size={30}
          color="#fff"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.openDrawer()}
        />
        <Text
          style={[styles.text, { color: "#fff", fontSize: RFPercentage(3.2) }]}
        >
          Nearby Alumni
        </Text>
        <View style={{ width: "10%" }} />
      </View>
      <MapView style={{ flex: 1 }} region={initialRegion}>
        {markerCoordinates && (
          <Marker
            title="Your current location"
            coordinate={markerCoordinates}
          />
        )}
      </MapView>
    </View>
  );
};

export default NearbyAlumni;

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 8.5,
    paddingTop: Dimensions.get("window").width / 18,
    backgroundColor: "#e62b05",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "black",
    fontSize: RFPercentage(2.1),
    fontFamily: font.primary,
  },
});
