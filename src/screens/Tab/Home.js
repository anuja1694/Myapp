import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import Carousel from "react-native-banner-carousel";
import Icon from 'react-native-vector-icons/MaterialIcons';
import List from "./List";


const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;


export default class Home extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Carousel
                    pageSize={450}>
                    <Image source={require('./images/banner.jpg')} style={{ width: BannerWidth, height: BannerHeight }}></Image>
                    <Image source={require('./images/banner.jpg')} style={{ width: BannerWidth, height: BannerHeight }}></Image>
                </Carousel>
                <View style={{flexDirection:'row'}}>
                <Icon name="arrow-back-ios" size={25} color='#bf0a0a' style={{ marginTop: 60, marginLeft: 8 }} />
                <List />
                <Icon name="arrow-forward-ios" size={25} color='#bf0a0a' style={{ marginTop: 60, marginRight: 10 }} /> 
                </View>
                <Image source={require('./images/special.png')} style={styles.banner2}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner1: {
        height: '95%',
        width: '100%',
        marginTop: 3,

    },
    banner2: {
        height: '30%',
        width: '100%',
        marginTop: 15,


    },
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


})