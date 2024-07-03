import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export default function SignUp() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const auth = FIREBASE_AUTH;
  const [isPasswordVisible, setIsPasswordVisible] = useState("");

  const handleSignUp = async () => {
    if (password !== retypePassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Sign Up Successful");
      router.push("../number/number");
    } catch (error) {
      alert("Sign Up faild, Try again" + error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("../signin/signIn")}>
        <Image
          style={styles.backButton}
          source={require("../assets/backArrow.png")}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.signup_container}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Email"
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.password_text}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={function () {
              setIsPasswordVisible(!isPasswordVisible);
            }}
            style={styles.icon}
          >
            <Image
              source={
                isPasswordVisible
                  ? require("../assets/showPassword.png")
                  : require("../assets/hidePassword.png")
              }
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.password_text}
            placeholder="Retype Password"
            value={retypePassword}
            onChangeText={setRetypePassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={function () {
              setIsPasswordVisible(!isPasswordVisible);
            }}
            style={styles.icon}
          >
            <Image
              source={
                isPasswordVisible
                  ? require("../assets/showPassword.png")
                  : require("../assets/hidePassword.png")
              }
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.orText}>or sign up with</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("../assets/google.png")}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Google</Text>
      </TouchableOpacity>
      <Text style={styles.login}>
        Already have an account? .
        <TouchableOpacity onPress={() => router.push("../signin/signIn")}>
          <Text style={styles.login_text}>Log in</Text>
        </TouchableOpacity>
      </Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {currentYear} <Text style={styles.footerText_servio}>Servio.</Text>{" "}
          <Text style={styles.footerText_terms}>Terms of Service</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    marginTop: 75,
    textAlign: "center",
  },
  signup_container: {
    marginTop: 60,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#999",
    height: 45,
    marginBottom: 25,
    fontSize: 20,
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#999",
    height: 45,
    marginBottom: 25,
    fontSize: 20,
    paddingLeft: 10,
  },
  password_text: {
    fontSize: 20,
    flex: 1,
  },
  icon: {
    padding: 10,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  button: {
    backgroundColor: "#28a745",
    borderRadius: 10,
    height: 45,
    marginTop: 40,
    fontSize: 20,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "600",
  },
  orText: {
    color: "#999",
    textAlign: "center",
    fontSize: 17,
    marginTop: 35,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    width: 160,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    height: 42,
    marginTop: 20,
    fontSize: 20,
    paddingLeft: 10,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 18,
    color: "#222",
    fontWeight: "350",
  },
  login: {
    textAlign: "center",
    color: "#999",
    fontSize: 17,
    marginTop: 80,
  },
  login_text: {
    color: "#111",
    fontSize: 17,
    fontWeight: "700",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    fontSize: 20,
    color: "#999",
  },
  footerText_servio: {
    fontWeight: "800",
    color: "#000",
  },
  footerText_terms: {
    color: "green",
  },
});
