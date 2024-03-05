import React, { useState } from 'react';
import {ScrollView, View, Text, TextInput, Button, Picker, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useDropzone } from 'react-dropzone';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';
import TitleBar from '../components/TitleBar';

const SaveCategoryDetails = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');
  const [dob, setDob] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

   

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      // Implement save logic here
      console.log('Form data saved!');
    } else {
      console.log('Form data validation failed!');
    }
  };

  const onDrop = (acceptedFiles) => {
    // Assuming only one file is allowed
    setSelectedImage(URL.createObjectURL(acceptedFiles[0]));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <>
    <TitleBar title="Create Category"/>
    <ScrollView style={styles.container}>
      <Text style={styles.label}> Category Name:</Text>
      <TextInput style={styles.input} value={name}  placeholder="Enter Category Name" onChangeText={(text) => setName(text)} />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      
      
      {errors.photo && <Text style={styles.errorText}>{errors.photo}</Text>}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
      <Text style={styles.saveButtonText}>Save</Text>
   </TouchableOpacity>
   
    </ScrollView>
    

     <BottomBar/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'white'
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: 'Roboto',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  imagePicker: {
    height: 100,
    border: '1px dashed gray',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  imagePickerText: {
    fontSize: 16,
    color: 'blue',
    fontFamily: 'Roboto',
  },
  saveButton: {
    backgroundColor: '#4CAF50', // Green color, you can change it to your desired color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width:100,
    alignSelf:'end'
    
  },
  saveButtonText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  
});

export default SaveCategoryDetails;