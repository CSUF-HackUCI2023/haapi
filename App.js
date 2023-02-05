import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CustomerContainer from './navigation/CustomerMode/CustomerContainer';
import UserView from './UserView';


export default function App() {
  return (
    <SafeAreaProvider>
        <View style={styles.container}>
          <UserView/>
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});