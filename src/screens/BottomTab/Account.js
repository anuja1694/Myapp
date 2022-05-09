import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, FlatList, TouchableHighlight } from "react-native";


// pending=> border color focused

export default class Account extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Account</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }


})