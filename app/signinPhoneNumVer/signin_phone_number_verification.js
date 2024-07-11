import React, { useState, useRef, useEffect } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function signin_phone_number_verification() {
  const currentYear = new Date().getFullYear();

  const [code, setCode] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(120); // 2 minutes in seconds
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your number</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.codeInput}
            value={digit}
            onChangeText={(text) => handleCodeChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
      <Text style={styles.resendText}>
        Resend : 
        {Math.floor(resendTimer / 60)
          .toString()
          .padStart(2, "0")}
        :{(resendTimer % 60).toString().padStart(2, "0")}
      </Text>
      <TouchableOpacity onPress={() => alert("signin complete")} style={styles.button}>
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
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 90,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
  },
  resendText: {
    color: "#888",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: '600',
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
