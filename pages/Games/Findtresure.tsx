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

const FindTreasure = () => {
  //récupérer image, jeu, date
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Office</Text>
      <Text style={styles.sectionTitle}>To Find  :</Text>

      <Image source={{ uri: "https://picsum.photos/id/237/200/300" }} style={styles.tofind} />

      <Divider style={{ margin: 20, borderColor: "#0D0F13", borderWidth: 1 }} />

      {!selectedImage ? (
        <ImagePick />
      ) : (
        <Text style={styles.imageReceived}>Image bien reçue</Text>
      )}


      <Divider style={{ margin: 20, borderColor: "#0D0F13", borderWidth: 1 }} />

      <Text style={styles.sectionTitle}>Tips :</Text>

      <View style={styles.imageGrid}>
        {treasureImages.map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            {
              index > 0 ?
                // blur image
                <Image source={{ uri: item.uri }} blurRadius={10} style={styles.image}/>
                :
                <Image source={{ uri: item.uri }} style={styles.image} />
            }
          </View>
        ))}
      </View>
      <Text style={styles.title}>4:20</Text>
    </View>
  );
};
export default FindTreasure;

const styles = StyleSheet.create({
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
