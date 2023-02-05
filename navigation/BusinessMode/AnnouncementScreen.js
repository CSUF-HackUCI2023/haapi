import * as React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';

function AnnouncementScreen({navigation}) {
    return (
        <View style={styles.appContainer}>
            <View style={{flex: 1.8}} />

            {/*Main Title*/}
            <View style={styles.titleContainer}>
                <Text style={styles.setFontSizeOne}>Make an Announcement!</Text>
            </View>

            <View style={{flex: 1}} />
        
            {/*Inputs*/}
            <View style={styles.wholeInputContainer}>
            <View style={styles.inputTitle}>
                <Text>Share your business news here!</Text>
            </View>
            <View style={styles.singleInputContainer}>
                <TextInput style={styles.textInput} placeholder='Events, deals, etc.' placeholderTextColor="#000" />
            </View>

            <View style={styles.inputTitle}>
                <Text>Upload images</Text>
            </View>
            <View style={styles.singleInputContainer}>
                <TextInput style={styles.textInput} placeholder='Upload images here' placeholderTextColor="#000"/>
            </View>
            </View>

            {/*Buttons*/}
            <View>
                <Button title='Post' onPress={() => navigation.navigate("News")}/>
            </View>
            <View style={{flex: 3}} />
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
    },
    // backButton: {
    //     alignSelf: 'flex-start',
    //     marginLeft: -20,
    //     marginTop: 10
    // }
});

export default AnnouncementScreen;