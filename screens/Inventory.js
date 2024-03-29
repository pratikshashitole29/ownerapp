// import React from 'react';
// import { View,Image, Text, FlatList, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
// import { add, edit } from '../constants/icons';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';
// import { COLORS } from '../constants';
// import AddButton from '../components/AddButton';
// import EditButton from '../components/EditButton';
// import { useState } from 'react';

// const FloatingPlusIcon = ({ navigation }) => (
//     // <TouchableOpacity
//     //   style={style.floatingButton}
//     //   onPress={() => navigation.navigate('Save Inventory')}
//     // >
//     //   <Image
//     //           source={add}
//     //           resizeMode="contain"
//     //           style={style.addButton}
//     //         />
//     // </TouchableOpacity>
//     <AddButton onPress={() => navigation.navigate('Save Inventory')} />

//   );


//   const Inventory = ({ navigation }) => {
//     const [selectedRole, setSelectedRole] = useState('');
//     const staffData = [
//       { id: '1', name: 'Name1', quantity: 'Quantity1', type: 'Hotel' },
//       { id: '2', name: 'Name2', quantity: 'Quantity2', type: 'Kitchen' },
//       { id: '3', name: 'Name3', quantity: 'Quantity3', type: 'Garden' },
//       { id: '4', name: 'Name4', quantity: 'Quantity4', type: 'Hotel' },
//       // ... (more data)
//     ];


//     const renderStaffItem = ({ item, index }) => (
//       <View style={{ ...styles.listItem, borderBottomWidth: index === staffData.length - 1 ? 0 : 1 }}>
//         <View style={styles.detailsContainer}>
//           <Text style={{ ...styles.name, ...styles.text }}>{item.name}</Text>
//           <Text style={{ ...styles.role, ...styles.text }}>{item.quantity}</Text>
//           <Text style={{ ...styles.role, ...styles.text }}>{item.type}</Text>
//         </View>
//         <EditButton onPress={() => handleEditPress(item)} />
//       </View>
//     );
  
//     const handleEditPress = (item) => {
//       navigation.navigate('Update Inventory', { item });
//     };
  
//     const renderTypeButton = ({ item }) => (
//       <TouchableOpacity
//         style={{
//           marginLeft: 15,
//           padding: 15,
//           marginTop: 10,
//           marginBottom: 5,
//           backgroundColor: selectedRole === item ? 'lightblue' : 'white',
//           borderRadius: 15,
//           alignItems: 'center',
//           justifyContent: 'center',
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 3,
//           },
//           shadowOpacity: 0.27,
//           shadowRadius: 4.65,
//           elevation: 6,
//           height: 40,
//         }}
//         onPress={() => setSelectedRole(item)} // Change to setSelectedRole(item.type)
//       >
//         <Text style={{ color: selectedRole === item ? 'white' : 'black', marginTop: 5, fontSize: 14, fontWeight: 'bold', fontFamily: 'ROBOTO' }}>{item}</Text>
//       </TouchableOpacity>
//     );
    

//   return (
//     <>
//       <TitleBar title="Inventory" />

//       <View style={style.labelContainer}>
//         <View style={style.container1}>
//           <FlatList
//             data={['Hotel', 'Kitchen','Garden']}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={(item) => item}
//             renderItem={renderTypeButton}
//             style={{ marginTop: 0, marginBottom: 2 }}
//           />
//         </View>
//       </View>

// <View style={style.pageContainer}>
//   <ScrollView contentContainerStyle={style.scrollContainer}>
//     <View style={style.container}>
//       <FlatList
//         data={staffData}
//         keyExtractor={(item) => item.id}
//         renderItem={renderStaffItem}
//       />
//       <FloatingPlusIcon navigation={navigation} />
//     </View>
//   </ScrollView>
// </View>
// <BottomBar />
// </>
// );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: COLORS.backGroundColor,

//   },
//   listItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // borderTopWidth: 1,  // Add line above each item
//     borderBottomWidth: 1,  // Add line below each item
//     borderColor: 'black',
//     paddingVertical: 10,
//   },
//   listItem1: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // borderTopWidth: 1,  // Add line above each item
//     borderBottomWidth: 1,  // Add line below each item
//     borderColor: 'black',
//     paddingVertical: 10,
//   },
//   detailsContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   role: {
//     fontSize: 16,
//     color: '#555',
//   },
 

//   text: {
//      fontFamily:'Roboto'
//   }
  
// });

// export default Inventory;

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import AddButton from '../components/AddButton';
import EditButton from '../components/EditButton';
import { useState } from 'react';
import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { COLORS } from '../constants';

const FloatingPlusIcon = ({ navigation }) => (
  <AddButton onPress={() => navigation.navigate('Save Inventory')} />
);

const Inventory = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const containerStyle = {
    backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
  };

  const pageContainerStyle = {
    backgroundColor: isDarkMode ? darkTheme.PageContainer : lightTheme.PageContainer,
  };

  const textStyle = {
    color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
  };
  const flatListItemStyle = {
    backgroundColor: isDarkMode ? darkTheme.flatListItemBackground : lightTheme.flatListItemBackground,
  };

  const borderColorStyle = {
    borderColor: isDarkMode ? 'white' : 'black',
    borderBottomColor: isDarkMode ? darkTheme.borderColor : lightTheme.borderColor,
  };

  const [selectedType, setSelectedType] = useState('');
  const inventoryData = [
    { id: '1', name: 'Name1', quantity: 'Quantity1', type: 'Hotel' },
    { id: '2', name: 'Name2', quantity: 'Quantity2', type: 'Kitchen' },
    { id: '3', name: 'Name3', quantity: 'Quantity3', type: 'Garden' },
    { id: '4', name: 'Name4', quantity: 'Quantity4', type: 'Hotel' },
    // ... (more data)
  ];

  const renderInventoryItem = ({ item, index }) => (
    <View style={{ ...styles.listItem, borderBottomWidth: index === inventoryData.length - 1 ? 0 : 1, ...borderColorStyle }}>
      <View style={styles.detailsContainer}>
        <Text style={{ ...styles.name, ...styles.text, color: textStyle.color }}>{item.name}</Text>
        <Text style={{ ...styles.quantity, ...styles.text, color: textStyle.color }}>{item.quantity}</Text>
        <Text style={{ ...styles.type, ...styles.text, color: textStyle.color }}>{item.type}</Text>
      </View>
      <EditButton onPress={() => handleEditPress(item)} />
    </View>
  );

  const handleEditPress = (inventoryData) => {
    navigation.navigate('Update Inventory', { inventoryData:inventoryData });
  };

  

  const renderTypeButton = ({ item }) => {
    const shadowColor = isDarkMode ? darkTheme.shadowColor : lightTheme.shadowColor;
    const shadowOpacity = isDarkMode ? darkTheme.shadowOpacity : lightTheme.shadowOpacity;
    return (
      <TouchableOpacity
        style={{
          marginLeft: 15,
          padding: 15,
          marginTop: 10,
          marginBottom: 5,
          backgroundColor: selectedType === item ? 'lightblue' : flatListItemStyle.backgroundColor,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: shadowColor,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: shadowOpacity,
          shadowRadius: 4.65,
          elevation: 6,
          height: 40,
        }}
        onPress={() => setSelectedType(item)}
      >
        <Text style={{ color: selectedType === item ? 'white' : textStyle.color, marginTop: 5, fontSize: 14, fontWeight: 'bold', fontFamily: 'ROBOTO' }}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TitleBar title="Inventory" />
      <View style={[style.labelContainer, pageContainerStyle]}>
        <View style={[style.container1, containerStyle]}>
          <FlatList
            data={['Hotel', 'Kitchen', 'Garden']}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={renderTypeButton}
            style={{ marginTop: 0, marginBottom: 2 }}
          />
        </View>
      </View>

      <View style={[style.pageContainer1, pageContainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View style={[style.container, containerStyle]}>
            <FlatList
              data={inventoryData.filter((inventoryData)=>(selectedType? inventoryData.type===selectedType:true))}
              
              keyExtractor={(item) => item.id}
              renderItem={renderInventoryItem}
            />
            <FloatingPlusIcon navigation={navigation} />
          </View>
        </ScrollView>
      </View>
      <BottomBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.backGroundColor,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
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
  quantity: {
    fontSize: 16,
    color: '#555',
  },
  type: {
    fontSize: 16,
    color: '#555',
  },
  text: {
    fontFamily: 'Roboto',
  },
});

export default Inventory;
