import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';

const SaveInventory = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const dropdownItems = ['Select Type', 'Hotel', 'Kitchen', 'Garden'];

  return (
    <>
    <TitleBar title="Save Inventory"/>
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} placeholder='Name' value={name} onChangeText={(text) => setName(text)} />

      <Text style={styles.label}>Quantity:</Text>
      <TextInput style={styles.input} placeholder='Quantity' value={quantity} onChangeText={(text) => setQuantity(text)} />

      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Type:</Text>
        <Picker
          style={styles.dropdownPicker}
          selectedValue={selectedType}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
        >
          {dropdownItems.map((item, index) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Form data saved!')}>
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
    backgroundColor: 'white',
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
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  dropdownContainer: {
    marginTop: 10,
  },
  dropdownPicker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
});

export default SaveInventory;