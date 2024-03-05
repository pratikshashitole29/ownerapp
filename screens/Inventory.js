import React from 'react';
import { View,Image, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { add, edit } from '../constants/icons';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';

const FloatingPlusIcon = ({ navigation }) => (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => navigation.navigate('Save Inventory')}
    >
      <Image
              source={add}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                //marginLeft: 10,
                tintColor:'white'
              }}
            />
    </TouchableOpacity>
  );


const Inventory = ({navigation}) => {
  // Dummy data for staff
  const staffData = [
    { id: '1', name: 'Name', quantity: 'Quantity' },
    // { id: '2', name: 'Non-Veg Starter', quntity: '20 Menu' },
    // { id: '3', name: 'John Doe', role: 'Chef' },
    // { id: '4', name: 'Jane Smith', role: 'Chef' },
    // { id: '5', name: 'Shekru Labs', role: 'Chef' },
    // { id: '6', name: 'Jane Smith', role: 'Chef' },
    // Add more staff data as needed
  ];

  const renderStaffItem = ({ item }) => (
    <View style={{...styles.listItem}}>
      <View style={styles.detailsContainer}>
        <Text style={{...styles.name,...styles.text}}>{item.name}</Text>
        <Text style={{...styles.role,...styles.text}}>{item.quantity}</Text>
      </View>
      <TouchableOpacity onPress={() => handleEditPress(item.id)}>
      
            <Image
              source={edit}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                marginLeft: 10,
                tintColor:'black'
              }}
            />
      </TouchableOpacity>
      
    </View>
  );

  const handleEditPress = () => {
    // Implement logic for handling edit button press
    // console.log(Edit button pressed for staff with ID: ${staffId});
    navigation.navigate('Update Inventory');

  };

  return (
    <>
    <TitleBar title="Inventory"/>
    <View style={styles.container}>
      <FlatList
        data={staffData}
        keyExtractor={(item) => item.id}
        renderItem={renderStaffItem}
      />
      
    </View>
    <FloatingPlusIcon navigation={navigation} />
    <BottomBar/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',

  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,  // Add line above each item
    borderBottomWidth: 1,  // Add line below each item
    borderColor: 'black',
    paddingVertical: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#555',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#4CAF50', // Change the background color of the button
    borderRadius: 50, // Adjust the border radius for a circle
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
     fontFamily:'Roboto'
  }
  
});

export default Inventory;