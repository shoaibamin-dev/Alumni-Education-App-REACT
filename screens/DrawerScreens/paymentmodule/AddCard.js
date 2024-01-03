// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity,
// } from "react-native";
// import { RFPercentage } from "react-native-responsive-fontsize";
// import Font from "../../../shared/font";
// import { Ionicons } from "@expo/vector-icons";
// import { TextInput } from "react-native-gesture-handler";

// export default function AddCard({ navigation }) {
//   return (
//     <View style={styles.bg}>
//       <View style={styles.title}>
//         <View style={styles.titleTwo}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <Ionicons name="chevron-back" size={28} color="white" />
//             </View>
//           </TouchableOpacity>
//           <Text style={styles.add}>Add Card</Text>
//           <View style={{ width: "10%" }} />
//         </View>
//       </View>

//       <View style={styles.insidev}>
//         <Text style={styles.cn}>Card Number</Text>
//         <TextInput placeholder="Enter Card Number" style={styles.tiOne} />
//         <View style={styles.row}>
//           <View style={styles.space}>
//             <Text style={styles.exp}>Expiration Date</Text>
//             <TextInput placeholder="Expiration Date" style={styles.tiTwo} />
//           </View>
//           <View style={styles.space}>
//             <Text style={styles.exp}>Security Code</Text>
//             <TextInput placeholder="CVC" style={styles.tiTwo} />
//           </View>
//         </View>
//         <Text style={styles.exp}>Card Holder</Text>
//         <TextInput placeholder="Enter Card Number" style={styles.tiOne} />
//       </View>

//       <TouchableOpacity onPress={() => navigation.navigate("usercard")}>
//         <View style={styles.card}>
//           <Text style={styles.addcard}>Add Card</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   bg: {
//     height: Dimensions.get("screen").height,
//     width: Dimensions.get("screen").width,
//     display: "flex",
//     flex: 1,
//     alignItems: "center",
//     backgroundColor: "white",
//   },
//   title: {
//     width: Dimensions.get("screen").width,
//     height: Dimensions.get("screen").height / 8.5,
//     backgroundColor: "#5657C8",
//     display: "flex",
//     paddingLeft: Dimensions.get("window").width / 30,
//     justifyContent: "flex-start",
//   },
//   msgs: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: RFPercentage(3),
//     fontFamily: Font.primary,
//   },
//   add: {
//     fontFamily: Font.primary,
//     fontWeight: "bold",
//     color: "white",
//     fontSize: RFPercentage(4),
//   },
//   titleTwo: {
//     alignItems: "center",
//     flexDirection: "row",
//     width: "100%",
//     height: Dimensions.get("screen").height / 7.5,
//     justifyContent: "space-between",
//   },
//   insidev: {
//     width: Dimensions.get("screen").width / 1.2,
//     justifyContent: "space-around",
//     marginTop: Dimensions.get("window").width / 15,
//     backgroundColor: "white",
//     height: Dimensions.get("screen").height / 2.5,
//   },
//   cn: {
//     fontFamily: Font.primary,
//     fontWeight: "bold",
//     fontSize: RFPercentage(3),
//   },
//   tiOne: {
//     borderWidth: 1,
//     borderColor: "lightgrey",
//     width: Dimensions.get("screen").width / 1.2,
//     height: Dimensions.get("window").height / 15,
//     paddingLeft: 20,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: Dimensions.get("screen").width / 1.2,
//   },
//   exp: {
//     fontFamily: Font.primary,
//     fontWeight: "bold",
//     fontSize: RFPercentage(3),
//     fontFamily: Font.primary,
//   },
//   tiTwo: {
//     borderWidth: 1,
//     borderColor: "lightgrey",
//     width: Dimensions.get("screen").width / 2.5,
//     height: Dimensions.get("window").height / 15,
//     paddingLeft: 20,
//   },
//   space: {
//     justifyContent: "space-between",
//     height: Dimensions.get("window").height / 8,
//   },
//   card: {
//     marginTop: Dimensions.get("window").width / 20,
//     width: Dimensions.get("screen").width / 1.2,
//     height: Dimensions.get("window").height / 15,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "darkblue",
//     borderRadius: 5,
//   },
//   addcard: {
//     color: "white",
//     fontSize: RFPercentage(3),
//     fontWeight: "bold",
//     fontFamily: Font.primary,
//   },
// });
