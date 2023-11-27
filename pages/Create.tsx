import React, { useState ,useRef  } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, StatusBar, ScrollView ,TextInput} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-paper';
import EventCard from "../components/Event";



const MyTextInputComponent = ({textes}) => {
  const [text, setText] = useState('');

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  const handleButtonPress = () => {
    Alert.alert('Texte saisi :', text);
  };

  return (
    <View style={styles.inputCont}>
      <TextInput
        style={styles.input}
        placeholder={textes}
        onChangeText={handleInputChange}
        value={text}
      />

    </View>
  );
};

const Stack = createStackNavigator();
let a = "2";

const Create = () => {
  const scrollViewRef = useRef();
  const [a, setA] = useState("2");
  const [pageIndex, setPageIndex] = useState(0);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    console.log('Scrolled to:', offsetX);
  };

  const handleScrollEnd = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(contentOffset / scrollViewWidth);
    
    // Mise à jour de la variable a

    setA("3");
    if(pageIndex < 10){
      setA("3");
    }
    else if(pageIndex>=10 && pageIndex < 20){
      setA("4");
    }
    else if(pageIndex>=30){
      setA("5");
    }

    setPageIndex(pageIndex);
    console.log('Current Page Index:', pageIndex);
  };

  const scrollViewWidth = 10;


  

  return (
    <View style={styles.containerBasic}>
      <Text>Choisissez un jeu :</Text>
      <View style={styles.containerScroll}>
        <ScrollView
          ref={scrollViewRef}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleScrollEnd}
          horizontal
          pagingEnabled
          snapToInterval={scrollViewWidth}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
        >
          {/* Contenu de votre ScrollView */}
          <ScrollView
            style={styles.container}
            bounces={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <TouchableOpacity>
              <View style={styles.contentContainer}>
                <EventCard
                  imageUrl="https://picsum.photos/200/300"
                  eventDate={a}
                  eventMonth="Nov"
                  title="Title"
                  description="Description"
                  timeAgo="10 min"
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
          {/* Ajoutez d'autres écrans ScrollView au besoin */}
          <ScrollView
            style={styles.container}
            bounces={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <TouchableOpacity>
              <View style={styles.contentContainer}>
                <EventCard
                  imageUrl="https://picsum.photos/200/300"
                  eventDate="10"
                  eventMonth="Nov"
                  title="Title"
                  description="Description"
                  timeAgo="10 min"
                />
              </View>
            </TouchableOpacity>
          </ScrollView>

          <ScrollView
            style={styles.container}
            bounces={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <TouchableOpacity>
              <View style={styles.contentContainer}>
                <EventCard
                  imageUrl="https://picsum.photos/200/300"
                  eventDate="10"
                  eventMonth="Nov"
                  title="Title"
                  description="Description"
                  timeAgo="10 min"
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
          
        </ScrollView>
        {pageIndex < 10 ? (
          // Code for pageIndex less than 10
          
              <View style={styles.textInputContainer}>
                <Text> Jeu : Geoguesseur</Text>
          <Button mode="contained">
            Sélectionner un fichier
          </Button>
          <MyTextInputComponent textes={"Date de l'évent "} />
          
        </View>
          
          ) : pageIndex >= 10 && pageIndex < 20 ? (
            // Code for pageIndex between 10 and 20
            <View style={styles.textInputContainer}>
              <Text> Jeu : Quizz</Text>
              <Button mode="contained">
                Sélectionner un fichier
              </Button>
              <MyTextInputComponent textes={"Date de l'évént"} />
              
            </View>
          ) : pageIndex >= 30 ? (
            // Code for pageIndex greater than or equal to 30
                    <View style={styles.textInputContainer}>
                      <Text> Jeu : Find tresor</Text>
                <Button mode="contained">
                  Sélectionner un fichier
                </Button>
                <MyTextInputComponent textes={"date de l'évent"} />
              
              </View>


          ) :   <View style={styles.textInputContainer}>
            <Text> Jeu : find tresor</Text>
          <Button mode="contained">
            Sélectionner un fichier
          </Button>
          <MyTextInputComponent textes={"date de l'évent"} />
          
        </View>}
        <View style={styles.textInputContainer3}>
        <TextInput
             style={styles.inputDesc}
              placeholder={"Donnez la description de l'évenement "}
                
             />
        </View>

                </View>
                
    </View>
  );
};

const styles = StyleSheet.create({
  inputCont: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    textAlign: 'center',
  },

  inputDesc:{
    height: 100,
    width:300,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    textAlign: 'center',
  },
  
  
  containerBasic: {
    alignItems: "center",
    marginTop: 150,
    flex: 1,
  },
  containerScroll: {
    backgroundColor: "transparent",
  },
  mainScrollView: {
    flexGrow: 0,
  },
  scrollViewContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textInputContainer: {
    position: 'absolute',
    top: 250, // Ajustez la valeur de top selon l'emplacement souhaité
    left: 100, // Ajustez la valeur de left selon l'emplacement souhaité
  },
  textInputContainer2: {
    position: 'absolute',
    top: 360, // Ajustez la valeur de top selon l'emplacement souhaité
    left: 150, // Ajustez la valeur de left selon l'emplacement souhaité
  },
  textInputContainer3: {
    position: 'absolute',
    top: 500, // Ajustez la valeur de top selon l'emplacement souhaité
    left: 60, // Ajustez la valeur de left selon l'emplacement souhaité
  },
});

export default Create;
