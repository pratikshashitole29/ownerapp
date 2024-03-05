import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => navigation.navigate('ManageStaff')}>
        <MaterialIcons name="people" size={30} color="#3498db" />
        <Text style={styles.buttonText}>Staff</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => navigation.navigate('ManageBills')}>
        <MaterialIcons name="receipt" size={30} color="#3498db" />
        <Text style={styles.buttonText}>Bills</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => navigation.navigate('AppNavigation')}>
        <MaterialIcons name="home" size={30} color="#3498db" />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => navigation.navigate('Order')}>
        <MaterialIcons name="shopping-cart" size={30} color="#3498db" />
        <Text style={styles.buttonText}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => navigation.navigate('Menu')}>
        <MaterialIcons name="restaurant-menu" size={30} color="#3498db" />
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
      {/* Add other TouchableOpacity components for different screens */}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f5f5f5',
    elevation: 8,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  },
  bottomBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#34495e',
    fontSize: 12,
    marginTop: 5,
  },
});

export default BottomBar;
