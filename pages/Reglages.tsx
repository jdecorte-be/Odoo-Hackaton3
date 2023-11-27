import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Avatar } from 'react-native-paper';

const Profile = () => {
  const [modifiedName, setModifiedName] = useState('Matsco');
  const [modalVisible, setModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState<{ uri: string | null }>({ uri: null });


  const handleNameChange = (text) => {
    setModifiedName(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleNameChange}
        value={modifiedName}
        placeholder="Enter new name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
});

export default Profile;
