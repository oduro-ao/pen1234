import { Link, router } from "expo-router";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import "firebase/auth";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";



export default function SignIn() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = FIREBASE_AUTH;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      alert("check email");
    } catch (error) {
      alert('Sign in faild' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.signup_container}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
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
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
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

        <TouchableOpacity style={styles.forgot_passwd}>
          <Text style={styles.forgottxt}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signup}>
        Don't have an account?{" "}
        <TouchableOpacity onPress={() => router.push("../signup/signUp")}>
          <Text style={styles.signup_text}>Sign Up</Text>
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
    alignItems: "center",
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
  forgottxt: {
    fontSize: 18,
    color: "green",
    fontWeight: "350",
  },
  forgot_passwd: {
    height: 42,
    marginTop: 20,
    fontSize: 20,
    paddingLeft: 10,
  },
  signup: {
    textAlign: "center",
    color: "#999",
    fontSize: 17,
    marginTop: 80,
  },
  signup_text: {
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
