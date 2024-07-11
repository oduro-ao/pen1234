import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Terms from './terms/terms';
import SignIn from './signin/signIn';
import firebase from 'firebase/compat/app';


export default function App() {
  return (
    <View style={styles.container}>
      <Terms />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
