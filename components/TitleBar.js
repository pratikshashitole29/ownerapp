// TitleBar.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CustomSidebar from './CustomSidebar';
import { useNavigation } from '@react-navigation/native';

const TitleBar = ({ title }) => {
  const navigation = useNavigation();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <View style={{ backgroundColor: 'blue', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      

      {/* Display the title passed as a prop (Left) */}
      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      
      <TouchableOpacity onPress={toggleSidebar}>
        <MaterialIcons name="menu" size={30} color="white" />
      </TouchableOpacity>
      {/* Display the CustomSidebar if isSidebarVisible is true */}
      {isSidebarVisible && <CustomSidebar navigation={navigation} closeSidebar={closeSidebar} />}
    </View>
  );
};

export default TitleBar;
