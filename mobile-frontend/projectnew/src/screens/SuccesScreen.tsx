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
        navigation.navigate('E'); // Navigate to Popup screen after a delay
      }, 3000); // Adjust the delay as needed

      return () => clearTimeout(timer); // Cleanup the timer
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-vector/flat-back-school-party-illustration_23-2149582027.jpg?t=st=1719896307~exp=1719899907~hmac=1a223b7a06ee20e0be2b24b0e0067dd60ef593bbe1b679025e803b2b1bfc4080&w=1060' }} // Replace with your image URL
          style={styles.image}
        />
        <Text style={styles.title}></Text>
        <Text style={styles.description}>
         Payment Succesfull
        </Text>
      </View>
      
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
    width: 400,
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
    fontSize: 30,
    textAlign: 'center',
    color: 'green',
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
    fontWeight:"500"
  },
});

export default HomeScreen;