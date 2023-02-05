import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AnnouncementScreen from './AnnouncementScreen';
import NewsScreen from './NewsScreen';

const Stack = createNativeStackNavigator();

export default function BusinessContainer() {
  return (
    <SafeAreaProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initalRouteName='Register'>
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Announcement' component={AnnouncementScreen} options={{headerShown: false}}/>
          <Stack.Screen name='News' component={NewsScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}