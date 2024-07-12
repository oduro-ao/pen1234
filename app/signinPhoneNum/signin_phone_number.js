import React, { useState } from "react";
import { router } from "expo-router";
import { countryData } from "../countryData";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Image
} from "react-native";

export default function Number() {
  const [countryCode, setCountryCode] = useState("+233");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedFlag, setSelectedFlag] = useState("🇬🇭");
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCountrySelect = (country) => {
    setCountryCode(country.value);
    setSelectedFlag(country.flag);
    setIsPickerVisible(false); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your phone number</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={() => setIsPickerVisible(true)}
          style={styles.flagButton}
        >
          <Text style={styles.flag}>{selectedFlag}</Text>
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
      <TouchableOpacity onPress={() => router.push("../signinPhoneNumVer/signin_phone_number_verification")} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Modal visible={isPickerVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <ScrollView>
              {countryData.map((item) => (
                <TouchableOpacity
                  key={item.value}
                  style={styles.countryItem}
                  onPress={() => handleCountrySelect(item)}
                >
                  <Text style={styles.countryText}>
                    {item.flag} {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              onPress={() => setIsPickerVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    paddingTop: 150,
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "400",
    marginBottom: 70,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  flagButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  flag: {
    fontSize: 44,
  },
  arrowImage: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    height: 62,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxHeight: "50%",
  },
  countryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    justifyContent: "center",
  },
  countryText: {
    fontSize: 18,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
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
