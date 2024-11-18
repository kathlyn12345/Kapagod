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

const AllFantasy = () => {
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
      image: require("../assets/Fantasy/HarryPotter.jpg"),
      title: "Harry Potter And The Philosopher's Stone",
    },
    {
      id: 2,
      image: require("../assets/Fantasy/DestinyRewritten.jpg"),
      title: "Destiny Rewritten",
    },
    {
      id: 3,
      image: require("../assets/Fantasy/Avatar.jpg"),
      title: "Avatar The Way of Water",
    },
    {
      id: 4,
      image: require("../assets/Fantasy/Witch.jpg"),
      title: "The Little Witch",
    },
    { id: 5, image: require("../assets/Fantasy/Thebeast.jpg"), title: "Beauty and The Beast" },
    {
      id: 6,
      image: require("../assets/Fantasy/percy.jpg"),
      title: "The Percy Jackson...",
    },
    {
      id: 7,
      image: require("../assets/Fantasy/fantastic.jpg"),
      title: "Fantastic Beasts And Where to Find Them",
    },
    {
      id: 8,
      image: require("../assets/Fantasy/Mary.jpg"),
      title: "Mary Poppins Returns",
    },
    {
      id: 9,
      image: require("../assets/Fantasy/charlie.jpg"),
      title: "Charlie and the Chocolate Factory",
    },
    { id: 10, image: require("../assets/Fantasy/toy.jpg"), title: "Toy Story 4" },
    { id: 11, image: require("../assets/Fantasy/aladdin.jpg"), title: "Aladdin (2019)" },
    {
      id: 12,
      image: require("../assets/Fantasy/journey.jpg"),
      title: "Journey to the Center of the Earth",
    },
    { id: 13, image: require("../assets/Fantasy/pirates.jpg"), title: "Pirates of The Caribbean" },
    {
      id: 14,
      image: require("../assets/Fantasy/hobbit.jpg"),
      title: "The Hobbit an Unexpected Journey ",
    },
    {
      id: 15,
      image: require("../assets/Fantasy/romeo.jpg"),
      title: "Romeo And Juliet",
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
        <Text style={styles.Title}>Fantasy Movies</Text>
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

export default AllFantasy;
