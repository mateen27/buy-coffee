import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

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
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        marginHorizontal: 20
    },
    image: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        resizeMode: 'contain'
    }
})