import React from 'react';
import { View,Image, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';







const ManageOrder = ({navigation}) => {
  // Dummy data for staff
  const staffData = [
   
   
      { id: '1', ordernumber: 'Order Number', orderstatus: 'Order Status', menucount: 'Menu Count' },
      
 
    
    // { id: '2', name: 'Non-Veg Starter', quntity: '20 Menu' },
    // { id: '3', name: 'John Doe', role: 'Chef' },
    // { id: '4', name: 'Jane Smith', role: 'Chef' },
    // { id: '5', name: 'Shekru Labs', role: 'Chef' },
    // { id: '6', name: 'Jane Smith', role: 'Chef' },
    // Add more staff data as needed
  ];

  const renderStaffItem = ({ item }) => (

    <TouchableOpacity
  
    onPress={() => navigation.navigate('Order View', { orderId: item.id })}
  >
    <View style={{...styles.listItem}}>
      <View style={styles.detailsContainer}>
        <Text style={{...styles.name, ...styles.text }}>
           {item.ordernumber}
        </Text>
        <View style={{marginTop:-25}}>
        <Text style={{...styles.name, ...styles.text, marginLeft: 'auto'}}>
          {item.orderstatus}
        </Text>
        </View>
        <Text style={{...styles.name, ...styles.text,marginTop:20}}> {item.menucount}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
  
  
  
  
  

  

  return (
    <>
    <TitleBar title="Manage Order"/>
    <View style={styles.container}>
      <FlatList
        data={staffData}
        keyExtractor={(item) => item.id}
        renderItem={renderStaffItem}
      />
      
    </View>
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
    bottom: 60,
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

export default ManageOrder;