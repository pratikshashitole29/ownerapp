// UpdateScreen.js
import React, { useState } from 'react';
import { View, Image, Text , TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';
import { deleted } from '../constants/icons';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
// import Footer from '../components/Footer';
// import { icons } from '../constants';
// import { FONT_FAMILY } from '../config'; // Import the FONT_FAMILY variable

//const iconDelete = require('../../../assets/images/delete.png');
const UpdateCategoryDetails = ({ route, navigation }) => {
  const staffData = route && route.params ? route.params.staffData : {};

  const [category, setCategory] = useState(staffData.category || '');
//   const [mobile, setMobile] = useState(staffData.mobile || '');
//   const [address, setAddress] = useState(staffData.address || '');
//   const [role, setRole] = useState(staffData.role || '');
//   const [dob, setDob] = useState(staffData.dob || '');
//   const [aadharNo, setAadharNo] = useState(staffData.aadharNo || '');

  const [categoryError, setCategoryError] = useState('');
//   const [mobileError, setMobileError] = useState('');
//   const [addressError, setAddressError] = useState('');
//   const [roleError, setRoleError] = useState('');
//   const [dobError, setDobError] = useState('');
//   const [aadharNoError, setAadharNoError] = useState('');
//   const [photoError, setPhotoError] = useState(false);

//   const [selectedImage, setSelectedImage] = useState(staffData.selectedImage || null);

  const handleUpdate = () => {
 // Validate fields
 if (!category ) {
    // Display error messages for empty fields
    setCategoryError(category ? '' : 'Category is required');
  //   setMobileError(mobile ? '' : 'Mobile is required');
  //   setAddressError(address ? '' : 'Address is required');
  //   setRoleError(role ? '' : 'Role is required');
  //   setDobError(dob ? '' : 'Date of Birth is required');
  //   setAadharNoError(aadharNo ? '' : 'Aadhar Number is required');

    // Check for no photo selected
  //   if (!selectedImage && !photoError) {
  //     setPhotoError(true);
  //   } else {
  //     setPhotoError(false);
  //   }

    return;
  }

  // Implement your update logic here
  console.log('Update pressed', {
    category,

  });

  // Reset photo error state after a successful update
  setPhotoError(false);

  // You can navigate back to the previous screen if needed
  // navigation.goBack();
};

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

const handleDelete = () => {
  console.log('Data to be deleted');
};
return (
    <>
    <TitleBar title="Update Category"/>
      <View style={styles.pageContainer}>
        <View style={styles.container}>
          <Text>Category:</Text>
          <TextInput
            style={[styles.input, categoryError ? { borderColor: 'red' } : null]}
            value={category}
            placeholder="Enter Category"

          />
          {categoryError ? <Text style={styles.errorText}>{categoryError}</Text> : null}

          

          {/* <Text>Role:</Text>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => {
              setRole(itemValue);
              setRoleError('');
            }}
            style={styles.input}
          >
<Picker.Item label="Select Role" value="" />
            <Picker.Item label="Manager" value="Manager" />
            <Picker.Item label="Waiter" value="Waiter" />
            <Picker.Item label="Chef" value="Chef" />
          </Picker>
          {roleError ? <Text style={styles.errorText}>{roleError}</Text> : null}

         

         
          
          <Text>Photo:</Text>
          <View> */}
            {/* ... your existing code ... */}
          {/* </View> */}

          {/* Buttons in the same row */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
              <Image
                source={deleted}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: 'red',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
          </View>
    
    </View>
    <BottomBar/>
  </>
);
};

const styles = StyleSheet.create({
pageContainer:{
  flex:1,
  backgroundColor:'white'
},
container: {
  padding: 20,
  backgroundColor: 'white',
  height: 'auto',
  borderWidth: 1,
  borderColor: 'black', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
},
input: {
    height: 40,
    marginBottom: 10,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%', // Make the input elements take the full width
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between', // Space between Delete and Update buttons
  },
  deleteButton: {
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  updateButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  selectedImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  browseLabel: {
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    cursor: 'pointer',
  },
  browseInput: {
    display: 'none',
  },
});

export default UpdateCategoryDetails;