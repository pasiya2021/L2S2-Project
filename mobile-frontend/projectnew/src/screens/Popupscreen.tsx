import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<any>;
}

const Popupscreen: React.FC<Props> = (props) => {
    const gotolg = () => {
        props.navigation.navigate('B');
    }

    const styles = StyleSheet.create({
        container: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 20,
        },
        imageContainer: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        mainImage: {
            width: 350,
            height: 400,
            resizeMode: 'contain',
        },
        textContainer: {
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
            color: 'green',
            textAlign: 'center',
        },
        description: {
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 20,
            color: 'gray',
        },
        buttonContainer: {
            backgroundColor: 'green',
            paddingVertical: 15,
            paddingHorizontal: 130,
            borderRadius: 25,
            
           
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.mainImage}
                    source={{ uri: 'https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1719906625~exp=1719907225~hmac=b8e0c1b120c690cfc95e38154cd0ad5d527d48ba9414643f17aad1bdd1b1d86f' }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Get Your Order</Text>
                <Text style={styles.description}>
                    Get your order at your doorstep. We are offering free shipping
                    anywhere in the world! Anything! Anytime! Anywhere!
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={gotolg}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Popupscreen;