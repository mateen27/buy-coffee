import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/main/Home';
import Liked from '../../screens/main/Liked';
import Profile from '../../screens/main/Profile';
import Cart from '../../screens/main/Cart';

const BottomTabNavigator = () => {

    const Bottom = createBottomTabNavigator();

  return (
    <Bottom.Navigator screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#fefefe',
          borderColor : '#fff' ,
          borderWidth: 3,
          height: 5.5 * 10,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 5,
      },
    }}>
        <Bottom.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <Bottom.Screen name='Like' component={Liked} options={{ headerShown: false }}/>
        <Bottom.Screen name='Cart' component={Cart} options={{ headerShown: false }}/>
        <Bottom.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
    </Bottom.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})