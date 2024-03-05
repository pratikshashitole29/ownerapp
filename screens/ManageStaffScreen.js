// ManageStaffScreen.js
import React,{useEffect} from 'react';
import { View, Image, Text as RNText, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { icons } from '../constants';
import Footer from '../components/Footer';
import { FONT_FAMILY } from '../config'; // Import the FONT_FAMILY variable
import BottomNavigation from '../BottomNav/BottomNavigation/BottomNavigation';
import SidebarIcon from '../components/CustomHeader';
import HeaderScreen from './HeaderScreen';
import BottomBar from '../components/BottomBar';
import ExtraScreen from './ExtraScreen';
import TitleBar from '../components/TitleBar';
const Text = (props) => <RNText {...props} style={[props.style, { fontFamily: FONT_FAMILY }]} />; // Use FONT_FAMILY

const FloatingPlusIcon = ({ navigation }) => (
  <TouchableOpacity
    style={styles.floatingButton}
    onPress={() => navigation.navigate('Save')}
  >
    <Image
      source={icons.add}
      resizeMode="contain"
      style={{
        width: 30,
        height: 30,
        tintColor: 'white'
      }}
    />
  </TouchableOpacity>
);

const ManageStaffScreen = ({ navigation }) => {

  
  // Dummy data for staff
  const staffData = [
    { id: '1', name: 'Eohn Doe', role: 'Manager',mobile: '9579412455',address: '123 Main St',
    dob: '01/01/1990',
    aadharNo: '1234 5678 9012',
    selectedImage: 'https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2F4da582ed-cd92-4662-8588-e0528275a61f.jpeg' },
    { id: '2', name: 'Jane Smith', role: 'Chef',selectedImage: 'https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2Fc360b335-cf27-44d9-9251-59f61bf36428.jpeg' },
  
    { id: '3', name: 'John Doe', role: 'Chef' },
    { id: '4', name: 'Jane Smith', role: 'Chef' },
    { id: '5', name: 'Shekru Labs', role: 'Chef' },
    { id: '6', name: 'Jane Smith', role: 'Chef' },
    
    
    
    // Add more staff data as needed
  ];

  const handleEditPress = (staff) => {
    // Pass the selected staff data to the UpdateScreen
    navigation.navigate('Update', { staffData: staff });
  };

  const renderStaffItem = ({ item }) => (
    <View style={{ ...styles.listItem }}>
      <View style={styles.detailsContainer}>
        <Text style={{ ...styles.name, ...styles.text }}>{item.name}</Text>
        <Text style={{ ...styles.role, ...styles.text }}>{item.role}</Text>
      </View>
      <TouchableOpacity onPress={() => handleEditPress(item)}>
        <Image
          source={icons.edit}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            marginLeft: 10,
            tintColor: 'black'
          }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <TitleBar title="Manage Staff" />
      <View style={styles.container}>
        <FlatList
          data={staffData}
          keyExtractor={(item) => item.id}
          renderItem={renderStaffItem}
        />
      </View>
      <FloatingPlusIcon navigation={navigation} />
      <ExtraScreen/>
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
    fontFamily: FONT_FAMILY
  }
});


export default ManageStaffScreen