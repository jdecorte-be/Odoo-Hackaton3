import React, { useState, useEffect } from "react";
import { Image, View, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";

const ImagePick = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Sorry, we need camera roll permissions to make this work!"
        );
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={pickImage}
        style={styles.button1}
        icon="image"
        textColor="white"
      >
        Pick from Gallery
      </Button>
      <Button
        mode="outlined"
        onPress={takePhoto}
        style={styles.button2}
        icon="camera"
        textColor="#0D0F13"
      >
        Take a Photo
      </Button>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    width: '80%',
    margin: 10,
    paddingVertical: 8,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#0D0F13',
  },
  button2: {
    width: '80%',
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 2,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 15,
  },
});

export default ImagePick;
