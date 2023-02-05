import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SafeView from './navigation/CustomerMode/SafeView';
import LoginScreen from './navigation/BusinessMode/LoginScreen'
import ModeScreen from './ModeScreen';
import BusinessContainer from './navigation/BusinessMode/BusinessContainer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initalRouteName='Mode'>
          <Stack.Screen name='Mode' component={ModeScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Customer' component={SafeView} options={{headerShown: false}}/>
          <Stack.Screen name='Business' component={BusinessContainer} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}