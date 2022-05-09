import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, FlatList, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'




// pending=> border color focused

export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableHighlight 
                    underlayColor='transparent'
                    onPress={() => this.props.navigation.navigate('Home')}
                    >
                    <Icon name="arrow-back-ios" size={25} color='#bf0a0a' style={{ marginLeft: 20 }}  />
                    </TouchableHighlight >
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 100, color: '#bf0a0a' }}>Settings</Text>
                </View>
                <View style={styles.view4}>
                    <Text style={styles.txt1} >
                        Edit Profile
                    </Text>
                    <Icon name="arrow-forward-ios" size={25} color='#bf0a0a' style={{  marginTop:10, marginRight:10 }} />
                </View>
                <View style={styles.view4}>
                    <Text style={styles.txt1} >
                        Notification setting
                    </Text>
                    <Icon name="arrow-forward-ios" size={25} color='#bf0a0a' style={{  marginTop:10, marginRight:10 }} />
                </View>
                <View style={styles.view4}>
                    <Text style={styles.txt1} >
                        App Permission
                    </Text>
                    <Icon name="arrow-forward-ios" size={25} color='#bf0a0a' style={{  marginTop:10, marginRight:10 }} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view4: {
        width: 370,
        height: 45,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#bf0a0a',
        shadowColor: '#EEEEEE',
        borderRadius: 8,
        marginTop: 20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    txt1: {
        fontFamily: 'Gilroy',
        fontWeight: '700',
        fontSize: 18,
        color: '#002333',
        marginTop: 10,
        marginLeft: 20
    },
    chapterstxt1: {
        fontFamily: 'Gilroy',
        fontSize: 10,
        fontWeight: '500',
        color: '#9F9F9F',
        marginTop: 5,
        marginLeft: 5
    }


})