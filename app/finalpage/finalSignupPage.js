import React from 'react';
import { Link, router } from 'expo-router';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function FinalSignupPage() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('../assets/correctImage.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={() => router.push("../signup/signUp")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 140,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
