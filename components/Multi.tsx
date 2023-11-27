import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { Color } from "./GlobalStyles";
import axios from "axios";

export default function Multi() {
  const navigation = useNavigation();

  const showAlert = () => {
    Alert.alert(
      "Accès refusé",
      "Merci de remplir avec un nom et un mot de passe correct.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  const buttons = [
    { text: "Marker", iconName: "map-marker" },
    { text: "FindTreasure", iconName: "compass" },
    { text: "Quizz", iconName: "question" },
    { text: "Leaderboard", iconName: "star" },
  ];

  const handlePressButton = async (buttonN) => {
    if (buttonN === "Button 4") {
      try {
        const response = await axios.get("http://10.0.2.2:5000/api/admin");

        // Vérifiez si la réponse est OK (status code 2xx)
        if (!response.data.error) {
          console.log("Admin access granted!");
          navigation.navigate("Create");
        } else {
          console.log("Admin access denied!");
          navigation.navigate("Home");
          showAlert();
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données",
          error
        );
        navigation.navigate("Home");
      }
    }
    else{
      navigation.navigate(buttonN);
    }
  };

  // Split buttons into rows of 3
  const buttonRows = [];
  for (let i = 0; i < buttons.length; i += 4) {
    buttonRows.push(buttons.slice(i, i + 4));
  }

  return (
    <View style={styles.view}>
      <BlurView intensity={90} style={{ borderRadius: 10, overflow: "hidden" }}>
        <View style={styles.card}>
          {buttonRows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.buttonRow}>
              {row.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button}
                  onPress={() => handlePressButton(button.text)}
                >
                  <Icon name={button.iconName} size={20} color="#fff" />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  card: {
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D0F13",
    marginTop: 10,
    borderRadius: 5,
    margin: 10,
    padding: 20,
  },
  buttonText: {
    marginLeft: 10,
    color: "#fff",
  },
});
