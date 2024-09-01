import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CoffeeCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>★ {item.rating || '4.5'}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.ingredients.join(', ')}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>${item.price || '4.20'}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

export default CoffeeCard

const styles = StyleSheet.create({
    card: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
      },
      cardImage: {
        width: '100%',
        height: 130,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      },
      ratingContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
      },
      ratingText: {
        color: '#fff',
        fontSize: 12,
      },
      cardContent: {
        padding: 12,
      },
      cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      cardDescription: {
        fontSize: 12,
        color: '#888',
        marginBottom: 8,
      },
      cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      cardPrice: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      addButton: {
        backgroundColor: '#967259',
        borderRadius: 8,
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
      },
      addButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
})