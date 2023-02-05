import * as React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';

function NewsScreen({navigation}) {
    return (
        <View style={styles.appContainer}>
            <View style={{flex: 1.3}} />

            {/*Main Title*/}
            <View style={styles.titleContainer}>
                <Text style={styles.setFontSizeOne}>News</Text>
            </View>
            <View style={{flex: 1.8}} />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        justifyContent: 'center'
    },
    titleContainer: {
        marginBottom: 8,
        flexDirection: 'column',
        alignItems: 'center'
    },
    wholeInputContainer: {
        flex: 3
    },
    inputTitle: {
        marginBottom: 8,
        alignItems: 'center'
    },
    singleInputContainer: {
        marginBottom: 8,
        alignItems: 'center'
    },
    textInput: {
        borderRadius: 8,
        width: '80%',
        marginRight: 8,
        padding: 12,
        marginBottom: 8,
        backgroundColor: '#e5e5e5'
    },
    button: {
        justifyContent:'space-between',
        flexDirection: 'row',
        marginHorizontal: '20%'
    },
    singleButton: {
        alignItems: 'center'
    },
    setFontSizeOne: {
        fontSize: 20
    },
});

export default NewsScreen;