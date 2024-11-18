import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useCustomFonts } from "../Components/font";

const Action = ({ movies, onViewAllPress }) => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  console.log(movies);

  return (
    <View style={styles.container}>
      <View style={styles.Wrapper}>
        <Text style={styles.Title}>Action</Text>
        <TouchableOpacity onPress={() => onViewAllPress ('AllAction')}>
          <Text style={styles.text}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id ? item.id.toString() : `${item.title}-${Math.random()}`}  // Ensure unique key
        horizontal
        renderItem={({ item }) => (
          <View style={styles.Cards}>
            <Image source={item.image} style={styles.Images} />
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  Wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 2,
  },

  Title: {
    fontSize: 22,
    color: "#FFFFFF",
    fontFamily: "Roboto-Bold",
  },

  text: {
    color: "#cccccc",
    fontSize: 13,
    fontFamily: "Roboto-SemiBold",
  },

  Cards: {
    marginRight: 10,
    alignItems: "center",
  },

  Images: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },

  title: {
    color: "#FFFFFF",
    textAlign: "left",
    marginTop: 5,
    width: 120,
  },
});

export default Action;
