
import { useState, useEffect } from 'react';
import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image , Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from 'axios';


const Connection = () => {
  const navigation = useNavigation();
  const [inpuNames, setInputName] = useState('');
  const [inpuPassw, setInputPass] = useState('');

  const showAlert = () => {
    Alert.alert(
      'Authentification ratée',
      'Merci de remplir avec un nom et un mot de passe correct.',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  };

  const handlePressInsc = () => {
    console.log("Le bouton a été cliqué !");
    navigation.navigate("Inscription");
    // Ajoutez ici le code que vous souhaitez exécuter lorsque le bouton est cliqué
  };

  const handlePressConn = async () => {
    console.log(inpuNames);
    console.log(inpuPassw);
  
    if (inpuNames !== "" && inpuPassw !== "") {
      try {
        const requestData = {
          username: inpuNames,
          mdp: inpuPassw,
          // Ajoutez d'autres données selon les besoins
        };
  
        const response = await axios.post('http://10.0.2.2:5000/api/dataConn', requestData);
  
        // Vérifiez si la réponse est OK (status code 2xx)
        if (!response.data.error) {
          console.log('Connexion réussie!');
          // Assurez-vous de définir setData en tant que state si nécessaire
          // setData(response.data.message);
          navigation.navigate("Home");
        } else {
          navigation.navigate("Inscription");

          // Gérer l'erreur en fonction de vos besoins
        }
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données', error);
        navigation.navigate("Inscription");
        // Gérer l'erreur en fonction de vos besoins
      }
    } else {
      showAlert();
    }
  };
  

  return (
    <View style={styles.container}>
      <Image
        source={require('../blue-steel.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.text}>Connection</Text>

      <View style={styles.container2}>

        <InputName
          value={inpuNames}
          onChangeText={(text) => setInputName(text)}
        />

        <InputMdp
          value={inpuPassw}
          onChangeText={(text) => setInputPass(text)}
        />
        

        <BoutonConn onPress={handlePressConn} />

        <BoutonInsc onPress={handlePressInsc} />
        </View>
    </View>
  );
};


const InputName = ({ value, onChangeText }) => {
  return(
    <Input
    containerStyle={{}}
    disabledInputStyle={{ background: "#ddd" }}
    inputContainerStyle={{width: 250 }}
    errorMessage=""
    errorStyle={{}}
    errorProps={{}}
    inputStyle={{ fontSize:10, color: 'grey' }}
    labelStyle={{}}
    labelProps={{}}
    leftIcon={<Icon name="account-outline" size={20} color={"#ddd"} />}
    leftIconContainerStyle={{}}
    placeholder="Entrer votre nom"
    placeholderTextColor="grey"
    onChangeText={onChangeText}
      value={value}
  />
  

  );
};

const InputMdp = ({ value, onChangeText }) => {
  return(
    <Input
    containerStyle={{}}
    disabledInputStyle={{ background: "#ddd" }}
    inputContainerStyle={{width: 250 }}
    errorMessage=""
    errorStyle={{}}
    errorProps={{}}
    inputStyle={{ fontSize:10, color: 'grey' }}
    labelStyle={{}}
    labelProps={{}}
    leftIcon={<Icon name="account-outline" size={20} color={"#ddd"}/>}
    leftIconContainerStyle={{}}
    placeholder="Entrer votre mot de passe"
    placeholderTextColor="grey"
    onChangeText={onChangeText}
    value={value}
  />
  



  );
};

const BoutonConn = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.boutonAllonge} onPress={onPress}>
      <Text style={styles.texteBouton}>Se connecter</Text>
    </TouchableOpacity>
  );
};

const BoutonInsc = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.boutonAllonge} onPress={onPress}>
      <Text style={styles.texteBouton}>S'inscrire</Text>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: 'gray',
  },

  container2: {
    flex: 1,
    backgroundColor: 'transparent', // Définir le fond sur transparent
    alignItems: 'center',
  },

  

    boutonAllonge: {
      width: 250,
      marginTop: 20,
      paddingVertical: 5,
      paddingHorizontal: 60,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'white',
    },
    texteBouton: {
      color: 'black',
      fontSize: 16,
      textAlign: 'center',
    },

  text: {
    
    color: 'white', // Ajoutez une couleur de texte blanche pour une meilleure visibilité
    fontSize: 40,
    marginTop : 100,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'contain' selon vos préférences
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  
});

export default Connection;





