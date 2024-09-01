import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const SearchBar = () => {
  return (
    <View style = { styles.placeholder }>
        <Feather name="search" size={20} color="gray" />
        <TextInput placeholder='Find your coffee...' placeholderTextColor={'gray'}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    placeholder: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 16,
        borderRadius: 20
    }
})