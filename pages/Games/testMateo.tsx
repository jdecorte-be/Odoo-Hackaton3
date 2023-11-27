import React, { useState } from 'react';
import { View, Button, Image, TextInput, ScrollView, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const FindTreasure = () => {
  const [treasureImages, setTreasureImages] = useState([]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      multiple: true,
    });

    if (!result.cancelled) {
      const newImages = result.assets.map((asset) => ({ uri: asset.uri, description: '' }));
      const combinedImages = [...treasureImages, ...newImages].slice(0, 6);
      setTreasureImages(combinedImages);
    }
  };

  const handleDescriptionChange = (text) => {
    const updatedImages = treasureImages.map((item, index) =>
      index === 5 ? { ...item, description: text } : item
    );
    setTreasureImages(updatedImages);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150} // Adjust this value as needed
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titleText}>Pick your 6 pictures:</Text>

        <View style={styles.imageGrid}>
          {treasureImages.map((item, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri: item.uri }} style={styles.image} />
            </View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Add Images" onPress={pickImage} color="light-blue" />
        </View>

        {treasureImages.length === 6 && (
          <View style={styles.descriptionContainer}>
            <TextInput
              placeholder="Enter the description of the quest"
              style={styles.input}
              onChangeText={handleDescriptionChange}
              multiline={true}
            />
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: '#FDF7E4', 
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    imageGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 20,
    },
    imageContainer: {
      margin: 5,
    },
    image: {
      width: 120,
      height: 120,
      marginBottom: 10,
    },
    buttonContainer: {
      marginBottom: 20,
    },
    descriptionContainer: {
      padding: 20,
      width: '80%',
      backgroundColor: '#F0F0F0',
      alignItems: 'center',
      borderRadius: 10,
    },
    input: {
      padding: 10,
      width: '100%',
    },
  });
  
  export default FindTreasure;
  