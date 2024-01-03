// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity,
// } from "react-native";
// import { RFPercentage } from "react-native-responsive-fontsize";
// import {
//   Ionicons,
//   Feather,
//   FontAwesome,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import Font from "../../../shared/font";

// export default function Payment({ navigation }) {
//   return (
//     <View style={styles.bg}>
//       <View style={styles.title}>
//         <View style={styles.titleTwo}>
//           <Text style={styles.add}>Add Card</Text>
//         </View>
//       </View>

//       <View style={styles.align}>
//         <TouchableOpacity onPress={() => navigation.navigate("cards")}>
//           <View style={styles.rowOne}>
//             <Feather name="credit-card" size={30} color="lightblue" />
//             <Text style={styles.cc}>Credit Card or Debit Card</Text>
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => {}}>
//           <View style={styles.row}>
//             <MaterialCommunityIcons name="bank" size={30} color="lightblue" />
//             <Text style={styles.cc}>Cash on delivery</Text>
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => {}}>
//           <View style={styles.row}>
//             <FontAwesome name="paypal" size={30} color="blue" />
//             <Text style={styles.cc}> Paypal</Text>
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => {}}>
//           <View style={styles.row}>
//             <MaterialCommunityIcons name="bank" size={30} color="lightblue" />
//             <Text style={styles.cc}>Bank Transfer</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   bg: {
//     height: Dimensions.get("screen").height,
//     width: Dimensions.get("screen").width,
//     display: "flex",
//     flex: 1,
//     backgroundColor: "#fff",
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
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     height: Dimensions.get("screen").height / 7.5,
//   },
//   row: {
//     flexDirection: "row",
//     width: Dimensions.get("screen").width / 1.2,
//     marginBottom: Dimensions.get("window").width / 20,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//   },
//   align: {
//     marginTop: Dimensions.get("window").width / 15,
//     width: Dimensions.get("screen").width / 1.1,
//     alignItems: "center",
//     alignSelf: "center",
//   },
//   rowOne: {
//     flexDirection: "row",
//     width: Dimensions.get("screen").width / 1.2,
//     marginBottom: Dimensions.get("window").width / 20,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//   },
//   cc: {
//     marginLeft: Dimensions.get("window").width / 10,
//     fontWeight: "bold",
//     fontFamily: Font.primary,
//     fontSize: RFPercentage(2.7),
//   },
// });
