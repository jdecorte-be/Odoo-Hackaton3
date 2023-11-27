import Search from "../components/Search";
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import EventCard from "../components/Event";
import EventHeader from "../components/Top";
import ContestCard from "../components/Contest";
import HomeTab from "./HomeTab";

const Carousel = () => {
  return (
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
          <TouchableOpacity onPress={() => navigation.navigate("Event")}>
            <View style={styles.contentContainer}>
              <EventCard
                imageUrl="../assets/banner.png"
                eventDate="10"
                eventMonth="Nov"
                title="Title"
                description="Description"
                timeAgo="10 min"
              />
            </View>
          </TouchableOpacity>
        </ScrollView>

        {/* Deuxième écran défilable */}
        <ScrollView
          style={styles.container}
          bounces={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {/* View a afficher dans le scroll */}
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
        </ScrollView>

        {/* Deuxième écran défilable */}
        <ScrollView
          style={styles.container}
          bounces={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {/* View a afficher dans le scroll */}
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
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default function Home() {
  return (
    <View style={styles.view}>
      <EventHeader
        dateTime={"DECEMBER 16, 9:10 PM"}
        profileUri={
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
      />

      <Search />
      <Text style={styles.title}>Subscribe Event's</Text>
      <HomeTab></HomeTab>
      <Text style={styles.title}>Monthly Contest</Text>
      <ContestCard
        imageUrl={""}
        eventDate={""}
        eventMonth={""}
        title={""}
        description={""}
        timeAgo={""}
      ></ContestCard>
      <Text style={styles.title}>Event's</Text>
      <Carousel />
    </View>
  );
}

export const styles = StyleSheet.create({
  view: {
    backgroundColor: "#0D0F13",
    flex: 1,
    alignItems: "center",
  },
  title: {
    padding: 20,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 8,
  },
  mainScrollView: {
    flexGrow: 0, // Ensure the ScrollView doesn't grow larger than its content
  },
  scrollViewContainer: {
    alignItems: "center", // Center children horizontally
    justifyContent: "center", // Center children vertically
  },
  contentContainer: {
    // Flex removed to give ScrollView a determinate size
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  carre: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});
