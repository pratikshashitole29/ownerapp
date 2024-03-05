// MyForm.js
import React, { useState } from 'react';
import { ScrollView, View, Text as RNText, TextInput, StyleSheet, Image, TouchableOpacity, Picker } from 'react-native';
import Footer from '../components/Footer';
import { FONT_FAMILY } from '../config';
import TitleBar from '../components/TitleBar';
import ExtraScreen from './ExtraScreen';
import BottomBar from '../components/BottomBar';

const Text = (props) => (
  <RNText {...props} style={[props.style, { fontFamily: `${FONT_FAMILY}, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif` }]} />
);

const MyForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');
  const [dob, setDob] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [photoError, setPhotoError] = useState(false);
  const [errors, setErrors] = useState({});
  const fileInputRef = React.createRef();

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile is required';
    }

    if (!address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (role === null || !role.trim()) {
      newErrors.role = 'Role is required';
    }

    if (!dob.trim()) {
      newErrors.dob = 'Date of Birth is required';
    }

    if (!aadharNo.trim()) {
      newErrors.aadharNo = 'Aadhar number is required';
    }

    if (!selectedImage) {
      setPhotoError(true);
      newErrors.photo = 'Photo is required';
    } else {
      setPhotoError(false);
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log('Form data saved!', {
        name,
        mobile,
        address,
        role,
        dob,
        aadharNo,
        selectedImage,
      });
    } else {
      console.log('Form data validation failed!');
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setPhotoError(false);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <TitleBar title="Create Staff" />
      <View style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Create Staff</Text>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            placeholder="Enter Name"
            onChangeText={(text) => setName(text)}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <Text style={styles.label}>Mobile:</Text>
          <TextInput
            style={styles.input}
            value={mobile}
            placeholder="Enter Mobile"
            onChangeText={(text) => setMobile(text)}
          />
          {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}

          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            value={address}
            placeholder="Enter Address"
            onChangeText={(text) => setAddress(text)}
          />
          {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}

          <Text style={styles.label}>Role:</Text>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => setRole(itemValue)}
            style={[styles.input, { backgroundColor: 'white' }]}
          >
            <Picker.Item label="Select Role" value="" />
            <Picker.Item label="Manager" value="Manager" />
            <Picker.Item label="Waiter" value="Waiter" />
            <Picker.Item label="Chef" value="Chef" />
          </Picker>
          {errors.role && <Text style={styles.errorText}>{errors.role}</Text>}

          <Text style={styles.label}>Date of Birth:</Text>
          <TextInput
            style={styles.input}
            value={dob}
            placeholder="Enter Date of Birth"
            onChangeText={(text) => setDob(text)}
          />
          {errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>}

          <Text style={styles.label}>Aadhar Number:</Text>
          <TextInput
            style={styles.input}
            value={aadharNo}
            placeholder="Enter Aadhar Number"
            onChangeText={(text) => setAadharNo(text)}
          />
          {errors.aadharNo && <Text style={styles.errorText}>{errors.aadharNo}</Text>}

          <Text style={styles.label}>Photo:</Text>
          <View style={styles.photoContainer}>
            <TouchableOpacity style={styles.browseButton} onPress={handleBrowseClick}>
              <Text style={styles.browseButtonText}>Browse...</Text>
            </TouchableOpacity>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={styles.fileInput}
              ref={fileInputRef}
            />
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
            ) : (
              <Text style={styles.imagePickerText}>No photo selected</Text>
            )}
          </View>
          {photoError && <Text style={styles.errorText}>{errors.photo}</Text>}

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
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
    backgroundColor: 'white', // Set the background color to white
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 70,
  },
  formContainer: {
    backgroundColor: '#fff',
    width: '95%',
    marginHorizontal: 'auto',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
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
    fontSize: 20,
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
    marginBottom: 5,
    borderRadius: 5,
    fontFamily: FONT_FAMILY,
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontFamily: FONT_FAMILY,
  },
  photoContainer: {
    marginBottom: 20,
  },
  browseButton: {
    backgroundColor: '#9e9e9e',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  browseButtonText: {
    color: 'white',
    fontFamily: FONT_FAMILY,
    fontSize: 14,
  },
  fileInput: {
    display: 'none',
  },
  selectedImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  imagePickerText: {
    fontSize: 16,
    color: 'black',
    fontFamily: FONT_FAMILY,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 'auto',
    width: '30%',
  },
  saveButtonText: {
    color: 'white',
    fontFamily: FONT_FAMILY,
    fontSize: 16,
  },
});

export default MyForm;
