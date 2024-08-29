import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect, NavigationProp } from '@react-navigation/native';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate('A'); // Navigate to Popup screen after a delay
      }, 3000); // Adjust the delay as needed

      return () => clearTimeout(timer); // Cleanup the timer
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={{ uri: 'https://switchitupdesigns.com/wp-content/uploads/2021/11/Mobile-development-bro-1536x1536.png' }} // Replace with your image URL
          style={styles.image}
        />
        <Text style={styles.title}>Choose Your Product</Text>
        <Text style={styles.description}>
          A product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form.
        </Text>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('A')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  contentContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 120,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginTop: 10,
  },
  nextButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;