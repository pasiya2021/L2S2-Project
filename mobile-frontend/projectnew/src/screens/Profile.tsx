import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [profilePhotoUrl, setProfilePhotoUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const name = await AsyncStorage.getItem('userName');
        const email = await AsyncStorage.getItem('userEmail');
        if (name) setUserName(name);
        if (email) setUserEmail(email);
      } catch (error) {
        console.error('Failed to fetch user data from AsyncStorage:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = async () => {
    const userId = await AsyncStorage.getItem('userId'); // Assuming you store userId in AsyncStorage

    const apiUrl = `http://192.168.95.78:8080/api/user/${userId}/update`;

    try {
      const response = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName,
          profilePhotoUrl: profilePhotoUrl,
          phone: phone,
          address: address,
          district: district,
        }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Profile updated successfully');
      } else {
        Alert.alert('Error', 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.email}>{userEmail}</Text>
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Profile</Text>
      </View>
      <View>
        <Text style={styles.label}>Profile Photo</Text>
        <Image 
          source={{ uri: profilePhotoUrl || 'https://via.placeholder.com/100' }}
          style={styles.profilePhoto}
        />
      </View>
      <View>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
      </View>
      <View>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
      </View>
      <View>
        <Text style={styles.label}>District</Text>
        <TextInput
          style={styles.input}
          placeholder="District"
          value={district}
          onChangeText={(text) => setDistrict(text)}
        />
      </View>
      <View>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='Save'
          color="green"
          onPress={handleUpdateProfile}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  headerText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'grey',
  },
  sectionHeader: {
    backgroundColor: 'green',
    padding: 10,
    marginVertical: 20,
  },
  sectionHeaderText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
    color: 'grey',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 50,
  }
});

export default Profile;
