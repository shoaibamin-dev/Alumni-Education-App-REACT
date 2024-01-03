// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   Image,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { RFPercentage } from "react-native-responsive-fontsize";
// import Font from "../../../shared/font";

// export default function UserCard({ navigation }) {
//   return (
//     <View style={styles.bg}>
//       <View style={styles.title}>
//         <View style={styles.titleTwo}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <Ionicons name="chevron-back" size={28} color="white" />
//             </View>
//           </TouchableOpacity>
//           <Text style={styles.add} numberOfLines={1}>
//             Ahsan Hussain
//           </Text>
//           <View style={{ width: "5%" }} />
//         </View>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.divThree}>
//           <View style={styles.divFour}>
//             <Image
//               source={require("../../../assets/images/mastercard.png")}
//               resizeMode="contain"
//               style={styles.mastercard}
//             />
//             <View style={{ marginTop: -100 }}>
//               <View style={styles.rowOne}>
//                 <Text style={styles.text}>6326</Text>
//                 <Text style={styles.text}>9124</Text>
//                 <Text style={styles.text}>8124</Text>
//                 <Text style={styles.text}>9875</Text>
//               </View>
//               <View>
//                 <View style={styles.rowTwo}>
//                   <Text style={styles.lg}>CARD HOLDER</Text>
//                   <Text style={styles.lg}>Card Save</Text>
//                 </View>
//                 <View style={styles.rowThree}>
//                   <Text style={styles.lf}>Lailyfa Febrina</Text>
//                   <Text style={styles.lf}>19/42</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={styles.insidev}>
//           <Text style={styles.cn}>Card Number</Text>
//           <TextInput placeholder="Enter Card Number" style={styles.tiOne} />
//           <View style={styles.row}>
//             <View style={styles.space}>
//               <Text style={styles.exp}>Expiration Date</Text>
//               <TextInput placeholder="Expiration Date" style={styles.tiTwo} />
//             </View>
//             <View style={styles.space}>
//               <Text style={styles.exp}>Security Code</Text>
//               <TextInput placeholder="CVC" style={styles.tiTwo} />
//             </View>
//           </View>
//           <Text style={styles.exp}>Card Holder</Text>
//           <TextInput placeholder="Enter Card Number" style={styles.tiOne} />
//         </View>

//         <TouchableOpacity onPress={() => navigation.navigate("cards")}>
//           <View style={styles.card}>
//             <Text style={styles.addcard}>Save Card</Text>
//           </View>
//         </TouchableOpacity>
//       </ScrollView>
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

//   text: {
//     fontWeight: "bold",
//     color: "white",
//     fontSize: RFPercentage(4),
//     fontFamily: Font.primary,
//   },
//   lg: {
//     color: "lightgrey",
//     fontWeight: "bold",
//     fontFamily: Font.primary,
//     fontSize: RFPercentage(2.2),
//   },
//   lf: {
//     color: "white",
//     fontFamily: Font.primary,
//     fontSize: RFPercentage(2.2),
//     fontWeight: "bold",
//   },
//   divThree: {
//     marginTop: Dimensions.get("window").width / 20,
//     backgroundColor: "blue",
//     width: Dimensions.get("screen").width / 1.1,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//   },
//   divFour: {
//     backgroundColor: "blue",
//     width: Dimensions.get("screen").width / 1.3,
//     height: Dimensions.get("screen").height / 3,
//     justifyContent: "space-around",
//   },
//   card: {
//     marginTop: Dimensions.get("window").width / 20,
//     width: Dimensions.get("screen").width / 1.2,
//     height: Dimensions.get("window").height / 15,
//     alignItems: "center",
//     alignSelf: "center",
//     justifyContent: "center",
//     backgroundColor: "darkblue",
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   addcard: {
//     color: "white",
//     fontSize: RFPercentage(3),
//     fontWeight: "bold",
//     fontFamily: Font.primary,
//   },
//   mastercard: {
//     height: Dimensions.get("window").height / 7,
//     width: Dimensions.get("window").width / 7,
//   },
//   rowOne: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   rowTwo: {
//     width: Dimensions.get("window").width / 1.9,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   rowThree: {
//     flexDirection: "row",
//     width: Dimensions.get("window").width / 2.2,
//     justifyContent: "space-between",
//   },
//   insidev: {
//     alignSelf: "center",
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
// });
