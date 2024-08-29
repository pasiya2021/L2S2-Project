import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: any; // Replace with the correct type from your navigation library if available
}

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  warehouse: string;
  address: string;
}

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    warehouse: '',
    address: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    warehouse: Yup.string().required('Warehouse is required'),
    address: Yup.string().required('Address is required'),
  });

  const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    try {
      const response = await axios.post('http://192.168.95.78:8080/api/user/signup', values);
      console.log(response.data);
      await AsyncStorage.clear()
      await AsyncStorage.setItem('userId',response.data.userId.toString())
      navigation.navigate('H');
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
              </View>
              {errors.name && touched.name && <Text style={styles.errorText}>{errors.name}</Text>}

              <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}

              <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                  <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="#666" style={styles.icon} />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}

              <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={!confirmPasswordVisible}
                />
                <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                  <Icon name={confirmPasswordVisible ? 'eye' : 'eye-slash'} size={20} color="#666" style={styles.icon} />
                </TouchableOpacity>
              </View>
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}

              <View style={styles.inputContainer}>
                <Icon name="home" size={20} color="#666" style={styles.icon} />
                <Picker
                  selectedValue={values.warehouse}
                  onValueChange={(itemValue) => setFieldValue('warehouse', itemValue)}
                  style={styles.input}
                >
                  <Picker.Item label="Select Warehouse" value="" />
                  <Picker.Item label="Matara" value="warehouse1" />
                  <Picker.Item label="Colombo" value="warehouse2" />
                  <Picker.Item label="Kandy" value="warehouse3" />
                  <Picker.Item label="Galle" value="warehouse4" />
                  <Picker.Item label="Jaffna" value="warehouse5" />
                  <Picker.Item label="Kurunagala" value="warehouse6" />
                  <Picker.Item label="Anuradhapura" value="warehouse7" />
                  <Picker.Item label="Badulla" value="warehouse8" />
                  <Picker.Item label="Rathnapura" value="warehouse9" />
                </Picker>
              </View>
              {errors.warehouse && touched.warehouse && <Text style={styles.errorText}>{errors.warehouse}</Text>}

              <View style={styles.inputContainer}>
                <Icon name="address-card" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#666"
                  placeholder="Address"
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                />
              </View>
              {errors.address && touched.address && <Text style={styles.errorText}>{errors.address}</Text>}

              <Text style={styles.guidanceText}>Please select the warehouse closest to your location.</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleSubmit as any} style={styles.button}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 25,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    padding: 5,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 25,
    overflow: 'hidden',
    height: 50,
  },
  button: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  guidanceText: {
    marginTop: 20,
    fontSize: 15,
    textAlign: 'center',
    color: 'green',
  },
});