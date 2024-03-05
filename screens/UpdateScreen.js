import React, { useState } from 'react';
import {
  View,
  Image,
  Text as RNText,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
  ScrollView
} from 'react-native';
import Footer from '../components/Footer';
import { icons } from '../constants';
import { FONT_FAMILY } from '../config'; // Import the FONT_FAMILY variable

// Import Picker from 'react-native' on mobile and 'react-native-web' on web
import { Picker as RNPicker } from 'react-native';
import TitleBar from '../components/TitleBar';
import ExtraScreen from './ExtraScreen';
import BottomBar from '../components/BottomBar';
const Picker =
  Platform.OS === 'web' ? require('react-native-web').Picker : RNPicker;

const Text = (props) => (
  <RNText {...props} style={[props.style, { fontFamily: FONT_FAMILY }]} />
); // Use FONT_FAMILY

const UpdateScreen = ({ route, navigation }) => {
  const staffData = route && route.params ? route.params.staffData : {};

  const [name, setName] = useState(staffData.name || '');
  const [mobile, setMobile] = useState(staffData.mobile || '');
  const [address, setAddress] = useState(staffData.address || '');
  const [role, setRole] = useState(staffData.role || '');
  const [dob, setDob] = useState(staffData.dob || '');
  const [aadharNo, setAadharNo] = useState(staffData.aadharNo || '');

  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [roleError, setRoleError] = useState('');
  const [dobError, setDobError] = useState('');
  const [aadharNoError, setAadharNoError] = useState('');
  const [photoError, setPhotoError] = useState(false);

  const [selectedImage, setSelectedImage] = useState(
    staffData.selectedImage || null
  );

  const handleUpdate = () => {
    // Validate fields
    if (!name || !mobile || !address || !role || !dob || !aadharNo) {
      // Display error messages for empty fields
      setNameError(name ? '' : 'Name is required');
      setMobileError(mobile ? '' : 'Mobile is required');
      setAddressError(address ? '' : 'Address is required');
      setRoleError(role ? '' : 'Role is required');
      setDobError(dob ? '' : 'Date of Birth is required');
      setAadharNoError(aadharNo ? '' : 'Aadhar Number is required');

      // Check for no photo selected
      if (!selectedImage && !photoError) {
        setPhotoError(true);
      } else {
        setPhotoError(false);
      }

      return;
    }

    // Implement your update logic here
    console.log('Update pressed', {
      name,
      mobile,
      address,
      role,
      dob,
      aadharNo,
      selectedImage,
    });

    // Reset photo error state after a successful update
    setPhotoError(false);

    // You can navigate back to the previous screen if needed
    // navigation.goBack();
    navigation.navigate('AppNavigation');
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    console.log('Data to be deleted');
  };

  return (
    <>
      <TitleBar title="Update Staff" />
      <View style={styles.pageContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Update Staff</Text>

          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={[styles.input, nameError ? styles.inputError : null]}
            value={name}
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
              setNameError('');
            }}
          />
          {nameError ? (
            <Text style={styles.errorText}>{nameError}</Text>
          ) : null}

          <Text style={styles.label}>Mobile:</Text>
          <TextInput
            style={[styles.input, mobileError ? styles.inputError : null]}
            value={mobile}
            placeholder="Enter Mobile"
            onChange={(e) => {
              setMobile(e.target.value);
              setMobileError('');
            }}
          />
          {mobileError ? (
            <Text style={styles.errorText}>{mobileError}</Text>
          ) : null}

          <Text style={styles.label}>Role:</Text>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => {
              setRole(itemValue);
              setRoleError('');
            }}
            style={{ ...styles.input, backgroundColor: 'white' }}
          >
            <Picker.Item label="Select Role" value="" />
            <Picker.Item label="Manager" value="Manager" />
            <Picker.Item label="Waiter" value="Waiter" />
            <Picker.Item label="Chef" value="Chef" />
          </Picker>
          {roleError ? (
            <Text style={styles.errorText}>{roleError}</Text>
          ) : null}

          <Text style={styles.label}>Date of Birth:</Text>
          <TextInput
            style={[styles.input, dobError ? styles.inputError : null]}
            value={dob}
            placeholder="Enter Date of Birth"
            onChange={(e) => {
              setDob(e.target.value);
              setDobError('');
            }}
          />
          {dobError ? (
            <Text style={styles.errorText}>{dobError}</Text>
          ) : null}

          <Text style={styles.label}>Aadhar Number:</Text>
          <TextInput
            style={[styles.input, aadharNoError ? styles.inputError : null]}
            value={aadharNo}
            placeholder="Enter Aadhar Number"
            onChange={(e) => {
              setAadharNo(e.target.value);
              setAadharNoError('');
            }}
          />
          {aadharNoError ? (
            <Text style={styles.errorText}>{aadharNoError}</Text>
          ) : null}

          <Text style={styles.label}>Photo:</Text>
          <View>
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={styles.selectedImage}
              />
            ) : (
              <Text style={{ marginBottom: 10 }}>No photo selected</Text>
            )}
            <TouchableOpacity
              onPress={() => document.getElementById('browseInput').click()}
              style={styles.browseLabel}
            >
              <Text>Browse</Text>
            </TouchableOpacity>
            <input
              type="file"
              id="browseInput"
              accept="image/*"
              style={styles.browseInput}
              onChange={handlePhotoChange}
            />
            {photoError ? (
              <Text style={styles.errorText}>Photo is required</Text>
            ) : null}
          </View>

          {/* Buttons in the same row */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
              <Image
                source={icons.deleted}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: 'red',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={handleUpdate}
            >
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </View>
      
      <BottomBar />
      
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    //justifyContent: 'space-between',
    paddingBottom: 70, // Adjust this value to set the margin at the bottom
  },
  container: {
    flex: 1,
    padding: 20,
    width: '95%',
    marginHorizontal: 'auto',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: FONT_FAMILY,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: FONT_FAMILY,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontFamily: FONT_FAMILY,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontFamily: FONT_FAMILY,
  },
  selectedImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  browseLabel: {
    backgroundColor: '#9e9e9e',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  browseInput: {
    display: 'none',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  deleteButton: {
    backgroundColor: '#fff',
  },
  updateButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  buttonText: {
    color: 'white',
    fontFamily: FONT_FAMILY,
    fontSize: 16,
  },
});

export default UpdateScreen;
