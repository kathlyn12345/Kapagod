import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MovieNest</Text>

      <Text style={styles.subtitle}>Create a new account</Text>

      <View style={styles.SlashContainer}>
        <View style={[styles.slash, styles.one]} />
        <TouchableOpacity
          style={[styles.socialButton]}
          onPress={() => Linking.openURL("https://www.google.com")}
        >
          <Image
            source={require("../assets/icons/Google.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.socialButton]}
          onPress={() => Linking.openURL("https://www.facebook.com")}
        >
          <Image
            source={require("../assets/icons/Facebook.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <View style={[styles.slash, styles.two]} />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome
          name="envelope"
          size={20}
          color="rgba(255, 255, 255, 0.7)"
          style={[styles.inputIcon, { marginLeft: 15 }]}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed"
          size={20}
          color="rgba(255, 255, 255, 0.7)"
          style={[styles.inputIcon, { marginLeft: 15 }]}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={passwordVisible ? "eye-off" : "eye"}
            size={20}
            color="rgba(255, 255, 255, 0.7)"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed"
          size={20}
          color="rgba(255, 255, 255, 0.7)"
          style={[styles.inputIcon, { marginLeft: 15 }]}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={toggleConfirmPasswordVisibility}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={confirmPasswordVisible ? "eye-off" : "eye"}
            size={20}
            color="rgba(255, 255, 255, 0.7)"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          onPress={() => setIsTermsAccepted(!isTermsAccepted)}
          style={styles.checkbox}
        >
          <MaterialCommunityIcons
            name={
              isTermsAccepted ? "checkbox-marked" : "checkbox-blank-outline"
            }
            size={25}
            color="#FFFFFF"
          />
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          I agree to the{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://www.example.com/terms")}
          >
            Terms and Conditions
          </Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.signUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signIn}>
        <Text style={styles.signInText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.signInLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 20,
  },

  title: {
    fontFamily: "Raleway-ExtraBold",
    fontSize: 50,
    color: "#FF9500",
    marginBottom: 10,
  },

  subtitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 20,
  },

  SlashContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  slash: {
    height: 1,
    backgroundColor: "#FFFFFF",
  },

  one: {
    width: 50,
  },

  two: {
    width: 50,
  },

  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  socialButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: 318,
    height: 45,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },

  input: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 5,
    fontSize: 16,
    color: "#000000",
  },

  inputIcon: {
    marginRight: 15,
  },

  eyeIcon: {
    position: "absolute",
    right: 10,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
    justifyContent: "flex-start",
  },

  checkbox: {
    marginRight: 10,
  },

  checkboxLabel: {
    color: "#FFFFFF",
    fontSize: 14,
  },

  link: {
    color: "#FF9500",
    fontWeight: "bold",
  },

  signUp: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  signUpText: {
    color: "rgba(0, 0, 0, 0.8)",
    fontSize: 20,
    fontFamily: "Roboto-Bold",
  },

  signIn: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  signInText: {
    color: "#FFFFFF",
    fontSize: 14,
  },

  signInLink: {
    color: "#FF9500",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SignUp;
