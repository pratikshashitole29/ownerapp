import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import BottomNavigation from '../BottomNav/BottomNavigation/BottomNavigation';
import HeaderScreen from './HeaderScreen';
import ExtraScreen from './ExtraScreen';
import TitleBar from '../components/TitleBar';

export default function HomeScreen(props) {
  return (
    <>
      <TitleBar title="Home" />
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Reports')}
            style={styles.item}
          >
            {/* <Image
              resizeMode="contain"
              source={chartIcon}
              style={styles.itemImage}
            /> */}
            <Text style={styles.itemText}>Reports</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Inventory')}
            style={styles.item}
          >
            {/* <Image
              resizeMode="contain"
              source={profileIcon}
              style={styles.itemImage}
            /> */}
            <Text style={styles.itemText}>Inventory</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Hotel Staff')}
            style={styles.item}
          >
            {/* <Image
              resizeMode="contain"
              source={chatIcon}
              style={styles.itemImage}
            /> */}
            <Text style={styles.itemText}>Hotel Staff</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Manage Order')}
            style={styles.item}
          >
            {/* <Image
              resizeMode="contain"
              source={calendarIcon}
              style={styles.itemImage}
            /> */}
            <Text style={styles.itemText}>Manage Order</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('ManageMenu')}
            style={styles.item}
          >
            {/* <Image
              resizeMode="contain"
              source={loginIcon}
              tintColor={colors.primary}
              style={styles.itemImage}
            /> */}
            <Text style={styles.itemText}>Manage Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Manage Bills')}
            style={styles.item}
          >
            {/* <Image
              resizeMode="contain"
              source={blogIcon}
              tintColor={colors.primary}
              style={styles.itemImage}
            /> */}
            <Text style={styles.itemText}>Manage Bills</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ExtraScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  itemText: {
    // color: colors.primary,
    // fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
  },
});
