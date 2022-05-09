import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, FlatList, TouchableHighlight } from "react-native";


// pending=> border color focused

export default class Course extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Courses</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }


})