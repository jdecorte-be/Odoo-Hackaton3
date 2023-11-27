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
import ImagePick from "./ImagePick";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import DatePicker from "react-native-date-picker";
import { SegmentedButtons } from "react-native-paper";

const GeoForm = () => {
  //récupérer image, jeu, date
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState("public");

  const showAlert = () => {
    Alert.alert(
      "Authentification ratée",
      "Merci de remplir avec un nom et un mot de passe correct.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  const handleSubmit = async () => {
    navigation.navigate("Code", {game: "Office Guesser"});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Office Guesser</Text>
      <Text style={styles.sectionTitle}>Put the picture :</Text>
      {!selectedImage ? (
        <ImagePick />
      ) : (
        <Text style={styles.imageReceived}>Image bien reçue</Text>
      )}

      <Divider style={{ margin: 20, borderColor: "#0D0F13", borderWidth: 1 }} />
      <Text style={styles.sectionTitle}>Information :</Text>

      <DatePicker
        style={styles.datePicker}
        textColor="#0D0F13"
        mode="datetime"
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Event Name"
        // value={eventName}
        // onChangeText={setEventName}
      />

      <TextInput
        style={styles.input}
        placeholder="X Coordinate (auto with take)"
        keyboardType="numeric"
        // value={xCoordinate}
        // onChangeText={setXCoordinate}
      />

      <TextInput
        style={styles.input}
        placeholder="Y Coordinate (auto with take)"
        keyboardType="numeric"
        // value={yCoordinate}
        // onChangeText={setYCoordinate}
      />
      {/* slider private or public */}
      <SafeAreaView style={styles.container}>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: "public",
              label: "Public",
            },
            {
              value: "private",
              label: "Private",
            },
          ]}
        />
      </SafeAreaView>

      <Divider style={{ margin: 20, borderColor: "#0D0F13", borderWidth: 1 }} />
      <Text style={styles.sectionTitle}>
        Sélectionnez une date et une heure :
      </Text>
      <View style={styles.submitButton}>
        <Button onPress={handleSubmit} title="Soumettre" color="#0D0F13" />
      </View>
    </View>
  );
};
export default GeoForm;

const styles = StyleSheet.create({
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
    padding: 20,
    backgroundColor: "white", // Swapped to white
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
    marginTop: 30,
    backgroundColor: "white", // Swapped to white
    padding: 10,
    borderRadius: 20,
  },
});
