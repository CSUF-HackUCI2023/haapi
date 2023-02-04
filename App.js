import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CustomerContainer from './navigation/CustomerMode/CustomerContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomerContainer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});