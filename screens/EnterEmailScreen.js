// EnterEmailScreen.js
import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Text as RNText, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { COMPANY_NAME, VERSION, FONT_FAMILY } from '../config';
import Footer from '../components/Footer';

const windowWidth = Dimensions.get('window').width;

const Text = (props) => <RNText {...props} style={[props.style, { fontFamily: FONT_FAMILY }]} />; // Use FONT_FAMILY

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: 'black',
    // Align the text to the left
    marginBottom: 30,
    fontFamily: FONT_FAMILY,
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
    borderRadius: 10,
    fontFamily: FONT_FAMILY,
  },
  button: {
    width: windowWidth - 120, // Adjusted button width
    marginTop: 20,
    backgroundColor: '#6495ED',
    borderRadius: 10,
    fontFamily: FONT_FAMILY,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  footerText: {
    color: 'grey',
    fontFamily: FONT_FAMILY,
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

      <Text style={{ marginBottom: 20, color: 'black', fontFamily: FONT_FAMILY }}>
        Enter your email address to receive a verification code
      </Text>
      <Text style={{ color: 'black', fontFamily: FONT_FAMILY }}>Email Address</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Submit" buttonStyle={styles.button} onPress={handleNext} />

      <Footer />
    </View>
  );
};

export default EnterEmailScreen;
