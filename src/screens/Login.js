import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image, TextInput } from "react-native";


// pending=> border color focused

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/log.jpg')} style={styles.logo}></Image>
                <Text style={styles.textlogo}>Food App</Text>
                <View style={styles.inputview3}>
                    <TextInput placeholder='User name' placeholderTextColor='black' underlayColor='transparent' />
                </View>
                <View style={styles.inputview4}>
                    <TextInput placeholder='Password' placeholderTextColor='black' underlayColor='transparent' />
                </View>
                <TouchableHighlight
                    style={styles.buttonview}
                    underlayColor='transparent'
                    onPress={() => this.props.navigation.navigate('MyDrawer')}>
                    <Text style={styles.buttontext}>Login</Text></TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    buttonview: {
        width: '50%',
        height: 55,
        backgroundColor: '#bf0a0a',
        marginTop: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    logo: {
        height: 145,
        width: 150,
        marginTop: 180,

    },
    textlogo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 10
    },
    inputview3: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#9f3fbf',
        marginTop: 15,
        paddingLeft: 20,
        alignItems: 'center',
        marginLeft: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 15
    },
    inputview4: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#9f3fbf',
        marginTop: 15,
        paddingLeft: 20,
        alignItems: 'center',
        marginLeft: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 15
    }

})