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
import ImagePick from "../Form/ImagePick";

const treasureImages = [
  {
    uri: "https://picsum.photos/id/237/200/300",
  },
  {
    uri: "https://picsum.photos/id/237/200/300",
  },
  {
    uri: "https://picsum.photos/id/237/200/300",
  },
  {
    uri: "https://picsum.photos/id/237/200/300",
  }
]

const Geoguesser = () => {
  //récupérer image, jeu, date
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Office Guesser</Text>
      <Text style={styles.sectionTitle}>To Find  :</Text>

      <Image source={{ uri: "https://picsum.photos/id/237/200/300" }} style={styles.tofind} />

      <Divider style={{ margin: 20, borderColor: "#0D0F13", borderWidth: 1 }} />

      {!selectedImage ? (
        <ImagePick />
      ) : (
        <Text style={styles.imageReceived}>Image bien reçue</Text>
      )}


      <Divider style={{ margin: 20, borderColor: "#0D0F13", borderWidth: 1 }} />

      <Text style={styles.sectionTitle}>Compass :</Text>

      {/* Compass image */}
      <Image source={{ uri: "https://static.thenounproject.com/png/3755382-200.png" }} style={styles.compass} />

    </View>
  );
};
export default Geoguesser;

const styles = StyleSheet.create({
  compass: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
    // rotation
    transform: [{ rotate: '56deg' }],
  },
  tofind: {
    width: '80%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 20
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageContainer: {
    margin: 5,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
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
