import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface EventCardProps {
  imageUrl: string;
  eventDate: string;
  eventMonth: string;
  title: string;
  description: string;
  timeAgo: string;
}

const ContestCard: React.FC<EventCardProps> = ({
  imageUrl,
  eventDate,
  eventMonth,
  title,
  description,
  timeAgo,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Event")}
      style={styles.card}
    >
      <TouchableOpacity>
        <Image source={require("../assets/banner.png")} style={styles.image} />
        <View style={styles.overlay} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.photosButton}>
        <Text style={styles.photosButtonText}>The insane event</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: "80%",
    height: 200,
  },
  image: {
    width: "100%",
    height: 200,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  photosButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    borderTopEndRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  photosButtonText: {
    color: "#5c6bc0",
    fontSize: 14,
  },
  dateContainer: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    color: "#5c6bc0",
    fontSize: 16,
    fontWeight: "bold",
  },
  monthText: {
    color: "#5c6bc0",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingBottom: 16,
  },
  timeAgo: {
    fontSize: 12,
    color: "#333",
  },
});

export default ContestCard;
