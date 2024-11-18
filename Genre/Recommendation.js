import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const Recommendation = ({ movie }) => (
  <View style={styles.container}>
    <Text style={styles.Title}>{movie.title}</Text>
    <FlatList
      data={movie.movies}  // Use movie.movies instead of movie.images
      keyExtractor={(item, index) => index.toString()}
      horizontal
      renderItem={({ item, index }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  </View>
);


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  Title: {
    fontSize: 22,
    color: "#FFFFFF",
    fontFamily: "Roboto-Bold",
    marginBottom: 10,
  },

  card: {
    marginRight: 10,
    alignItems: "left",
  },

  image: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },

  title: {
    marginTop: 5,
    fontSize: 14,
    color: "#FFFFFF",
  },
});

export default Recommendation;
