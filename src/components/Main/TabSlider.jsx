import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const TabSlider = () => {

    
  const [selectedTab, setSelectedTab] = useState('All Coffee');
  // const [data, setData] = useState(DATA_ALL_COFFEE);

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    switch (tab) {
      case 'All Coffee':
        // setData(DATA_ALL_COFFEE);
        break;
      case 'Espresso':
        // setData(DATA_MACHIATO);
        break;
      case 'Latte':
        // setData(DATA_LATTE);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.sliderContainer}>
    <TouchableOpacity
      style={[styles.sliderButton, selectedTab === 'All Coffee' && styles.selectedSliderButton]}
      onPress={() => handleTabPress('All Coffee')}
    >
      <Text style={[styles.sliderText, selectedTab === 'All Coffee' && styles.selectedSliderText]}>All Coffee</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.sliderButton, selectedTab === 'Espresso' && styles.selectedSliderButton]}
      onPress={() => handleTabPress('Espresso')}
    >
      <Text style={[styles.sliderText, selectedTab === 'Espresso' && styles.selectedSliderText]}>Espresso</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.sliderButton, selectedTab === 'Machiato' && styles.selectedSliderButton]}
      onPress={() => handleTabPress('Machiato')}
    >
      <Text style={[styles.sliderText, selectedTab === 'Machiato' && styles.selectedSliderText]}>Machiato</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.sliderButton, selectedTab === 'Latte' && styles.selectedSliderButton]}
      onPress={() => handleTabPress('Latte')}
    >
      <Text style={[styles.sliderText, selectedTab === 'Latte' && styles.selectedSliderText]}>Latte</Text>
    </TouchableOpacity>
  </View>
  )
}

export default TabSlider

const styles = StyleSheet.create({
    sliderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
      },
      sliderButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
      },
      selectedSliderButton: {
        backgroundColor: '#967259',
      },
      sliderText: {
        fontSize: 16,
        color: '#888',
      },
      selectedSliderText: {
        color: '#fff',
        fontWeight: 'bold',
      },
})