import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const DriverDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Driver</Text>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.driverContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // replace with your image URL
          style={styles.driverImage}
        />
        <Text style={styles.driverName}>Driver 01</Text>
        <Text style={styles.driverId}>QG-6626</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>⭐</Text>
            <Text style={styles.detailText}>4.2</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>⏰</Text>
            <Text style={styles.detailText}>20 Min</Text>
          </View>
        </View>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet consectetur. At quis viverra tellus fe dui.
          Vitae urna auctor sit ac id duis integer lobortis hac. Conval id dis
          morbi sit molestie vestibulum eget.
        </Text>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6F5D6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#26a113',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  driverContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  driverImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  driverName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  driverId: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    fontSize: 18,
    marginRight: 5,
  },
  detailText: {
    fontSize: 16,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  confirmButton: {
    backgroundColor: '#26a113',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  confirmButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default DriverDetails;
