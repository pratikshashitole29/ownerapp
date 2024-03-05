// VerifyOTPScreen.js
import React, { useState } from 'react';
import { View,Image, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { icons } from '../constants';
const windowWidth = Dimensions.get('window').width;
import { Header } from 'react-native-elements';
import Footer from '../components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  otpDigit: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 5,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor:'white'
  },
  button: {
    width: windowWidth - 120, // Adjusted button width
    marginTop: 20,
    backgroundColor: '#6495ED',
    borderRadius: 10,
    fontFamily:'Roboto-Regular'
  },
  resendContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    marginRight: 5,
    fontFamily:'Roboto-Regular'
  },
  resendLink: {
    color: '#4B0082',
    textDecorationLine: 'underline',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
  
  },
  footerText: {
    color: 'grey',
    fontFamily: 'Roboto-Regular',
  },
  text:{
    fontFamily:'Roboto-Regular',
  }
});

const VerifyOTPScreen = ({ route, navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleVerify = () => {
    const enteredOtp = otp.join('');

    // Add OTP validation if needed
    if (enteredOtp === '1234') {
      // For simplicity, consider any 6-digit OTP as valid
      // Navigate to Restaurants screen
      navigation.navigate('AppNavigation');
    } else {
      // Show an error message or alert for invalid OTP
      // For simplicity, alert is used here
      alert('Invalid OTP. Please try again.');
      // Clear OTP input
      setOtp(['', '', '', '']);
    }
  };

  const handleDigitChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (index < 3 && value !== '') {
      // Move to the next input
      document.getElementById(`otpInput_${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  const handleResend = () => {
    // Handle resend logic here
    //alert('Resend functionality to be implemented.');
    Toast.show({
      type: 'success',
      text1: 'OTP Resent',
      visibilityTime: 5000, // 2 seconds visibility
    });
  };

  return (
    <>

<Header
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.arrow_left}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                marginLeft: 10,
              }}
            />
              
          </TouchableOpacity>
        }
        centerComponent={{ text: 'Verify', style: { color: 'black', fontSize: 20 } }}
        containerStyle={{
          backgroundColor: 'white',
          justifyContent: 'space-between',
          borderBottomColor: 'black', // Set the border color to black
          borderBottomWidth: 1, 
        }}
      />

    <View style={styles.container}>
   
      {/* <Text style={{ fontSize: 24, marginBottom: 40,color:'white' }}>OTP Verification</Text> */}
      <Text style={{color:'black',fontFamily:'Roboto-Regular'}}>Enter the OTP sent to {route.params.email}</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpDigit}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleDigitChange(index, value)}
            id={`otpInput_${index}`}
          />
        ))}
      </View>
      <View style={{...styles.resendContainer,marginBottom:40}}>
        <Text style={styles.resendText}>Didn't receive the code?</Text>
        <TouchableOpacity onPress={handleResend}>
          <Text style={{...styles.resendLink,color:'blue',fontFamily:'Roboto-Regular'}}>Resend</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Submit"
        buttonStyle={styles.button}
        onPress={handleVerify}
      />

      {/* Footer */}
     
      <Footer/>
      
    </View>
    </>
  );
};

export default VerifyOTPScreen;
