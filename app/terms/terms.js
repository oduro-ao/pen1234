import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function Terms() {
  
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, { width: screenWidth }]}
        resizeMode="cover"
        source={require("../assets/termsImage.png")}
      />
      <Text style={styles.bills}>
        Shop everything and pay all bills no matter where you are!
      </Text>
      <View style={styles.terms_container}>
        <Text style={styles.text}>
          By continuing, you agree to our 
          <Text style={styles.link} onPress={() => Linking.openURL("#")}>
            {" "}Terms of Service
          </Text>
          {" "}and
          <Text style={styles.link} onPress={() => Linking.openURL("#")}>
          {" "}Privacy Policy
          </Text>
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push("../signin/signIn")}>
          <Text style={styles.buttonText}>AGREE AND CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 500,
  },
  bills: {
    fontSize: 18,
    textAlign: "center",
    padding: 60,
    paddingTop: 26,
    paddingBottom: 0,
    fontWeight: "600",
  },
  terms_container: {
    padding: 60,
    paddingTop: 0,
    paddingBottom: 0,
  },
  text: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
    fontSize: 18,
    color: "#333",
    fontWeight: "500",

  },
  link: {
    color: "green",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
