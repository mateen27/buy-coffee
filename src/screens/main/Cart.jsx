import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png' }}
        style={styles.cartImage}
      />
      <Text style={styles.emptyCartText}>Your cart is empty</Text>
      <Text style={styles.subText}>Looks like you haven't added anything to your cart yet.</Text>
      
      <TouchableOpacity style={styles.shopButton}>
        <Text style={styles.shopButtonText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cartImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  emptyCartText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  shopButton: {
    backgroundColor: '#967259',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
