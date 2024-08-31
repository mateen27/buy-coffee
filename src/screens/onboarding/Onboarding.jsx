import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import data from '../../data/OnBoarding/data'
import RenderItems from '../../components/Onboarding/RenderItems'
import CustomButton from '../../components/Onboarding/CustomButton'
import { useSharedValue, withTiming } from 'react-native-reanimated'

const Onboarding = ({ navigation }) => {

    // currentIndex state for Onboarding
    const [currentIndex, setCurrentIndex] = useState(0);

    const buttonValue = useSharedValue(0);  // used for the smooth transition.

    // height of the screen
    const { height } = useWindowDimensions();

    // function for setting up the Onboarding state and moving it forward and passing it to the Custom Cpmponent!
    function handlePress() {
        if ( currentIndex === data.length - 1 ) {
            // console.log('END');
            navigation.navigate('Home'); // Navigate to Home Screen if the Onboarding is finished.
            return;
        }
        setCurrentIndex( prev => prev + 1 );
        // Smooth Transition [ from initial position to the new position --> set duration is 300 ms byDefault ]
        buttonValue.value = withTiming( buttonValue.value + height )
    }

    

    return (
        <View style={styles.container}>
            <View>
                {
                    data.map((item, index) => {
                        return (
                            currentIndex === index && <RenderItems item={item} key={index} />
                        )
                    })
                }
            </View>
            {/* Custom Button for the Onboarding Screen */}
            <CustomButton handlePress={handlePress} buttonValue={buttonValue}/>
            <Text style = { styles.credit }>Created with ❤️ by Mohammed Mateen Khan</Text>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    credit: {
        position: 'absolute',
        bottom: 22, 
        color: '#000',
        fontWeight: '500',
        letterSpacing: 1.2
    }
})