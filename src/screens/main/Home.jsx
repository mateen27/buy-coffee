import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style = {{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Button onPress={() => navigation.openDrawer()} title='Click Me'/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})