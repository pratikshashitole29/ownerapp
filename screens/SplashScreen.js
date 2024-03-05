// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Footer from '../components/Footer';
import { FONT_FAMILY } from '../config'; // Import the FONT_FAMILY variable
//import CustomHeader from '../components/CustomHeader';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('EnterEmail'); // Replace with the name of your main screen
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ fontFamily: FONT_FAMILY }}>Splash Screen</Text>
        <Footer />
      </View>
    </>
  );
};

export default SplashScreen;
