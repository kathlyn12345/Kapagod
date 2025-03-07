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
      image: require("../assets/Comedy/Argylle.jpg"),
      title: "Argylle",
    },
    {
      id: 2,
      image: require("../assets/Comedy/Beetlejuice 2.jpg"),
      title: "Beetlejuice 2",
    },
    {
      id: 3,
      image: require("../assets/Comedy/Dumb and Dumber.jpg"),
      title: "Dumb and Dumber",
    },
    {
      id: 4,
      image: require("../assets/Comedy/GhostBusters.jpg"),
      title: "GhostBuster Frozen Empire",
    },
    { id: 5, image: require("../assets/Comedy/Hit Man.jpg"), title: "Hit Man" },
    {
      id: 6,
      image: require("../assets/Comedy/IF.jpg"),
      title: "IF...",
    },
    {
      id: 7,
      image: require("../assets/Comedy/Lisa Frankenstein.jpg"),
      title: "Lisa Frankenstein",
    },
    {
      id: 8,
      image: require("../assets/Comedy/Mean Girls.jpg"),
      title: "Mean Girls",
    },
    {
      id: 9,
      image: require("../assets/Comedy/Mr. Beans.jpg"),
      title: "Mr. Beans",
    },
    { id: 10, image: require("../assets/Comedy/Problemista.jpg"), title: "Problemista" },
    { id: 11, image: require("../assets/Comedy/Ted.jpg"), title: "Ted" },
    {
      id: 12,
      image: require("../assets/Comedy/The Fall Guy.jpg"),
      title: "The Fall Guy",
    },
    { id: 13, image: require("../assets/Comedy/The Peoples Joker.jpg"), title: "The Peoples Joker" },
    {
      id: 14,
      image: require("../assets/Comedy/Trouble 2024.jpg"),
      title: "Trouble 2024",
    },
    {
      id: 15,
      image: require("../assets/Comedy/Wedding Crashers.jpg"),
      title: "Wedding Crashers",
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
        <Text style={styles.Title}>Comedy</Text>
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
