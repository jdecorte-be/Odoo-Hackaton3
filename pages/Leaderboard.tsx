import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const leaderboard = [
  {
    name: "Matsco",
    position: 1,
    matches: 15,
    totalPoints: 120,
    wins: 8,
    image: require("../assets/personne2.avif"),
    medal: require("../assets/or.png"),
  },
  {
    name: "John",
    position: 2,
    matches: 18,
    totalPoints: 140,
    wins: 10,
    image: require("../assets/personne1.avif"),
    medal: require("../assets/argent.png"),
  },
  {
    name: "Ernesto",
    position: 3,
    matches: 20,
    totalPoints: 180,
    wins: 12,
    image: require("../assets/personne3.avif"),
    medal: require("../assets/bronze.png"),
  },
  {
    name: "Matsco",
    position: 4,
    matches: 15,
    totalPoints: 120,
    wins: 8,
    image: require("../assets/personne2.avif"),
    medal: require("../assets/or.png"),
  },
  {
    name: "John",
    position: 5,
    matches: 18,
    totalPoints: 140,
    wins: 10,
    image: require("../assets/personne1.avif"),
    medal: require("../assets/argent.png"),
  }
];
const Leaderboard = () => {
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.userContainer,
        item.position === 1 ? styles.topPlayer : null,
      ]}
    >
      <View style={styles.leftContainer}>
        <Image source={item.medal} style={styles.medalImage} />
        <Text style={styles.positionText}>{item.position}</Text>
      </View>
      <Image source={item.image} style={styles.userImage} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userStatsText}>Matches: {item.matches}</Text>
        <Text style={styles.userStatsText}>Points: {item.totalPoints}</Text>
        <Text style={styles.userStatsText}>Wins: {item.wins}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Leaderboard</Text>
      <FlatList
        data={leaderboard.sort((a, b) => a.totalPoints - b.totalPoints)}
        renderItem={renderItem}
        keyExtractor={(item) => item.position.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 20,
  },
  centeredText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D0F13",
    marginBottom: 20,
    textAlign: "center",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  topPlayer: {
    backgroundColor: "#FFD700", // Highlight the top player
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  medalImage: {
    width: 30,
    height: 30,
  },
  positionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0D0F13",
  },
  userStatsText: {
    fontSize: 14,
    color: "#656565",
    marginTop: 2,
  },
  list: {
    width: "100%",
  },
});

export default Leaderboard;
