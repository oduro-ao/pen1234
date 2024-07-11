import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { router } from "expo-router";
import { signInWithPhoneNumber, RecaptchaVerifier  } from "firebase/auth";

export default function SignInPhoneNumber({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState(null);
  const auth = FIREBASE_AUTH;
  const currentYear = new Date().getFullYear();



  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your phone number</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.flagButton}>
          <Image
            source={require("../assets/ghana.png")}
            style={styles.flagImage}
          />
          <Image
            source={require("../assets/downArrow.png")}
            style={styles.arrowImage}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Phone number"
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.push("../signinPhoneNumVer/signin_phone_number_verification")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {currentYear} <Text style={styles.footerText_servio}>Servio.</Text>
          <Text style={styles.footerText_terms}>Terms of Service</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
  },
  flagButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#93939348",
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
  flagImage: {
    width: 62,
    height: 44,
  },
  arrowImage: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    height: 52,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
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
