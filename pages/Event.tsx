import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TopProfile from '../components/Profile/Top';
import Tab from '../components/Profile/Tab';

const achievements = [
  {
    id: '1',
    title: 'First Win',
    iconUri: 'https://cdn4.iconfinder.com/data/icons/awards-26/270932/13-512.png', // Replace with your icon URL
  },
  {
    id: '2',
    title: 'High Score',
    iconUri: 'https://cdn1.iconfinder.com/data/icons/art-design-and-development-glyphs-vol-1/70/award__cup__trophy__achievement__prize-512.png', // Replace with your icon URL
  },
];

const AchievementItem = ({ title, iconUri }) => (
  <View style={styles.achievementItem}>
    <Image source={{ uri: iconUri }} style={styles.achievementIcon} />
    <Text style={styles.achievementText}>{title}</Text>
  </View>
);


const Event = () => {
  return (
    
    <View style={styles.container}>
      <TopProfile />
      <Text style={styles.title}>Last Games</Text>
      <Tab />
      <Text style={styles.title}>Achievements</Text>
      <FlatList
        data={achievements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AchievementItem title={item.title} iconUri={item.iconUri} />
        )}
      />
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
  container: {
    flex: 1,
    backgroundColor: '#fff', // Darker shade of blue
  },
  content: {
    alignItems: 'center',
    marginTop: 50, // Add some margin from the top
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  topText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 15,
  },
  userData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  positionText: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  medalImage: {
    width: 30, // Adjust width as needed
    height: 30, // Adjust height as needed
    marginLeft: 10, // Add some margin to separate the medals
  },
  description: {
    color: 'white',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Use a light background color for the achievement items
    padding: 10,
    borderRadius: 10,
    marginVertical: 5, // Add space between achievement items
    marginHorizontal: 10,
    shadowColor: '#000', // Optional shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Optional shadow for iOS
    shadowOpacity: 0.2, // Optional shadow for iOS
    shadowRadius: 2, // Optional shadow for iOS
    elevation: 3, // Optional shadow for Android
  },
  achievementIcon: {
    width: 30, // Adjust width as needed
    height: 30, // Adjust height as needed
    marginRight: 10, // Add some margin to separate the icon from the text
  },
  achievementText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Event;
