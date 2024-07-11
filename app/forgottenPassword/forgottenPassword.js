import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export default function ForgottenPassword() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = FIREBASE_AUTH;

  const forgotPassword = async () => {
    
    try {
      const response = await sendPasswordResetEmail(
        auth,
        email,
 
      );
      alert("password reset email sent");
      router.push("../terms/terms");
    } catch (error) {
      alert("reset faild, Try again" + error.message);
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
      <Text style={styles.title}>Reset Password</Text>
      <View style={styles.reset_container}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Email"
        />

        <TouchableOpacity onPress={forgotPassword} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      
      
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
  reset_container: {
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
