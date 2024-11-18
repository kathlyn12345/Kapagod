import React, { useRef, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import { Ionicons } from "@expo/vector-icons";
import Recommendation from "../Genre/Recommendation";
import Action from "../Genre/Action";
import Comedy from "../Genre/Comedy";
import Fantasy from "../Genre/Fantasy";
import Horror from "../Genre/Horror";
import Romance from "../Genre/Romance";
import SciFi from "../Genre/SciFi";
import SlideShow from "./Slide";
import { handleViewAll } from "../navigation/utils";

const HomeScreen = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  // Example movie data to pass to MovieRecommendation component
  const movie = {
    title: "Recommendation",
    movies: [
      {
        title: "Wanda Vision",
        image: require("../assets/image/Movie1.jpg"),
      },
      {
        title: "Wanda Vision",
        image: require("../assets/image/Movie2.jpg"),
      },
      {
        title: "Wanda Vision",
        image: require("../assets/image/Movie4.jpg"),
      },
      {
        title: "Wanda Vision",
        image: require("../assets/image/Movie4.jpg"),
      },
      {
        title: "Wanda Vision",
        image: require("../assets/image/Movie5.jpg"),
      },
    ],
  };
  

  const action = [
    {
      title: "Bad Boys Ride or Die",
      image: require("../assets/Action/BadBoys.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/Action/Beekeeper.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/Action/CivilWar.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/Action/Extraction2.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/Action/FastX.jpg"),
    },
  ];

  const comedy = [
    {
      title: "Action Movies",
      image: require("../assets/image/Movie4.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie4.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie4.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie4.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie4.jpg"),
    },
  ];

  const horror = [
    {
      title: "The Conjuring",
      image: require("../assets/Horror/conjuring.jpg"),
    },
    {
      title: "Imaginary",
      image: require("../assets/Horror/Imaginary.jpg"),
    },
    {
      title: "IT Chapter Two",
      image: require("../assets/Horror/It.jpg"),
    },
    {
      title: "World War Z",
      image: require("../assets/Horror/worldz.jpg"),
    },
    {
      title: "The Remains",
      image: require("../assets/Horror/remains.jpg"),
    },
    {
      title: "House of the Witch",
      image: require("../assets/Horror/witch.jpg"),
    },
   
  ];


  const sciFi = [
    {
      title: "Action Movies",
      image: require("../assets/image/Movie5.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie5.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie5.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie5.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie5.jpg"),
    },
  ];

  const romance = [
    {
      title: "Action Movies",
      image: require("../assets/image/Movie6.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie6.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie6.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie6.jpg"),
    },
    {
      title: "Action Movies",
      image: require("../assets/image/Movie6.jpg"),
    },
  ];

  const fantasy = [
    {
      title: "Harry Potter And The Philosopher's Stone",
      image: require("../assets/Fantasy/HarryPotter.jpg"),
    },
    {
      title: "Destiny Rewritten",
      image: require("../assets/Fantasy/DestinyRewritten.jpg"),
    },
    {
      title: "Avatar The Way of Water",
      image: require("../assets/Fantasy/Avatar.jpg"),
    },
    {
      title: "The Little Witch",
      image: require("../assets/Fantasy/Witch.jpg"),
    },
    {
      title: "The Beauty and The Beast",
      image: require("../assets/Fantasy/Thebeast.jpg"),
    },
   
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 0 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Ionicons name="menu" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="search" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View>
            <SlideShow />
          </View>

          <View>
            <Recommendation movie={movie} />
          </View>

          <View>
            <Action
              movies={action}
              onViewAllPress={() => handleViewAll(navigation, "Action")}
            />
          </View>

          <View>
            <Comedy
              movies={comedy}
              onViewAllPress={() => handleViewAll (navigation, "Comedy")}
            />
          </View>

          <View>
            <Fantasy
              movies={fantasy}
              onViewAllPress={() => handleViewAll (navigation, "Fantasy")}
            />
          </View>
          <View>
            <Horror
              movies={horror}
              onViewAllPress={() => handleViewAll (navigation, "Horror")}
            />
          </View>

          <View>
            <Romance
              movies={romance}
              onViewAllPress={() => handleViewAll (navigation, "Romance")}
            />
          </View>

          <View>
            <SciFi
              movies={sciFi}
              onViewAllPress={() => handleViewAll (navigation, "SciFi")}
            />
          </View>



        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#000000",
  },

  headerTitle: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },

  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    textAlign: "center",
    width: "80%", // Make sure the title doesn't stretch too far
  },

  slideText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    width: "100%", // Full width of the container
    flexWrap: "wrap", // Allow wrapping if needed
    flexShrink: 1, // Allow text to shrink if necessary
    overflow: "hidden", // Ensure no overflow occurs
  },
});

export default HomeScreen;
