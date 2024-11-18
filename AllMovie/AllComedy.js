import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useCustomFonts } from "../Components/font";

const AllComedy = () => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  const images = [
    {
      id: 1,
      image: require("../assets/Action/BadBoys.jpg"),
      title: "Bad Boys Ride or Die",
    },
    {
      id: 2,
      image: require("../assets/Action/Beekeeper.jpg"),
      title: "Beekeeper",
    },
    {
      id: 3,
      image: require("../assets/Action/CivilWar.jpg"),
      title: "Captain America: Civil War...",
    },
    {
      id: 4,
      image: require("../assets/Action/Extraction2.jpg"),
      title: "Extraction 2",
    },
    { id: 5, image: require("../assets/Action/FastX.jpg"), title: "Fast X" },
    {
      id: 6,
      image: require("../assets/Action/FreeGuy.jpg"),
      title: "Free Guy",
    },
    {
      id: 7,
      image: require("../assets/Action/Gemini.jpg"),
      title: "Gemini Man",
    },
    {
      id: 8,
      image: require("../assets/Action/Hobbs&Shaw.jpg"),
      title: "Fast & Furious Presents: Hobbs & Shaw",
    },
    {
      id: 9,
      image: require("../assets/Action/Maverick.jpg"),
      title: "Top Gun: Maverick",
    },
    { id: 10, image: require("../assets/Action/Nobody.jpg"), title: "Nobody" },
    { id: 11, image: require("../assets/Action/RedOne.jpg"), title: "Red One" },
    {
      id: 12,
      image: require("../assets/Action/Wakanda.jpg"),
      title: "Black Panther",
    },
    { id: 13, image: require("../assets/Action/Wick.jpg"), title: "John Wick" },
    {
      id: 14,
      image: require("../assets/Action/Wick2.jpg"),
      title: "John Wick 2",
    },
    {
      id: 15,
      image: require("../assets/Action/Wick3.jpg"),
      title: "John Wick 3",
    },
  ];

  const navigation = useNavigation();

  // Function to handle navigation to the movie detail screen
  const handleMoviePress = (movieData) => {
    console.log("Movie pressed:", movieData);
  };

  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleMoviePress(item)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.Title}>Action Movies</Text>
      </View>

      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#000000",
  },

  backButton: {
    marginRight: 15,
  },

  Title: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  item: {
    flex: 1,
    margin: 10,
    alignItems: "flex-start",
    backgroundColor: "#000000",
    overflow: "hidden",
    width: 50,
  },

  image: {
    width: 100,
    height: 160,
    borderRadius: 5,
    resizeMode: "cover",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "left",
    width: 105,
    overflow: "hidden",
  },
});

export default AllComedy;
