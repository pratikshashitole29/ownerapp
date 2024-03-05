// ProfileScreen.js
import React from 'react';
import { View,Text as RNText, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Footer from '../components/Footer';
import { FONT_FAMILY } from '../config';
const Text = (props) => <RNText {...props} style={[props.style, { fontFamily: FONT_FAMILY }]} />; // Use FONT_FAMILY
import TitleBar from '../components/TitleBar';

const ProfileScreen = () => {
  return (
    <>
    <TitleBar title="Profile" />
    <View style={styles.container}>
        
      {/* Profile Photo */}
      <View style={styles.profilePhotoContainer}>
        <Image
          source={{ uri: 'https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2Fc360b335-cf27-44d9-9251-59f61bf36428.jpeg' }}
          style={styles.profilePhoto}
        />
      </View>

      {/* Name */}
      <Text style={styles.nameText}>John Doe</Text>

      {/* Location */}
      <View style={styles.locationContainer}>
        <MaterialIcons name="location-on" size={24} color="black" />
        <Text style={styles.locationText}>New York, USA</Text>
        
      </View>

      {/* Options Card */}
      <View style={styles.optionsCard}>
        {/* Notifications Option */}
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.optionIconContainer}>
            <MaterialIcons name="notifications" size={24} color="black" />
          </View>
          <Text style={styles.optionLabel}>Notifications</Text>
          <View style={styles.forwardIconContainer}>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
        </TouchableOpacity>

        {/* Login Option */}
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.optionIconContainer}>
            <MaterialIcons name="lock" size={24} color="black" />
          </View>
          <Text style={styles.optionLabel}>Login</Text>
          <View style={styles.forwardIconContainer}>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
        </TouchableOpacity>

        {/* Settings Option */}
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.optionIconContainer}>
            <MaterialIcons name="settings" size={24} color="black" />
          </View>
          <Text style={styles.optionLabel}>Settings</Text>
          <View style={styles.forwardIconContainer}>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      
        <Text style={styles.logoutButtonText}>Logout</Text>
      
    </View>
    <Footer/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhotoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 20,
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: FONT_FAMILY,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 16,
    fontFamily: FONT_FAMILY,
  },
  optionsCard: {
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    marginTop: 20,
    elevation: 5, // Box shadow for Android
    shadowColor: 'black', // Box shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  optionIconContainer: {
    marginRight: 15,
  },
  optionLabel: {
    fontSize: 16,
    flex: 1,
  },
  forwardIconContainer: {
    marginLeft: 15,
  },
  logoutButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 40,
  },
  logoutButtonText: {
    color: 'black',
    marginTop:40,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: FONT_FAMILY,
  },
  logoutIconContainer: {
    position: 'absolute',
    top: 35,
    right: 15,
    zIndex: 1, // Ensure it's above other elements
  },
});

export default ProfileScreen;
