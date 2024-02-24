// EnterEmailScreen.js
import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#8A2BE2',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: 'white',
    // Align the text to the left
    marginBottom:30
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
  button: {
    width: windowWidth - 40, // Adjusted button width
    marginTop: 20,
    backgroundColor: '#4B0082',
  },
});

const EnterEmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleNext = () => {
    // Add email validation if needed
    if (email.trim()) {
      // Navigate to Verify OTP screen
      navigation.navigate('VerifyOTP', { email });
    } else {
      // Show an error message or alert for invalid email
      // For simplicity, alert is used here
      alert('Please enter a valid email address');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Image
        source={require('./email.png')}
        style={{ width: 200, height: 200 }}
      />
      
      <Text style={{marginBottom:20,color: 'white'}}>Enter your email address to recieve a verification code</Text>
      <Text style={{  color: 'white' }}>Email Address</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Your Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button
        title="Get OTP"
        buttonStyle={styles.button}
        onPress={handleNext}
      />
    </View>
  );
};

export default EnterEmailScreen;
