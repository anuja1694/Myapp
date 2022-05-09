import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, } from "react-native";
import Item from "./item";


export default class List extends Component {
    render() {
        const TEMP_DATA = [1, 2, 3];
        return (
            <FlatList
                data={TEMP_DATA}
                // keyExtractor={(item) => `product_${item}`}
                horizontal={true}
                // contentContainerStyle={styles.productsContainer}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Item />}
            />
        )
    }
}

const styles = StyleSheet.create({
    
    
    // productsContainer: {
    //     paddingHorizontal: 10,
    // }
})