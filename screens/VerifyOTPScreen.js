// VerifyOTPScreen.js
import React, { useState } from 'react';
import { View,Image, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { icons,SIZES } from '../constants';
const windowWidth = Dimensions.get('window').width;
import { Header } from 'react-native-elements';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#8A2BE2',
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
    width: windowWidth - 40, // Adjusted button width
    marginTop: 20,
    backgroundColor: '#4B0082',
  },
  resendContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    marginRight: 5,
  },
  resendLink: {
    color: '#4B0082',
    textDecorationLine: 'underline',
  },
});

const VerifyOTPScreen = ({ route, navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleVerify = () => {
    const enteredOtp = otp.join('');

    // Add OTP validation if needed
    if (enteredOtp === '123456') {
      // For simplicity, consider any 6-digit OTP as valid
      // Navigate to Restaurants screen
      navigation.navigate('Home');
    } else {
      // Show an error message or alert for invalid OTP
      // For simplicity, alert is used here
      alert('Invalid OTP. Please try again.');
      // Clear OTP input
      setOtp(['', '', '', '', '', '']);
    }
  };

  const handleDigitChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (index < 5 && value !== '') {
      // Move to the next input
      document.getElementById(`otpInput_${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  const handleResend = () => {
    // Handle resend logic here
    alert('Resend functionality to be implemented.');
  };

  return (
    <>

<Header
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                marginLeft: SIZES.padding,
              }}
            />
          </TouchableOpacity>
        }
        centerComponent={{ text: '', style: { color: '#fff', fontSize: 20 } }}
        containerStyle={{
          backgroundColor: '#8A2BE2',
          justifyContent: 'space-around',
        }}
      />

    <View style={styles.container}>
    {/* <TouchableOpacity
                    style={{
                        paddingLeft: SIZES.padding*2,
                        width: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf:'start',
                        marginBottom:20,
                        marginRight:20
        
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source ={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            justifyContent: "center"
                        }}
                    />
                </TouchableOpacity> */}
      <Text style={{ fontSize: 24, marginBottom: 40,color:'white' }}>OTP Verification</Text>
      <Text style={{color:'white'}}>Enter the OTP sent to {route.params.email}</Text>
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
          <Text style={{...styles.resendLink,color:'white'}}>Resend</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Verify"
        buttonStyle={styles.button}
        onPress={handleVerify}
      />
      
    </View>
    </>
  );
};

export default VerifyOTPScreen;
