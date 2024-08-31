import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.push('OnBoarding');
        }, 5000)
    }, [])

  return (
    <View style = { styles.container }>
      <Image style = {styles.image} source={require('../../assets/images/Image5.png')} />
      <Text style = { styles.heading }>Stay Focused!</Text>
      <Text style = { styles.text }>Get the cup filled of your choice to stay focused and awake. Diffrent type of coffee menu, hot lottee cappucino</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECE0D1',
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  heading: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#38220F',
  },
  text: {
    textAlign: 'center',
    marginLeft: 38, 
    marginRight: 38,
    marginTop: 20,
    fontSize: 14,
    letterSpacing: 1.2,
    lineHeight: 25
  }
})