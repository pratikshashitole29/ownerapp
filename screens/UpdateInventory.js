import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Picker, TextInput, StyleSheet } from 'react-native';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';

const UpdateInventory = ({ route, navigation }) => {
  const staffData = route && route.params ? route.params.staffData : {};

  const [name, setName] = useState(staffData.name || '');
  const [quantity, setQuantity] = useState(staffData.mobile || '');
  const [category, setCategory] = useState(''); // State to store the selected category

  const [nameError, setNameError] = useState('');
  const [quantityError, setQuantityError] = useState('');
  const [categoryError, setCategoryError] = useState('');

  const categories = ['Select Type', 'Hotel', 'Kitchen', 'Garden'];

  const handleUpdate = () => {
    // Validate fields
    if (!name || !quantity || !category || category === 'Select Type') {
      setNameError(name ? '' : 'Name is required');
      setQuantityError(quantity ? '' : 'Quantity is required');
      setCategoryError(category && category !== 'Select Type' ? '' : 'Category is required');
      return;
    }

    // Implement your update logic here
    console.log('Update pressed', { name, quantity, category });

    // Reset error states after a successful update
    setNameError('');
    setQuantityError('');
    setCategoryError('');

    // You can navigate back to the previous screen if needed
    // navigation.goBack();
  };

  const handleDelete = () => {
    console.log('Data to be deleted');
  };

  return (
    <>
       <TitleBar title="Update Inventory"/>
      <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput
        style={[styles.input, nameError ? { borderColor: 'red' } : null]}
        value={name}
        placeholder="Enter Name"
        onChangeText={(text) => setName(text)}
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

      <Text>Quantity:</Text>
      <TextInput
        style={[styles.input, quantityError ? { borderColor: 'red' } : null]}
        value={quantity}
        placeholder="Enter Quantity"
        onChangeText={(text) => setQuantity(text)}
      />
      {quantityError ? <Text style={styles.errorText}>{quantityError}</Text> : null}

      <Text>Category:</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={[styles.input, categoryError ? { borderColor: 'red' } : null]}
      >
        {categories.map((cat, index) => (
          <Picker.Item key={index} label={cat} value={cat} />
        ))}
      </Picker>
      {categoryError ? <Text style={styles.errorText}>{categoryError}</Text> : null}

      {/* Buttons in the same row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
    <BottomBar/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
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
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    borderColor: 'red',
    borderWidth: 1,
  },
  updateButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});

export default UpdateInventory;
