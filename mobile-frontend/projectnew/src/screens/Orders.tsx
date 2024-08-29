import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import axios from 'axios';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure FontAwesome icons are installed
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: NavigationProp<any>;
}

interface OrderItem {
  orderItemId: string; // Assuming this field exists
  productName: string;
  quantity: number;
  price: number;
  totalPrice: number;
  imageUrl: string;
  paymentStatus: string; // Adding the paymentStatus field
}

const Orders: React.FC<Props> = ({ navigation }: Props) => {
  const [orderDetails, setOrderDetails] = useState<OrderItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const fetchOrderDetails = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId'); // Replace with dynamic user ID
      const response = await axios.get<OrderItem[]>(`http://192.168.95.78:8080/api/v1/order/user/${userId}/details`);
      const pendingItems = response.data.filter((item) => item.paymentStatus === 'pending');
      setOrderDetails(pendingItems);
      calculateTotal(pendingItems);
    } catch (error) {
      console.error("Failed to fetch order details:", error);
    }
  };

  const calculateTotal = (items: OrderItem[]) => {
    const total = items.reduce((acc, item) => acc + item.totalPrice, 0);
    setTotalPrice(total);
  };

  const deleteItem = async (orderItemId: string) => {
    try {
      await axios.delete(`http://192.168.95.78:8080/api/v1/order/delete/${orderItemId}`);
      Alert.alert('Item Deleted', 'The item has been successfully deleted.');
      // Refresh the list after deletion
      fetchOrderDetails();
    } catch (error) {
      Alert.alert('Error', 'Failed to delete the item.');
      console.error('Failed to delete order item:', error);
    }
  };

  const renderItem = ({ item }: { item: OrderItem }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <View style={styles.itemDetail}>
        <Text style={styles.itemName}>{item.productName}</Text>
        <Text style={styles.itemQuantity}>{item.quantity} x Rs {item.price.toFixed(2)}</Text>
        <Text style={styles.itemTotalPrice}>Total: Rs {item.totalPrice.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => deleteItem(item.orderItemId)}>
        <Icon name="times" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  const handleOrderNow = () => {
    const selectedItems = orderDetails.filter((item) => item.paymentStatus === 'pending');
    const totalPrice = selectedItems.reduce((acc, item) => acc + item.totalPrice, 0);
    const orderItemId = selectedItems.length > 0 ? selectedItems[0].orderItemId : undefined; // Assuming you want to pass the first orderItemId

    navigation.navigate('G', { totalPrice, orderItemId });
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []); // Run once on initial mount

  useFocusEffect(
    React.useCallback(() => {
      fetchOrderDetails();
    }, [])
  ); // Refresh on focus

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selected Items</Text>
      <FlatList
        data={orderDetails}
        renderItem={renderItem}
        keyExtractor={(item) => item.orderItemId}
      />
      <Text style={styles.totalPrice}>Total amount Rs {totalPrice.toFixed(2)}</Text>
      <TouchableOpacity style={styles.orderButton} onPress={handleOrderNow}>
        <Text style={styles.orderButtonText}>Order Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Orders;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'green',
    textAlign: 'center',
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Circular images
    marginRight: 10,
  },
  itemDetail: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    color: 'black',
  },
  itemQuantity: {
    fontSize: 16,
    color: 'black',
  },
  itemTotalPrice: {
    fontSize: 16,
    color: 'green',
  },
  removeButton: {
    padding: 10,
  },
  totalPrice: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  orderButton: {
    backgroundColor: 'green',
    marginHorizontal: 50,
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  orderButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  }
});
