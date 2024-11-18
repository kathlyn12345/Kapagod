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

const AllHorror = () => {
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
      image: require("../assets/Horror/conjuring.jpg"),
      title: "The Conjuring",
    },
    {
      id: 2,
      image: require("../assets/Horror/It.jpg"),
      title: "IT Chapter Two",
    },
    {
      id: 3,
      image: require("../assets/Horror/worldz.jpg"),
      title: "World War Z",
    },
    {
      id: 4,
      image: require("../assets/Horror/remains.jpg"),
      title: "The Remains",
    },
    { id: 5, image: require("../assets/Horror/witch.jpg"), title: "House of the Witch" },
    {
      id: 6,
      image: require("../assets/Horror/Dark.jpg"),
      title: "Dark Shadows ",
    },
    {
      id: 7,
      image: require("../assets/Horror/conjuring2.jpg"),
      title: "The Conjuring 2",
    },
    {
      id: 8,
      image: require("../assets/Horror/lady.jpg"),
      title: "Cleaning Lady",
    },
    {
      id: 9,
      image: require("../assets/Horror/death.jpg"),
      title: "Till Death",
    },
    { id: 10, image: require("../assets/Horror/friend.jpg"), title: "Friend Request" },
    { id: 11, image: require("../assets/Horror/night.jpg"), title: "Nightmare Side" },
    {
      id: 12,
      image: require("../assets/Horror/slender.jpg"),
      title: "Slender Man",
    },
    { id: 13, image: require("../assets/Horror/play.jpg"), title: "Wants to Play" },
    {
      id: 14,
      image: require("../assets/Horror/eye.jpg"),
      title: "The 3rd Eye 2",
    },
    {
      id: 15,
      image: require("../assets/Horror/evil.jpg"),
      title: "The Evil Next Door",
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
        <Text style={styles.Title}>Horror Movies</Text>
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

export default AllHorror;
