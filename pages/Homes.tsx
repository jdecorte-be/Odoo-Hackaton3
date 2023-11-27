import React from "react";
import { View, ScrollView, StatusBar, StyleSheet, Text } from "react-native";
import CountDown from "react-native-countdown-component";
import { BlurView } from '@react-native-community/blur';





const Homes = () => {
  

  const COLORS = {
    Black: "black",
    Orange: "orange",
    // Ajoutez d'autres couleurs au besoin
  };

  const SPACING = {
    space_36: 36,
    space_28: 28,
    // Ajoutez d'autres espaces au besoin
  };

  return (
    //horizontale : le mode horizontal, pagingEnabled active le fait qu'après chaque scroll on arrête de scroll

    <View>
      <View style={styles.containerScroll}>
        <ScrollView horizontal pagingEnabled style={styles.mainScrollView}>
          {/* Premier écran défilable */}
          <ScrollView
            style={styles.container}
            bounces={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <StatusBar hidden />

            {/* View a afficher dans le scroll */}
            <View style={styles.contentContainer}>
              <View style={styles.carre} backgroundColor="grey" />
            </View>
          </ScrollView>

          {/* Deuxième écran défilable */}
          <ScrollView
            style={styles.container}
            bounces={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <StatusBar hidden />

            {/* View a afficher dans le scroll */}
            <View style={styles.contentContainer}>
              <View style={styles.carre} backgroundColor="blue">
                <Text>hello</Text>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
      <Text>jhzbj</Text>
      {/* <CountDown
        size={30}
        until={1000}
        onFinish={() => alert("Finished")}
        digitStyle={{
          backgroundColor: "#FFF",
          borderWidth: 2,
          borderColor: "#1CC625",
        }}
        digitTxtStyle={{ color: "#1CC625" }}
        timeLabelStyle={{ color: "steelblue", fontWeight: "bold" }}
        separatorStyle={{ color: "#1CC625", fontSize: 50, bottom: 20 }}
        timeToShow={["D", "H", "M", "S"]}
        timeLabels={{ d: "DD", h: "HH", m: "MM", s: "SS" }}
        showSeparator
      /> */}

    </View>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    marginTop: 100,
    backgroundColor: "transparent",
    height: 400,
  },
  mainScrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
  },
  inputHeaderContainer: {
    marginHorizontal: 36,
    marginTop: 28,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    // Couleur de la bordure
  },
  text: {
    color: "white",
    fontSize: 16,
  },

  carre: {
    width: 300,
    height: 300,
    borderRadius: 10, // Vous pouvez ajuster cette valeur selon vos préférences
  },

  // Ajoutez d'autres styles au besoin
});

export default Homes;
