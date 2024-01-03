import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Image,
  View,
  Text,
  Dimensions,
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createSwitchNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import SignIn from "../screens/auth/SignIn";
import SignUp1 from "../screens/auth/SignUp1";
import SignUp2 from "../screens/auth/SignUp2";
import SignUp3 from "../screens/auth/SignUp3";
import RecoverPassword from "../screens/auth/RecoverPassword";
import RecoveryCode from "../screens/auth/RecoveryCode";
import NewPassword from "../screens/auth/NewPassword";
import Dashboard from "../screens/DrawerScreens/DashboardScreens/Feed";
import Alumni from "../screens/DrawerScreens/DashboardScreens/alumni/Alumni";
import MyProfile from "../screens/DrawerScreens/DashboardScreens/myprofile/MyProfile";
import PreviewProfile from "../screens/DrawerScreens/DashboardScreens/myprofile/PreviewProfile";
import Community from "../screens/DrawerScreens/DashboardScreens/community/Community";
import Messages from "../screens/DrawerScreens/DashboardScreens/messaging/Messages";
import ChatBox from "../screens/DrawerScreens/DashboardScreens/messaging/ChatBox";
// import Events from "../screens/DrawerScreens/DashboardScreens/events/Events";
// import MyEvents from "../screens/DrawerScreens/DashboardScreens/events/MyEvents";
import Payment from "../screens/DrawerScreens/paymentmodule/Payment";
import AddCard from "../screens/DrawerScreens/paymentmodule/AddCard";
import Cards from "../screens/DrawerScreens/paymentmodule/Cards";
import UserCard from "../screens/DrawerScreens/paymentmodule/UserCard";
// import AvailableJobs from "../screens/DrawerScreens/AvailableJobs";
// import AvailableTasks from "../screens/DrawerScreens/AvailableTasks";
import Invitations from "../screens/DrawerScreens/Invitations";
// import MyJobs from "../screens/DrawerScreens/MyJobs";
// import MyTasks from "../screens/DrawerScreens/MyTasks";
import NearbyAlumni from "../screens/DrawerScreens/NearbyAlumni";
import StartScreen from "../StartScreen";
import font from "../shared/font";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import Header from "../components/Header";
import {
  AntDesign,
  Entypo,
  Feather,
  Fontisto,
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import Introduction from "../screens/Introduction";
import { RFPercentage } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";

//Introduction stack screen
const introStack = createStackNavigator({
  introduction: {
    screen: Introduction,
    navigationOptions: {
      headerShown: false,
    },
  },
});

// const defaultDashProductOpt = {
//   headerTintColor: "#fff",
//   headerTitleAlign: "center",
//   headerStyle: {
//     backgroundColor: "#e62b05",
//   },
//   headerTitleStyle: {
//     fontFamily: font.primary,
//     fontSize: RFPercentage(2.8),
//   },
// };

// const productStack = createStackNavigator(
//   {
//     productdetails: {
//       screen: ProductDetails,
//       navigationOptions: {
//         headerTitle: "Product",
//       },
//     },
//     store: {
//       screen: Store,
//       navigationOptions: {
//         headerTitle: "Store",
//       },
//     },
//   },
//   {
//     defaultNavigationOptions: defaultDashProductOpt,
//   }
// );

// const orderStack = createStackNavigator(
//   {
//     order: {
//       screen: Orders,
//       navigationOptions: {
//         headerTitle: () => null,
//       },
//     },
//     orderdetails: {
//       screen: OrderDetails,
//       navigationOptions: {
//         headerTitle: "Order Details",
//       },
//     },
//   },
//   {
//     defaultNavigationOptions: defaultDashProductOpt,
//   }
// );

const mainSignUpNavigator = createSwitchNavigator(
  {
    signin: {
      screen: SignIn,
    },
    signup1: {
      screen: SignUp1,
    },
    signup2: {
      screen: SignUp2,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const AuthStack = createStackNavigator(
  {
    mainSignUp: {
      screen: mainSignUpNavigator,
    },
    signup3: {
      screen: SignUp3,
    },
    newpassword: {
      screen: NewPassword,
    },
    recovcode: {
      screen: RecoveryCode,
    },
    recovpass: {
      screen: RecoverPassword,
    },
  },
  {
    defaultNavigationOptions: {
      // headerTitle: () => null,
      // headerStyle: {
      //   backgroundColor: "#6462d1",
      // },
      // headerTintColor: "#fff",
      headerShown: false,
    },
  }
);

const DashboardStack = createStackNavigator(
  {
    dashboard: {
      screen: Dashboard,
      navigationOptions: {
        headerTitle: () => null,
      },
    },
    // productdetails: {
    //   screen: productStack,
    // },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

// const profileStack = createStackNavigator(
//   {
//     profile: {
//       screen: MyProfile,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     accinfo: {
//       screen: AccountInfo,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     dashboard: {
//       screen: DashboardStack,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     orders: {
//       screen: orderStack,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//   },
//   {
//     defaultNavigationOptions: defaultDashProductOpt,
//   }
// );

// const paymentStack = createStackNavigator(
//   {
//     selectmethod: {
//       screen: Payment,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     cards: {
//       screen: Cards,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     usercard: {
//       screen: UserCard,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     addcard: {
//       screen: AddCard,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//   },
//   {
//     defaultNavigationOptions: defaultDashProductOpt,
//   }
// );

const CustomDrawerStack = createDrawerNavigator(
  {
    dashboard: {
      screen: DashboardStack,
      navigationOptions: {
        title: "Feed",
        drawerIcon: () => {
          return <Entypo name="home" size={26} color="black" />;
        },
      },
    },
    profile: {
      screen: MyProfile,
      navigationOptions: {
        title: "My Profile",
        drawerIcon: () => {
          return <Fontisto name="male" size={26} color="black" />;
        },
      },
    },
    // availablejobs: {
    //   screen: AvailableJobs,
    //   navigationOptions: {
    //     title: "Available Jobs",
    //     drawerIcon: () => {
    //       return (
    //         <MaterialCommunityIcons name="briefcase" size={26} color="black" />
    //       );
    //     },
    //   },
    // },
    // availabletasks: {
    //   screen: AvailableTasks,
    //   navigationOptions: {
    //     title: "Available Tasks",
    //     drawerIcon: () => {
    //       return <FontAwesome5 name="tasks" size={26} color="black" />;
    //     },
    //   },
    // },
    invitations: {
      screen: Invitations,
      navigationOptions: {
        title: "Invitations",
        drawerIcon: () => {
          return <AntDesign name="adduser" size={26} color="black" />;
        },
      },
    },
    // myjobs: {
    //   screen: MyJobs,
    //   navigationOptions: {
    //     title: "My Jobs",
    //     drawerIcon: () => {
    //       return <Ionicons name="briefcase" size={24} color="black" />;
    //     },
    //   },
    // },
    // mytasks: {
    //   screen: MyTasks,
    //   navigationOptions: {
    //     title: "My Tasks",
    //     drawerIcon: () => {
    //       return <FontAwesome name="tasks" size={24} color="black" />;
    //     },
    //   },
    // },
    // events: {
    //   screen: MyEvents,
    //   navigationOptions: {
    //     title: "My Events",
    //     drawerIcon: () => {
    //       return (
    //         <MaterialIcons name="event-available" size={28} color="black" />
    //       );
    //     },
    //   },
    // },
    nearbyalumni: {
      screen: NearbyAlumni,
      navigationOptions: {
        title: "Nearby Alumni",
        drawerIcon: () => {
          return <FontAwesome5 name="map-pin" size={26} color="black" />;
        },
      },
    },
    // logout: {
    //   screen: () => null,
    //   navigationOptions: {
    //     title: "Logout",
    //     drawerIcon: () => {
    //       return <SimpleLineIcons name="logout" size={26} color="black" />;
    //     },
    //   },
    // },
  },
  {
    drawerType: "slide",
    drawerWidth: Dimensions.get("window").width / 1.2,
    contentOptions: {
      labelStyle: {
        color: "#e62b05",
        textTransform: "capitalize",
        fontSize: RFPercentage(2.6),
        fontFamily: font.primary,
        fontWeight: "normal",
      },
    },

    contentComponent: (props) => {
      const googleAuthProfile = useSelector((state) => state.googleAuth);
      const emailAuthProfile = useSelector((state) => state.emailAuth);
      // console.log("GOOGLE AUTH PROFILE", googleAuthProfile);
      // console.log("USER PROFILE EMAIL AUTH", emailAuthProfile);

      const removeValue = async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          // remove error
        }
        console.log("Done.");
      };

      return (
        // <ImageBackground
        //   style={{ flex: 1 }}
        //   source={require("../assets/images/background.png")}
        // >
        <SafeAreaView
          forceInset={{ top: "always", horizontal: "never" }}
          // style={{ backgroundColor: "#e6df05", flex: 1 }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40, paddingTop: 20 }}
          >
            <View
              style={{
                width: "100%",
                height: "20%",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
                marginBottom: 10,
              }}
            >
              <Image
                source={{
                  uri:
                    googleAuthProfile.profile_image ||
                    `data:image/jpeg;base64,${emailAuthProfile.profile_img}`,
                }}
                style={{
                  width: 80,
                  height: 80,
                  marginRight: 15,
                  marginTop: 30,
                  marginBottom: 20,
                  borderRadius: 60,
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  color: "#e62b05",
                  fontFamily: font.primary,
                  fontSize: RFPercentage(3),
                  marginTop: 30,
                }}
              >
                {googleAuthProfile?.fullname ||
                  emailAuthProfile?.firstname +
                    " " +
                    emailAuthProfile?.lastname}
              </Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <DrawerItems {...props} />

              <TouchableOpacity
                onPress={() => {
                  removeValue();
                  props.navigation.navigate("auth");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: Dimensions.get("window").width / 30,
                }}
              >
                <SimpleLineIcons name="logout" size={26} color="black" />
                <Text
                  style={{
                    color: "#e62b05",
                    fontFamily: font.primary,
                    fontSize: RFPercentage(2.6),
                    marginLeft: Dimensions.get("window").width / 12,
                  }}
                >
                  {" "}
                  Logout
                </Text>
              </TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: "#e62b05",
                    fontFamily: font.primary,
                    fontSize: RFPercentage(2.1),
                    marginTop: 30,
                  }}
                >
                  {" "}
                  Version 1.0.0
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        // </ImageBackground>
      );
    },
  }
);

// hide the bottom tab bar on sign in screen
CustomDrawerStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === "logout") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

//message stack
const messageStack = createStackNavigator(
  {
    msgs: {
      screen: Messages,
    },
    openmsg: {
      screen: ChatBox,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

//Alumni stack
const alumniStack = createStackNavigator(
  {
    alumni: {
      screen: Alumni,
    },
    alumniprofile: {
      screen: PreviewProfile,
    },
    messages: {
      screen: messageStack,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

//Community stack
const communityStack = createStackNavigator(
  {
    community: {
      screen: Community,
    },
    connectionprofile: {
      screen: MyProfile,
    },
    messages: {
      screen: ChatBox,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

// hide the bottom tab bar on sign in screen
messageStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === "openmsg") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

// const cartStack = createStackNavigator(
//   {
//     cart: {
//       screen: Cart,
//     },
//     accinfo: {
//       screen: AccountInfo,
//     },
//     ordertracking: {
//       screen: orderStack,
//     },
//     payment: {
//       screen: Payment,
//     },
//   },
//   {
//     defaultNavigationOptions: {
//       headerShown: false,
//     },
//   }
// );

// const favoriteStack = createStackNavigator({
//   favorites: {
//     screen: Favorites,
//     navigationOptions: {
//       headerShown: false,
//       headerTintColor: "#fff",
//       headerTitleAlign: "center",
//       headerStyle: {
//         backgroundColor: "#5657C8",
//       },
//       headerTitleStyle: {
//         fontFamily: font.primary,
//         fontSize: RFPercentage(3.5),
//         fontWeight: "bold",
//       },
//     },
//   },
//   filter: {
//     screen: Filters,
//     navigationOptions: {
//       headerTintColor: "#fff",
//       headerTitleAlign: "center",
//       headerStyle: {
//         backgroundColor: "#5657C8",
//         height: Dimensions.get("screen").height / 8.5,
//       },
//       headerTitleStyle: {
//         fontFamily: font.primary,
//         fontSize: RFPercentage(3.5),
//         fontWeight: "bold",
//       },
//       headerTitle: "Apply Filters",
//     },
//   },
// });

//bottomtabs
const bottomTabStack = createBottomTabNavigator(
  {
    dashboard: {
      screen: CustomDrawerStack,
      navigationOptions: {
        title: "Home",
        tabBarIcon: (iconInfo) => {
          return <Entypo name="home" size={28} color={iconInfo.tintColor} />;
        },
      },
    },
    alumniprofile: {
      screen: alumniStack,
      navigationOptions: {
        title: "Alumni",
        tabBarIcon: (iconInfo) => {
          return (
            <Entypo
              name="graduation-cap"
              size={28}
              color={iconInfo.tintColor}
            />
          );
        },
      },
    },
    chat: {
      screen: messageStack,
      navigationOptions: {
        title: "Chat",
        tabBarIcon: (iconInfo) => {
          return (
            <Feather
              name="message-circle"
              size={28}
              color={iconInfo.tintColor}
            />
          );
        },
      },
    },
    // events: {
    //   screen: Events,
    //   navigationOptions: {
    //     title: "Events",
    //     tabBarIcon: (iconInfo) => {
    //       return (
    //         <MaterialIcons
    //           name="event-note"
    //           size={28}
    //           color={iconInfo.tintColor}
    //         />
    //       );
    //     },
    //   },
    // },
    community: {
      screen: communityStack,
      navigationOptions: {
        title: "Community",
        tabBarIcon: (iconInfo) => {
          return (
            <Ionicons name="people" size={28} color={iconInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#e6df05",
      inactiveTintColor: "#fff",
      style: {
        height: 60,
        backgroundColor: "#e62b05",
      },
      labelStyle: {
        fontFamily: font.primary,
        fontSize: RFPercentage(1.8),
      },
    },
  }
);

//Switch between introduction, questionaire and authentication
const SwitchStack = createSwitchNavigator({
  startscreen: StartScreen,
  intro: introStack,
  auth: AuthStack,
  maintabs: bottomTabStack,
});

export default createAppContainer(SwitchStack);
