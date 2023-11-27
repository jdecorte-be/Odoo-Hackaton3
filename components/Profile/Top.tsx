import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Tab from "./Tab";

const TopProfile = () => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <LinearGradient
          colors={["#FF7597", "#FFA26B"]}
          style={styles.gradientBackground}
        >
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            }} // Replace with your image URL
            style={styles.profileImage}
          />
        </LinearGradient>
        <Text style={styles.name}>Adela Parkson</Text>
        <Text style={styles.role}>Odoo - Product Manager</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>17</Text>
            <Text style={styles.statLabel}>Games</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>192</Text>
            <Text style={styles.statLabel}>Top</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>274</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 20,
    color: "#0D0F13",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 8,
  },
  cardContainer: {
    borderRadius: 20,
    elevation: 5, // For Android shadow
    backgroundColor: "#fff",
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.1, // For iOS shadow
    shadowRadius: 8, // For iOS shadow
    alignItems: "center",
    padding: 20,
  },
  gradientBackground: {
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: "#fff",
    borderWidth: 3,

    position: "absolute",
    top: 80, // Half outside the gradient view
  },
  name: {
    marginTop: 50, // Make space for the profile image
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  role: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  statLabel: {
    fontSize: 14,
    color: "black",
  },
});

export default TopProfile;
