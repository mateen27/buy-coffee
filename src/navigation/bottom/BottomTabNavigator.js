import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/main/Home';

const BottomTabNavigator = () => {

    const Bottom = createBottomTabNavigator();

  return (
    <Bottom.Navigator>
        <Bottom.Screen name='Home' component={Home} options={{ headerShown: false }}/>
    </Bottom.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})