import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCustomFonts } from "../Components/font";

const Sidebar = ({ isVisible, onClose, onLogout }) => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  if (!isVisible) return null;

  return (
    <Animated.View style={[styles.content, { zIndex: 2 }]}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="menu" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.Title}>MovieNext</Text>
      </View>

      <TouchableOpacity style={styles.Item} onPress={onClose}>
        <Ionicons name="home" size={20} color="#FFFFFF" />
        <Text style={styles.Text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Item} onPress={onClose}>
        <Ionicons name="person" size={20} color="#FFFFFF" />
        <Text style={styles.Text}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Item} onPress={onClose}>
        <Ionicons name="information-circle" size={20} color="#FFFFFF" />
        <Text style={styles.Text}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.Item, styles.logout]} onPress={onLogout}>
        <Ionicons name="log-out" size={20} color="#FFFFFF" />
        <Text style={styles.Text}>Logout</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 220,
    height: "100%",
    backgroundColor: "#000000",
    padding: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },

  Header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },

  Title: {
    color: "rgba(255, 149, 0, 1)",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },

  Item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#FFFFFF",
  },

  Text: {
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 10,
  },

  logout: {
    marginTop: "auto",
  },
});

export default Sidebar;
