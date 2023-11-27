import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface EventHeaderProps {
  dateTime: string;
  profileUri: string;
}

const EventHeader: React.FC<EventHeaderProps> = ({ dateTime, profileUri }) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.dateTime}>{dateTime}</Text>
            <Text style={styles.title}>Explore events</Text>

        </View>
      <Image source={{ uri: profileUri }} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    gap: 180,
  },
  dateTime: {
    fontSize: 12,
    color: 'gray',
    marginRight: 'auto',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default EventHeader;
