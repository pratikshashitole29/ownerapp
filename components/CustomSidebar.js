import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CustomSidebar = ({ navigation, closeSidebar }) => {
  const navigateToScreen = (screenName) => {
    const combinedScreenName = screenName.replace(/\s+/g, '');
    navigation.navigate(combinedScreenName);
    closeSidebar();
  };

  const sidebarItems = [
    { iconName: 'description', text: 'Reports' },
    { iconName: 'business', text: 'Hotel Inventory' },
    { iconName: 'kitchen', text: 'Kitchen Inventory' },
    { iconName: 'people', text: 'Manage Staff' },
    { iconName: 'shopping-cart', text: 'Manage Orders' },
    { iconName: 'restaurant-menu', text: 'Manage Menu' },
    { iconName: 'receipt', text: 'Manage Bills' },
  ];

  return (
    <Modal animationType="fade" transparent={true} visible={true} onRequestClose={closeSidebar}>
      <TouchableOpacity style={styles.overlay} onPress={closeSidebar}>
        <View style={styles.sidebar}>
          {/* Profile User Circle */}
          <View style={styles.profileContainer}>
            <View style={styles.profileCircle}>
              <Text style={styles.profileText}>U</Text>
            </View>
            <Text style={styles.titleText}>Username</Text>
          </View>

          {/* Sidebar Items */}
          {sidebarItems.map(({ iconName, text }) => (
            <TouchableOpacity onPress={() => navigateToScreen(text)} key={text}>
              <View style={styles.sidebarItem}>
                <View style={styles.iconTextContainer}>
                  <MaterialIcons name={iconName} size={24} color="#000" />
                  <Text style={{ ...styles.sidebarItemText, marginLeft: iconName !== 'exit-to-app' ? 30 : 10 }}>
                    {text}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}

          {/* Logout and Version Text */}
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => {/* Handle logout logic here */}}>
              <View style={styles.iconTextContainer}>
                <MaterialIcons name="exit-to-app" size={24} color="#000" />
                <Text style={styles.sidebarItemText}>Logout</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.versionText}>v1.0</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  sidebar: {
    backgroundColor: 'white',
    padding: 20,
    width: '70%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  sidebarItem: {
    marginBottom: 30,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sidebarItemText: {
    color: 'black',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileCircle: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  profileText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  titleText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:30
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  versionText: {
    marginTop: 10,
    color: 'grey',
  },
});

export default CustomSidebar;
