import * as React from 'react';

import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './HomeScreen';
import BookmarkScreen from './BookmarkScreen';

const homeName = 'Home';
const bookmarkName = 'Bookmarks';

const Tab = createBottomTabNavigator();

function CustomerContainer()
{
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name)
                        {
                            case homeName:
                                iconName = focused ? 'home' : 'home-outline';
                                break;
                            case bookmarkName:
                                iconName = focused ? 'bookmarks' : 'bookmarks-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    }
                })}
                >

                <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}}/>
                <Tab.Screen name={bookmarkName} component={BookmarkScreen} options={{headerShown: false}}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default CustomerContainer;