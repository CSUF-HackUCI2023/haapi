import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CustomerContainer from './navigation/CustomerMode/CustomerContainer';
import RegisterScreen from './BusinessMode/RegisterScreen';
import LoginScreen from './BusinessMode/LoginScreen';

export default function UserView() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right
        }}>
            <LoginScreen />
        </View>
    )
}