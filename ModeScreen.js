import * as React from 'react';
import { Image, View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { useSafeAreaInsets, withSafeAreaInsets } from 'react-native-safe-area-context';

function ModeScreen({navigation}) {
    const insets = useSafeAreaInsets();
    return (
        <View style={{flex:1, backgroundColor: '#539e8a'}}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                marginHorizontal: 16,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}>
                <View style={{flex: 1}}/>
                <View style={{flex: 4, alignItems: 'center'}}>
                    <Image source={require('./assets/logo.png')} style={{resizeMode: 'contain', width: '55%', height: '40%'}}/>
                    <Text style={styles.title}>haapi</Text>
                    <Text style={styles.subtitle}>Support your local AAPI businesses.</Text>
                </View>
                <View style={{flex: 2}}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 24,
                        flex: 1
                    }}>You are a...</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '13%'}}>
                        <Pressable style={button.background} onPress={() => navigation.navigate("Customer")}>
                            <Text style={button.text}>Customer</Text>
                        </Pressable>
                        <Pressable style={button.background} onPress={() => navigation.navigate("Business")}>
                            <Text style={button.text}>Business</Text>
                        </Pressable>
                    </View>
                    <View style={{flex: 3}}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 72,
        fontWeight: 'bold',
        color: '#f6c5be'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        color: '#f6c5be'
    }
})

const button = StyleSheet.create({
    background: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 9,
      paddingHorizontal: 20,
      elevation: 4,
      backgroundColor: '#427d6d',
      borderRadius: 8
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
    //   color: '#f6c5be',
      color: 'white',
    },
  });

export default ModeScreen;