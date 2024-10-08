import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnBoarding');  // maving to the OnBoarding SCreen
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
    width: responsiveScreenWidth(90),
    height: 500,
    resizeMode: 'contain',
    marginBottom: 50,
    marginRight: responsiveWidth(5)
  },
  heading: {
    fontSize: responsiveScreenFontSize(3), 
    fontWeight: 'bold',
    color: '#38220F',
  },
  text: {
    textAlign: 'center',
    marginLeft: 38, 
    marginRight: 38,
    marginTop: 20,
    fontSize: 17,
    letterSpacing: 1.5,
    lineHeight: responsiveScreenHeight(3),
  }
})