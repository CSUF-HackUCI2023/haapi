import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import UserView from './UserView';
import ModeScreen from './ModeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initalRouteName='Mode'>
          <Stack.Screen name='Mode' component={ModeScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Customer' component={UserView} options={{headerShown: false}}/>
          <Stack.Screen name='Business' component={ModeScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}