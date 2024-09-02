import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const RenderItems = ({ item }) => {

    const { width, height } = useWindowDimensions();

    return (
        <View style={[styles.itemContainer, {
            width: width,
            height: height,
            backgroundColor: item.backgroundColor
        }]
        }>
            <Image source={ item.image } style = { styles.image }/>
            <Text style={[styles.text, { color: item.textColor }]}>{item.text}</Text>
        </View>
    )
}

export default RenderItems

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 40,
    },
    text: {
        fontSize: responsiveScreenFontSize(2.5),
        fontWeight: 'bold',
        marginTop: responsiveScreenWidth(10),
        textAlign: 'center',
        marginHorizontal: responsiveScreenWidth(10)
    },
    image: {
        marginTop: responsiveScreenWidth(10),
        width: responsiveScreenWidth(80),
        height: responsiveScreenHeight(40),
        resizeMode: 'contain',
        marginLeft: responsiveScreenWidth(15),
        // marginRight: 'auto'
    }
})