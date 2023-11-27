
import { useState, useEffect } from 'react';
import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image , Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from 'axios';


const Inscription = () => {
  const navigation = useNavigation();
  const [inpuNames, setInputName] = useState('');
  const [inpuEmail, setInputEmail] = useState('');
  const [inpuMdp, setInputMdp] = useState('');
  const [inpuEnt, setInputEnt] = useState('');

  const showAlert = () => {
    Alert.alert(
      'Authentification ratée',
      'Merci de remplir avec un nom et un mot de passe correct.',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  };

  const handlePressInsc = async() => {
    console.log(inpuNames);
    console.log(inpuMdp);
    console.log(inpuEnt);
    if (inpuNames !== "" && inpuEmail !== "" && inpuMdp !== "" && inpuEnt !== "") {
      try {
        const requestData = {
          username: inpuNames,
          mdp: inpuMdp,
          entreprise: inpuEnt,
          // Ajoutez d'autres données selon les besoins
        };
        
        const response = await axios.post('http://10.0.2.2:5000/api/dataInscr', requestData);

        if(!response.data.error){
          navigation.navigate("Connection");
        }
        else{
          showAlert();
        }

        
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données', error);
      }
    } else {
      console.log(inpuNames,inpuEmail,inpuMdp,inpuEnt);
      showAlert();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../blue-steel.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.text}>Inscription</Text>

      <View style={styles.container2}>
        <InputName
          value={inpuNames}
          onChangeText={(text) => setInputName(text)}
          
        />
        <InputMail
          value={inpuEmail}
          onChangeText={(text) => setInputEmail(text)}
        />

        <InputMdp
          value={inpuMdp}
          onChangeText={(text) => setInputMdp(text)}
          placeholder="Mot de passe"
        />

        <InputEnt
          value={inpuEnt}
          onChangeText={(text) => setInputEnt(text)}
        />

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
    placeholder="Entrer un nom utilisateur"
    placeholderTextColor="grey"
    onChangeText={onChangeText}
      value={value}
  />
  

  );
};


const InputMail = ({ value, onChangeText }) => {
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
      leftIcon={<Icon name="email" size={20} color={"#ddd"}/>}
      leftIconContainerStyle={{}}
      placeholder="Entrer votre adresse email"
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
    leftIcon={<Icon name="lock-outline" size={20} color={"#ddd"}/>}
    leftIconContainerStyle={{}}
    placeholder="Créer votre mot de passe"
    placeholderTextColor="grey"
    onChangeText={onChangeText}
      value={value}
  />
  );
};

const InputEnt = ({ value, onChangeText }) => {
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
      leftIcon={<Icon name="briefcase" size={20} color={"#ddd"}/>}
      leftIconContainerStyle={{}}
      placeholder="Entrez le nom de votre entreprise : "
      placeholderTextColor="grey"
      onChangeText={onChangeText}
      value={value}
    />
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

export default Inscription;





