import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  C: undefined;
  D: undefined;
};

type LgscreenNavigationProp = StackNavigationProp<RootStackParamList, 'C'>;
type LgscreenRouteProp = RouteProp<RootStackParamList, 'C'>;

type LgscreenProps = {
  navigation: LgscreenNavigationProp;
  route: LgscreenRouteProp;
};

const Lgscreen: React.FC<LgscreenProps> = ({ navigation }) => {

  const gotologin = () => {
    navigation.navigate('C');
  }

  const gotosignup = () => {
    navigation.navigate('D');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.jpg')} // replace with your logo path
      />
      <Text style={styles.welcomeText}>Hello Welcome!</Text>
      <Text style={styles.subText}>join with us and go to the next level</Text>

      <TouchableOpacity onPress={gotologin} style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>

      <Text style={styles.accountText}>Do You Have an Account?</Text>

      <TouchableOpacity onPress={gotosignup} style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      {/* <Image
        style={styles.basketImage}
        source={{ uri:'https://img.freepik.com/premium-photo/assorted-organic-vegetables-fruits-wicker-basket-isolated-white-background_763111-4308.jpg?w=740'}} // replace with your basket image path
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 30,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  orText: {
    fontSize: 18,
    color: '#4CAF50',
    marginVertical: 10,
  },
  accountText: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 10,
  },
  basketImage: {
    width: 250,
    height: 250,
    marginTop: 20,
    
    
    
  },
});

export default Lgscreen;