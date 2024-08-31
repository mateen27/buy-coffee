import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Main/Header'

const Home = () => {
  return (
    <SafeAreaView style ={styles.container}>
      {/* Header Component of the Application */}
      <Header />
      <View style = { styles.text }>
        <Text>Find the best Coffee to your taste</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 23,
  },
  text: {
    color: '#444444',
  }
})