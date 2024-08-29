import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';
import { StripeProvider, CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import axios from 'axios';
import { useRoute, NavigationProp, useNavigation } from '@react-navigation/native';

const API_URL = 'http://192.168.17.125:8080/payment';

interface RouteParams {
  totalPrice?: number;
  orderItemId?: string;
}

interface Props {
  navigation: any;
}

type RootParamList = {
  M: undefined;
  // Add other routes here if needed
};

const Paymentdetails: React.FC<Props> = (props) => {
  const [cardHolderEmail, setCardHolderEmail] = useState<string>('');
  const { confirmPayment } = useConfirmPayment();
  const [cardDetails, setCardDetails] = useState<any>(null);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  const route = useRoute();
  const { totalPrice: routeTotalPrice, orderItemId } = route.params as RouteParams;

  useEffect(() => {
    if (routeTotalPrice) {
      setTotalPrice(routeTotalPrice);
    }
  }, [routeTotalPrice]);

  const fetchPaymentIntentClientSecret = async (): Promise<string | null> => {
    try {
      const response = await axios.post(`${API_URL}/create`, {
        email: cardHolderEmail,
        amount: routeTotalPrice ? routeTotalPrice * 100 : 0,
        currency: 'usd',
        paymentMethodType: 'card',
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching client secret:', error);
      return null;
    }
  };

  const savePaymentDetails = async (paymentIntent: any) => {
    try {
      const response = await axios.post(`${API_URL}/save`, {
        email: cardHolderEmail,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        paymentIntentId: paymentIntent.id,
        status: paymentIntent.status,
        orderId: orderItemId,
      });
      return response.data;
    } catch (error) {
      console.error('Error saving payment details:', error);
      return null;
    }
  };

  const handlePayPress = async () => {
    try {
      if (!cardDetails || !cardDetails.complete) {
        Alert.alert('Incomplete Card Details', 'Please enter complete card information.');
        return;
      }

      const clientSecret = await fetchPaymentIntentClientSecret();
      if (!clientSecret) {
        Alert.alert('Payment Error', 'Failed to retrieve client secret.');
        return;
      }

      const billingDetails = {
        email: cardHolderEmail,
      };

      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        paymentMethodData: {
          billingDetails,
        },
      });

      if (error) {
        console.error('Error confirming payment:', error);
        Alert.alert('Payment Error', 'Failed to confirm payment. Please try again.');
      } else {
        await savePaymentDetails(paymentIntent);
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Error handling payment:', error);
      Alert.alert('Payment Error', 'An unexpected error occurred. Please try again later.');
    }
  };

  const handleModalOk = () => {
    setShowSuccessModal(false);
    navigation.navigate('M');  
  };

  return (
    <StripeProvider publishableKey="pk_test_51Oy4eAJ10XzAyuHYPJvMea9RL8LQeo5A0rpjdILEdXdqkBPpTWTcEkGxDXyX7ix7nVyCtFegGdpz7bIMb9jIkXiJ00KwAxzicl">
      <View style={styles.container}>
        <Text style={styles.header}>Payment Details</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Card Holder Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCardHolderEmail}
            value={cardHolderEmail}
            placeholder="Enter email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.cardFieldContainer}>
          <Text style={styles.cardFieldLabel}>Card Details</Text>
          <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={{
              width: '100%',
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={(cardDetails) => setCardDetails(cardDetails.complete ? cardDetails : null)}
          />
        </View>
        <TouchableOpacity onPress={handlePayPress} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showSuccessModal}
          onRequestClose={() => setShowSuccessModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Payment Successful!</Text>
              <TouchableOpacity onPress={handleModalOk} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#26a113',
    marginBottom: 30,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 18,
    color: '#26a113',
    marginBottom: 10,
  },
  input: {
    width: 350,
    backgroundColor: '#F6F6F6',
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  cardFieldLabel: {
    fontSize: 18,
    color: '#26a113',
    marginTop: 40,
    marginBottom: 10,
  },
  cardFieldContainer: {
    width: 350,
  },
  confirmButton: {
    backgroundColor: '#26a113',
    height: 50,
    width: 300,
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 30,
  },
  confirmButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#26a113',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Paymentdetails;
