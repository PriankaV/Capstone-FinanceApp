import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const validatePassword = (password) => {
    return password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);
  };

 
const handleSignUp = async () => {
  console.log("Signup button clicked!");  // Log button click
  
  if (!validatePassword(password)) {
    Alert.alert('Error', 'Password must be at least 8 characters long and contain a special character.');
    return;
  }
   if (password !== confirmPassword) {
    Alert.alert('Error', 'Passwords do not match.');
    return;
  }

  try {
    console.log("Sending request to Flask API..."); // Log API request  
    const response = await fetch('http://127.0.0.1:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    const result = await response.json();
    console.log("API Response:", result); // Log the API response
  
    if (response.ok) {
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Login');
    } else {
      Alert.alert('Error', result.error || 'An error occurred. Please try again.');
    }
  } catch (error) {
    console.error('Signup Error:', error);
    Alert.alert('Error', 'Failed to connect to the server. Please try again later.');
  }
};
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>Or</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Login Here</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
