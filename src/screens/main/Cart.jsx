import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import React from 'react';
import useStore from '../../zustand/store';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  // Get the cart items from Zustand store
  const { cart, updateQuantity, removeFromCart, resetStore } = useStore((state) => ({
    cart: state.cart,
    updateQuantity: state.updateQuantity,
    removeFromCart: state.removeFromCart,
    resetStore: state.resetStore
  }));

  // Handle quantity change
  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  // navigation
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style = {{ marginTop: 30, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style = {{ fontSize: 18, fontWeight: '600' }}>Cart</Text>
        <TouchableOpacity onPress={resetStore}>
          <MaterialIcons name="delete-outline" size={30} color="black" />
          </TouchableOpacity>
      </View>
      {cart.length > 0 ? (
        <View style={styles.cartContainer}>
          <Text style = {{ fontSize: 20, fontWeight: '800', marginBottom: 10 }}>Items ({cart.length})</Text>
          {cart.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>${item.id * 19 * 2 * item.quantity}</Text>
                <Text style={styles.itemIngredients}>with {item.ingredients}</Text>
                <View style={styles.quantityContainer}>
                  <Button
                    color={'black'}
                    title="-"
                    onPress={() => handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))}
                  />
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <Button
                    title="+"
                    color={'black'}
                    onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
                  />
                </View>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeFromCart(item.id)}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          {/* <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity> */}
        </View>
      ) : (
        <View style = {{ marginTop: 200 }}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png' }}
            style={styles.cartImage}
          />
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <Text style={styles.subText}>Looks like you haven't added anything to your cart yet.</Text>
          <TouchableOpacity style={styles.shopButton} onPress={() => navigation.navigate('Home')
          }>
            <Text style={styles.shopButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  cartImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
    alignSelf: 'center',
  },
  emptyCartText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
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
    alignSelf: 'center',
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  cartContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 30
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemImage: {
    width: 130,
    height: 150,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemIngredients: {
    fontSize: 14,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 14,
    color: '#967259',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: '#967259',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});