import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

 

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

interface Item {
  id: number;
  price: number;
  imageUrl: string;
  description: string;
  name: string;
}

const Detail: React.FC<Props> = (props) => {
  const { product } = props.route.params as { product: Item };
  const [quantity, setQuantity] = useState<number>(1);
  

  const totalPrice = product.price * quantity;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = async () => {
    
    const orderData = {
      userId: await AsyncStorage.getItem('userId'),
      driverId: "1",
      paymentStatus:"pending",
      returnDate: "2024-06-12",
      orderItems: [
        {
          productName: product.name,
          productId: product.id,
          quantity: quantity.toString(),
        }
      ]
    };

    try {
      
      const response = await axios.post('http://192.168.95.78:8080/api/v1/order/create', orderData);
      if (response.status === 200) {
        Alert.alert('Success', 'Added to Cart Successfully');
        props.navigation.navigate('K', { userId: 'your_user_id_here' });
        
        
      } else {
        throw new Error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Failed to create order:', error);
      Alert.alert('Error', 'Failed to add to cart');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="green" />
      </TouchableOpacity>
      <Text style={styles.title}>Details</Text>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.productName}>{product.name}</Text>
      <View style={styles.quantitySection}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
          <Icon name="minus" size={15} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity} KG</Text>
        <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
          <Icon name="plus" size={15} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>$ {totalPrice.toFixed(2)}</Text>
      <View style={styles.details}>
        <Icon name="star" size={20} color="#ffc107" solid />
        <Text style={styles.rating}>4.2</Text>
        <Icon name="clock" size={20} color="#ffc107" solid />
        <Text style={styles.time}>20 Min</Text>
      </View>
      <Text style={styles.descriptionTitle}>About</Text>
      <Text style={styles.description}>{product.description}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200, 
    height: 200,
    borderRadius: 100, 
    alignSelf: 'center',
    marginBottom: 30, 
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 50,
  },
  quantityText: {
    fontSize: 24,
    marginHorizontal: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  rating: {
    marginHorizontal: 5,
  },
  time: {
    marginHorizontal: 5,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  addToCartButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Detail;



// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
// import { NavigationProp } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// interface Props {
//   navigation: NavigationProp<any>;
//   route: any;
// }

// const Detail: React.FC<Props> = (props) => {
//   const { product } = props.route.params;
//   const PRICE_PER_KG = product.price;
  
//   const [quantity, setQuantity] = useState<number>(1);
//   const totalPrice = PRICE_PER_KG * quantity;

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.goBack()}>
//         <Icon name="arrow-left" size={20} color="green" />
//       </TouchableOpacity>
//       <Text style={styles.title}>Details</Text>
//       <Image source={{ uri: product.imageUrl }} style={styles.image} />
//       <Text style={styles.productName}>{product.name}</Text>
//       <View style={styles.quantitySection}>
//         <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
//           <Icon name="minus" size={15} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.quantityText}>{quantity} KG</Text>
//         <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
//           <Icon name="plus" size={15} color="#fff" />
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.price}>$ {totalPrice.toFixed(2)}</Text>
//       <View style={styles.details}>
//         <Icon name="star" size={20} color="#ffc107" solid />
//         <Text style={styles.rating}>4.2</Text>
//         <Icon name="clock" size={20} color="#ffc107" solid />
//         <Text style={styles.time}>20 Min</Text>
//       </View>
//       <Text style={styles.descriptionTitle}>About</Text>
//       <Text style={styles.description}>{product.description}</Text>
//       <TouchableOpacity style={styles.addToCartButton} onPress={() => Alert.alert('Added to Cart')}>
//         <Text style={styles.addToCartText}>Add to cart</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   backButton: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'green',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   image: {
//     width: 200, // Adjust the size as needed
//     height: 200,
//     borderRadius: 100, // This will make it round
//     alignSelf: 'center',
//     marginBottom: 30, // More space below the image
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   quantitySection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   quantityButton: {
//     backgroundColor: 'green',
//     padding: 10,
//     borderRadius: 50,
//   },
//   quantityText: {
//     fontSize: 24,
//     marginHorizontal: 20,
//   },
//   price: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'green',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   details: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   rating: {
//     marginHorizontal: 5,
//   },
//   time: {
//     marginHorizontal: 5,
//   },
//   descriptionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30, // More space after the description
//   },
//   addToCartButton: {
//     backgroundColor: 'green',
//     padding: 15,
//     borderRadius: 50,
//     alignItems: 'center',
//     marginBottom: 20, // Space at the bottom
//   },
//   addToCartText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Detail;
