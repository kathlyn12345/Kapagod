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

const AllRomance = () => {
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
      image: require("../assets/Romance/titanic.jpg"),
      title: "Titanic",
    },
    {
      id: 2,
      image: require("../assets/Romance/50.jpg"),
      title: "50 First Dates",
    },
    {
      id: 3,
      image: require("../assets/Romance/date.jpg"),
      title: "HoliDates",
    },
    {
      id: 4,
      image: require("../assets/Romance/hating.jpg"),
      title: "The Hating Game",
    },
    { id: 5, image: require("../assets/Romance/last.jpg"), title: "Last Year's Mistake" },
    {
      id: 6,
      image: require("../assets/Romance/pass.jpg"),
      title: "Passengers",
    },
    {
      id: 7,
      image: require("../assets/Romance/racing.jpg"),
      title: "Racing Hearts",
    },
    {
      id: 8,
      image: require("../assets/Romance/wonder.jpg"),
      title: "Mean To The Wonder",
    },
    {
      id: 9,
      image: require("../assets/Romance/leap.jpg"),
      title: "Leap Year",
    },
    { id: 10, image: require("../assets/Romance/man.jpg"), title: "A Man Called Otto" },
    { id: 11, image: require("../assets/Romance/ends.jpg"), title: "It Ends With Us" },
    {
      id: 12,
      image: require("../assets/Romance/bride.jpg"),
      title: "RunawayBride",
    },
    { id: 13, image: require("../assets/Romance/girl.jpg"), title: "Keeping My Girl" },
    {
      id: 14,
      image: require("../assets/Romance/desk.jpg"),
      title: "The Boss's Desk",
    },
    {
      id: 15,
      image: require("../assets/Romance/before.jpg"),
      title: "Me Before You",
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
        <Text style={styles.Title}>Romance</Text>
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

export default AllRomance;
