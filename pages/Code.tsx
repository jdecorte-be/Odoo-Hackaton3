import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import DatePicker from "react-native-date-picker";
import { SegmentedButtons } from "react-native-paper";

const Code = ({ route }) => {
  const navigation = useNavigation();

  //   request to /api/data with flask
  const handleStart = async () => {
    if (route.params.game === "Office Guesser") {
      navigation.navigate("Geo", { id: "XDNF5" });
    }
    if (route.params.game === "Find Office") {
        navigation.navigate("Find", { id: "XDNF5" });
    }
    if (route.params.game === "The Quizz") {
        navigation.navigate("Qui", { id: "XDNF5" });
    }
  };

  return (
    <View style={styles.container}>
      {route.params.game && (
        <Text style={styles.title}>{route.params.game}</Text>
      )}
      <Text style={styles.title}>CODE</Text>
      <Text style={styles.sectionTitle}>You code :</Text>

      <Text style={styles.code}>XDNF5</Text>

      {/* <Divider style={{ margin: 20, borderColor: "#0D0F13", borderWidth: 1 }} /> */}

      <View style={styles.submitButton}>
        <Button
          onPress={() => handleStart()}
          title="Start the game"
          color="#0D0F13"
        />
        <Button
          onPress={() => navigation.navigate("Home")}
          title="Return to Home"
          color="#0D0F13"
        />
      </View>
    </View>
  );
};
export default Code;

const styles = StyleSheet.create({
  code: {
    backgroundColor: "white",
    borderColor: "#0D0F13",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    borderColor: "#0D0F13",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
  },
  datePicker: {
    width: 200,
    height: 50,
    margin: 10,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white", // Swapped to white
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    color: "#0D0F13", // Swapped to #0D0F13
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 40,
  },
  imageReceived: {
    marginLeft: 150,
    marginTop: 20,
    color: "#0D0F13", // Swapped to #0D0F13 for better visibility
  },
  datePickerContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    paddingBottom: 10,
    color: "#0D0F13", // Swapped to #0D0F13
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  submitButton: {
    gap: 10,
    marginTop: 30,
    backgroundColor: "white", // Swapped to white
    padding: 10,
    borderRadius: 20,
  },
});
