import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CustomerContainer from './CustomerContainer';

export default function SafeView(props) {
    const insets = useSafeAreaInsets();
    return (
        <View style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right
        }}>
            <CustomerContainer/>
        </View>
    )
}