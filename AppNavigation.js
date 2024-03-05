// AppNavigation.js

import React from 'react';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
//import YourScreen from './YourScreen'; // Import your screen components
import ManageStaffScreen from './screens/ManageStaffScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerItem
      label="Home"
      onPress={() => props.navigation.navigate('HomeScreen')}
      icon={() => <MaterialIcons name="home" size={30} color="#000" />}
    />
    {/* Add more DrawerItems as needed */}
  </DrawerContentScrollView>
);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Staff" component={ManageStaffScreen} />
        {/* Add more screens as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
