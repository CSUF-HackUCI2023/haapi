import * as React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';

function RegisterScreen() {
    return (
        <View style={styles.appContainer}>
            <View style={{flex: 1}} />

            {/*Main Title*/}
            <View style={styles.titleContainer}>
                <Text style={styles.setFontSizeOne}>Register Your Business</Text>
            </View>

            <View style={{flex: 0.4}} />
        
            {/*Inputs*/}
            <View style={styles.wholeInputContainer}>
            <View style={styles.inputTitle}>
                <Text>Business</Text>
            </View>
            <View style={styles.singleInputContainer}>
                <TextInput style={styles.textInput} placeholder='Enter shop name' placeholderTextColor="#000" />
            </View>

            <View style={styles.inputTitle}>
                <Text>E-mail</Text>
            </View>
            <View style={styles.singleInputContainer}>
                <TextInput style={styles.textInput} placeholder='Enter e-mail' placeholderTextColor="#000"/>
            </View>

            <View style={styles.inputTitle}>
                <Text>Password</Text>
            </View>
            <View style={styles.singleInputContainer}>
                <TextInput style={styles.textInput} placeholder='Enter new password' placeholderTextColor="#000"/>
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
            <View style={{flex: 1.4}} />
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

export default RegisterScreen;