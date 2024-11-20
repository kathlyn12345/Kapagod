import React, { useRef, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  SafeAreaView,
  ScrollView,
  Alert,
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
import Sidebar from "../navigation/Sidebar";

const HomeScreen = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [sidebarVisible, setSidebarVisible] = useState(false);

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
      title: "Argylle",
      image: require("../assets/Comedy/Argylle.jpg"),
    },
    {
      title: "Beetlejuice 2",
      image: require("../assets/Comedy/Beetlejuice 2.jpg"),
    },
    {
      title: "Dumb and Dumber",
      image: require("../assets/Comedy/Dumb and Dumber.jpg"),
    },
    {
      title: "GhostBuster Frozen Empire",
      image: require("../assets/Comedy/GhostBusters.jpg"),
    },
    {
      title: "Hit Man",
      image: require("../assets/Comedy/Hit Man.jpg"),
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
      title: "Titanic",
      image: require("../assets/Romance/titanic.jpg"),
    },
    {
      title: "50 First Dates",
      image: require("../assets/Romance/50.jpg"),
    },
    {
      title: "HoliDate",
      image: require("../assets/Romance/date.jpg"),
    },
    {
      title: "The Hating Game",
      image: require("../assets/Romance/hating.jpg"),
    },
    {
      title: "Last Year's Mistake",
      image: require("../assets/Romance/last.jpg"),
    },
    {
      title: "Passengers",
      image: require("../assets/Romance/pass.jpg"),
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

  const handleLogout = () => {
    setSidebarVisible(false);
    Alert.alert("Logout", "You have been logged out successfully.");
    navigation.navigate("SignIn");
  };

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 0 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={toggleSidebar}>
              {sidebarVisible ? (
                <Ionicons name="close" size={30} color="#FFFFFF" />
              ) : (
                <Ionicons name="menu" size={30} color="#FFFFFF" />
              )}
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
              onViewAllPress={() => handleViewAll(navigation, "Comedy")}
            />
          </View>

          <View>
            <Fantasy
              movies={fantasy}
              onViewAllPress={() => handleViewAll(navigation, "Fantasy")}
            />
          </View>
          <View>
            <Horror
              movies={horror}
              onViewAllPress={() => handleViewAll(navigation, "Horror")}
            />
          </View>

          <View>
            <Romance
              movies={romance}
              onViewAllPress={() => handleViewAll(navigation, "Romance")}
            />
          </View>

          <View>
            <SciFi
              movies={sciFi}
              onViewAllPress={() => handleViewAll(navigation, "SciFi")}
            />
          </View>
        </View>
      </ScrollView>

      <Sidebar
        isVisible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
        onLogout={handleLogout}
      />
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
});

export default HomeScreen;
