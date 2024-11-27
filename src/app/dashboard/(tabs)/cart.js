import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const products = [
  { id: '1', name: 'GINGER', price: 300.00 },
  { id: '2', name: 'GABON/SAMBONG', price: 50.00 },
  { id: '3', name: 'OREGANO', price: 20.00 },
  { id: '4', name: 'ALOE VERA', price: 75.00 },
  { id: '5', name: 'CHILI', price: 10.00 },
];

const Cart = () => {
  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
  });

  const handleIncrease = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrease = (id) => {
    if (quantities[id] > 1) {
      setQuantities((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₱{item.price.toFixed(2)}</Text>
      <View style={styles.quantityControls}>
        <TouchableOpacity onPress={() => handleDecrease(item.id)} style={styles.controlButton}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantities[item.id]}</Text>
        <TouchableOpacity onPress={() => handleIncrease(item.id)} style={styles.controlButton}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  grid: {
    justifyContent: 'center',
  },
  productCard: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#4CAF50',
    marginVertical: 5,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    backgroundColor: '#ddd',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  quantity: {
    fontSize: 16,
  },
});

export default Cart;
