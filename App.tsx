import React from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Multi from "./components/Multi";
import Inscription from "./pages/Inscription";
import Connection from "./pages/Connection";
import Profile from "./pages/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Homes from "./pages/Homes";
import Nav from "./pages/Nav";

const Stack = createStackNavigator();


export default function App() {
  return (
    <Nav />
  );
}