import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import BottomBar from '../components/BottomBar';
import TitleBar from '../components/TitleBar';





export default function ManageMenu(props) {
  
  return (
    <>
    <TitleBar title="Manage Menu"/>
    <View style={styles.container}>
      
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ManageCategory')}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={chatIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Manage Category</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ManageOrder')}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={calendarIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Manage Order</Text>
        </TouchableOpacity>
    
      </View>
      
    </View>
    <BottomBar/>
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
    // borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  blogItem: {
    width: '31%',
    height: 120,
    paddingVertical: 20,
    // borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
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
