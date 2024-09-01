import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/main/Home';
import Liked from '../../screens/main/Liked';
import Profile from '../../screens/main/Profile';
import Cart from '../../screens/main/Cart';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

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
          height: 5.8 * 10,
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
        <Bottom.Screen name='Home' component={Home} options={{ headerShown: false, tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View>
                <AntDesign
                  name="home"
                  size={24}
                  color={ focused ? '#967259' : '#000' }
                />
              </View>
            );
          }, }}/>
        <Bottom.Screen name='Like' component={Liked} options={{ headerShown: false, tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View>
                <AntDesign name="hearto" size={24} color={focused ? '#967259' : '#000'} />
              </View>
            );
          }, }}/>
        <Bottom.Screen name='Cart' component={Cart} options={{ headerShown: false, tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View>
                <FontAwesome name="opencart" size={26} color={focused ? '#967259' : '#000'} />
              </View>
            );
          }, }}/>
        <Bottom.Screen name='Profile' component={Profile} options={{ headerShown: false, tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View>
                <AntDesign name="user" size={26} color={focused ? '#967259' : '#000'} />
              </View>
            );
          }, }}/>
    </Bottom.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  // activeTabBackground: {
  //   // backgroundColor: '#000',
  //   padding: 8,
  //   borderRadius: 10,
  // },
  // activeTabIconBackground: {
  //   backgroundColor:'orange',
  //   padding: 16,
  //   borderRadius: 20,
  //   color: '#fff',
  // },
  // ticketIcon: {
  //   width: 26,
  //   height: 26,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
})