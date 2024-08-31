import { View } from 'react-native'
import React from 'react'
import BottomTabNavigator from './BottomTabNavigator'

const BottomParent = () => {
  return (
    <View style ={{ flex: 1 }}>
      <BottomTabNavigator/>
    </View>
  )
}

export default BottomParent