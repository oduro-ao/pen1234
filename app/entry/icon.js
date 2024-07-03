import React from 'react';
import { StyleSheet, View, Image } from 'react-native';



export default function Icon() {
  
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/final_icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
