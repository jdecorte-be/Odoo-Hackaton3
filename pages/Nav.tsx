import React, { useState } from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Text,
} from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Inscription from "../pages/Inscription";
import Connection from "../pages/Connection";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Homes from "../pages/Homes";
import Profile from "./Profile";
import Create from "./Create";
import Multi from "../components/Multi";
import { BlurView } from "expo-blur";
import Leaderboard from "./Leaderboard";
import Geoguesser from "./Games/Geoguesser";
import FindTreasure from "./Games/Findtresure";
import Quizz from "./Games/Quizz";
import GeoForm from "./Form/GeoForm";
import FindForm from "./Form/FindForm";
import QuizzForm from "./Form/QuizzForm";
import Code from "./Code";
import Event from "./Event";

const Stack = createStackNavigator();

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible);

  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "title1":
        icon = "ios-home-outline";
        break;
      case "title2":
        icon = "person-outline";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate(routeName);
        }}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  // Define the Home screen component here
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={toggleModal} // Use onPressOut to close the modal when the overlay is pressed
        >
          <BlurView intensity={5} style={styles.modalContainer}>
            <Multi />
          </BlurView>
        </TouchableOpacity>
      </Modal>

      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        screenOptions={{
          headerShown: false,
        }}
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity style={styles.button} onPress={toggleModal}>
              <Ionicons name={"apps-sharp"} color="gray" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="title1"
          position="LEFT"
          component={() => Home()}
        />
        <CurvedBottomBarExpo.Screen
          name="title2"
          component={() => Profile()}
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
    </View>
  );
};

export default function Nav() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Connection"
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Inscription" component={Inscription} />
          <Stack.Screen name="Connection" component={Connection} />
          <Stack.Screen name="Marker" component={Geoguesser} />
          <Stack.Screen name="Create" component={Create} /> 
          

          <Stack.Screen name="Leaderboard" component={Leaderboard} />
          <Stack.Screen name="FindTreasure" component={FindForm} />
          <Stack.Screen name="Quizz" component={QuizzForm} />
          <Stack.Screen name="Code" component={Code} />
          <Stack.Screen name="Geo" component={Geoguesser} />
          <Stack.Screen name="Find" component={FindTreasure} />
          <Stack.Screen name="Qui" component={Quizz} />
          <Stack.Screen name="Event" component={Event} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  popup: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
  },
  shawdow: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    bottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    // Add shadow or other styling as needed
  },
});
