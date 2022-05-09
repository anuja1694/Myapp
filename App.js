import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './src/screens/Tab/Home';
import Chat from './src/screens/Tab/Offers';
import Contacts from './src/screens/Tab/Rewards';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Settings from './src/screens/BottomTab/Settings';
import Help from './src/screens/BottomTab/Help';
import Account from './src/screens/BottomTab/Account';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Branch from './src/screens/Drawer/Branch';
import Course from './src/screens/Drawer/Course';
import Syllabus from './src/screens/Drawer/Syllabus';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from "react-native-dynamic-search-bar";
import Offers from './src/screens/Tab/Offers';
import Rewards from './src/screens/Tab/Rewards';



const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


function MyTab({ navigation }) {
  return (
    <View style={styles.commonStyle} >
      <SearchBar
        style={styles.Searchbar}
        placeholder="Search here"
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#a10702'
          },
          tabBarLabelStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Offers" component={Offers} />
        <Tab.Screen name="Rewards" component={Rewards} />
      </Tab.Navigator>
    </View >
  );
}

function MyDrawer() {
  return (
    <View style={styles.commonStyle} >
      <Drawer.Navigator options={{ headerShown: false }} screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 240,
        },
      }} >
        <Drawer.Screen name="Home" component={MyTab} options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? 'red' : 'black'}
            />
          ),
        }} />
        <Drawer.Screen name="Myorder" component={Course} options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="map"
              size={size}
              color={focused ? 'red' : 'black'}
            />
          ),
        }} />
        <Drawer.Screen name="Mycart" component={Syllabus} options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="cart"
              size={size}
              color={focused ? 'red' : 'black'}
            />
          ),
        }} />
        <Drawer.Screen name="Settings" component={MyBottomTab} options={{
         headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="settings"
              size={size}
              color={focused ? 'red' : 'black'}
            />
          ),
        }} />
      </Drawer.Navigator>
    </View >
  );
}

function MyBottomTab() {
  return (

    <BottomTab.Navigator
      activeColor="white"
      inactiveColor="#c4b5b5"
      barStyle={{ paddingBottom: 10, backgroundColor: '#a10702' }}
    >
      <BottomTab.Screen name="Settings" component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
          ),
        }} />
      <BottomTab.Screen name="Help" component={Help}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="help" color={color} size={26} />
          ),
        }} />
      <BottomTab.Screen name="Account" component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} />
    </BottomTab.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

  commonStyle: {
    flex: 1,
  },
  Searchbar: {
    height: 50,
    width: '95%',
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 2

  },
  icon: {
    marginTop: 15

  }
})