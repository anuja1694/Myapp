import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, FlatList, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

// pending=> border color focused

export default class Item extends Component {
    render() {
        return (
                <TouchableHighlight style={styles.view4}>
                    <Image source={require('./images/food.jpg')} style={styles.banner1}></Image>
                </TouchableHighlight >
        )
    }
}

const styles = StyleSheet.create({

    view4: {
        width: 100,
        height: 105,
        borderWidth: 2,
        backgroundColor: "#FFFFFF",
        marginLeft: 1,
        marginRight: 10,
        borderColor: '#bf0a0a',
        shadowColor: '#EEEEEE',
        borderRadius: 8,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    banner1: {
        height: '95%',
        width: '100%',
        marginTop: 3,

    },

})