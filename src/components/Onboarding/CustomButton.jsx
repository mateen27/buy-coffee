import { StyleSheet, TouchableWithoutFeedback, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Animated, { interpolateColor, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

const CustomButton = ( { handlePress, buttonValue } ) => {
    const { height } = useWindowDimensions();
    const animatedColor = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            buttonValue.value,
            [0, height, 2 * height],
            [ '#fd94b2', '#f8dac2', '#154f40']
        );

        return {
            backgroundColor: backgroundColor,
        }
    })

    // making the width & height of the button for the last index change
    const buttonAnimationValue = useAnimatedStyle(() => {
        return {
            width: buttonValue.value == 2* height ? withSpring(260) : withSpring(100),
            height: buttonValue.value == 2* height ? withSpring(100) : withSpring(100)
        }
    })

    // making the arrow animation
    const arrowAnimationStyle = useAnimatedStyle(() => {
        return {
            opacity: buttonValue.value === 2 * height ? 
            withTiming(0) : withTiming(1),
            transform: [
                {
                    translateX: buttonValue.value === 2* height ?
                    withTiming(100) : withTiming(0)
                }
            ]
        }
    })

    // making the text animation
    const textAnimationStyle = useAnimatedStyle(() => {
        return {
            opacity: buttonValue.value === 2 * height ? 
            withTiming(1) : withTiming(0),
            transform: [
                {
                    translateX: buttonValue.value === 2* height ?
                    withTiming(0) : withTiming(-100)
                }
            ]
        }
    })

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View style = { [styles.container, animatedColor, buttonAnimationValue ] }>
        <Animated.Text style = { [styles.textButton, textAnimationStyle] }>Get Started!</Animated.Text>
        <Animated.Image style = {arrowAnimationStyle} source={ require('../../assets/images/ArrowIcon.png') }/>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,  // sabse upar dikhega unn elements se jinka zIndex kam hoga [High > Low]
        bottom: 100,
        width: 120, 
        height: 120,
        backgroundColor:'#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    }, 
    textButton: {
        color: 'white',
        fontSize: 20,
        position: 'absolute'
    }
})