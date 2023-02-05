import * as React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';

function LoginScreen() {
    return (
        <View style={styles.appContainer}>
            <View style={{flex: 1}} />

            {/*Main Title*/}
            <View style={styles.titleContainer}>
                <Text style={styles.setFontSizeOne}>Login</Text>
            </View>

            <View style={{flex: 0.8}} />
        
            {/*Inputs*/}
            <View style={styles.wholeInputContainer}>
            <View style={styles.inputTitle}>
                <Text>Business Name</Text>
            </View>
            <View style={styles.singleInputContainer}>
                <TextInput style={styles.textInput} placeholder='Enter name here' placeholderTextColor="#000" />
            </View>

            <View style={styles.inputTitle}>
                <Text>Address</Text>
            </View>
            <View style={styles.singleInputContainer}>
                <TextInput style={styles.textInput} placeholder='Enter address here' placeholderTextColor="#000"/>
            </View>
            </View>

            {/*Buttons*/}
            <View style={styles.button}>
            <View style={styles.singleButton}>
                <Button title= 'Register' />
            </View>
            <View style={styles.singleButton}>
                <Button title= 'Login' />
            </View>
            </View>
            <View style={{flex: 2.5}} />
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
    }
});

export default LoginScreen;