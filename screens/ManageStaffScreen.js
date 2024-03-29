// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image,ScrollView } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import { FONT_FAMILY } from '../config';
// import { icons } from '../constants';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';
// import EditButton from '../components/EditButton';
// import AddButton from '../components/AddButton';

// const FloatingPlusIcon = ({ navigation }) => (
  
//   // <TouchableOpacity
//   //   style={styles.floatingButton}
//   //   onPress={() => navigation.navigate('Save')}>
//   //   <Image
//   //     source={icons.add}
//   //     resizeMode="contain"
//   //     style={{
//   //       width: 30,
//   //       height: 30,
//   //       tintColor: 'white'
//   //     }}
//   //   />
//   // </TouchableOpacity>
//   <AddButton onPress={() => navigation.navigate('Save')} />
// );


// const ManageStaffScreen = ({ navigation }) => {
//   const [selectedRole, setSelectedRole] = useState('');

//   useFocusEffect(
//     React.useCallback(() => {
//       setSelectedRole('');
//       return () => {
//         // Cleanup function (optional)
//       };
//     }, [])
//   );

//   const staffData = [
//     { id: '1', name: 'John Doe', role: 'Manager' },
//     { id: '2', name: 'Jane Smith', role: 'Chef' },
//     { id: '3', name: 'John Doe', role: 'Manager' },
//     { id: '4', name: 'Jane Smith', role: 'Waiter' },
//     { id: '5', name: 'Shekru Labs', role: 'Manager' },
//     { id: '6', name: 'Jane Smith', role: 'Manager' },
//   ];

//   const handleEditPress = (staff) => {
//     navigation.navigate('Update', { staffData: staff });
//   };

//   const renderStaffItem = ({ item, index }) => (
//     <View style={{ ...styles.listItem, borderBottomWidth: index === staffData.length - 1 ? 0 : 1 }}>
//       <View style={styles.detailsContainer}>
//         <Text style={{ ...styles.name, ...styles.text }}>{item.name}</Text>
//         <Text style={{ ...styles.role, ...styles.text }}>{item.role}</Text>
//       </View>
//       <EditButton onPress={() => handleEditPress(item)} />
//     </View>
//   );
  
//       {/* <TouchableOpacity onPress={() => handleEditPress(item)}>
//         <View style={styles.editButtonContainer}>
//           <Image
//             source={icons.edit}
//             resizeMode="contain"
//             style={{
//               width: 30,
//               height: 30,
//               marginLeft: 5,
//               tintColor: 'black',
//             }}
//           />
//         </View>
//       </TouchableOpacity> */}
//   //     <EditButton onPress={() => handleEditPress(item)} />
//   //   </View>
//   // );

//   const renderRoleButton = ({ item }) => (
//     <TouchableOpacity
//       style={{
//         marginLeft: 15,
//         padding: 15,
//         marginTop: 10,
//         marginBottom: 5,
//         backgroundColor: selectedRole === item ? 'lightblue' : 'white',
//         borderRadius: 15,
//         borderColor:'grey',
//         alignItems: 'center',
//         justifyContent: 'center',
//         // shadowColor: '#000',
//         // shadowOffset: {
//         //   width: 0,
//         //   height: 3,
//         // },
//         shadowOpacity: 0.27,
//         shadowRadius: 4.65,
//         elevation: 6,
//         height: 40,
//       }}
//       onPress={() => setSelectedRole(item)}
//     >
//       <Text style={{ color: selectedRole === item ? 'white' : 'black', marginTop: 5, fontSize: 14, fontWeight: 'bold',fontFamily:'ROBOTO' }}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <>
//       <TitleBar title="Manage Staff" />
//       <View style={style.labelContainer}>
        
//         <View style={style.container1}>
//       {/* <View style={{ flex: 1, backgroundColor: 'white' }}> */}
//         <FlatList
//           data={['Manager', 'Chef', 'Waiter', 'Manager2', 'Chef2', 'Waiter2']}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item}
//           renderItem={renderRoleButton}
//           style={{
//             marginTop: 0, 
//             marginBottom: 0,
           
//           }}
//         />
// </View>
     
//       </View>
//       <View style={style.pageContainer}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//         <View style={style.container}>
//         <FlatList
//           data={staffData.filter((staff) => (selectedRole ? staff.role === selectedRole : true))}
//           keyExtractor={(item) => item.id}
//           renderItem={renderStaffItem}
//           style={{ marginTop: 2, marginBottom: 5 }}
//         />

//         <FloatingPlusIcon navigation={navigation} />
//       {/* </View> */}
//      </View>
//      </ScrollView>
//      </View>
//       <BottomBar />
//     </>
//   );
// };

// const styles = StyleSheet.create({
 
//   listItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
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
//   editButtonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   text: {
//     fontFamily: 'ROBOTO',
//   },
//   floatingButton: {
//     position: 'absolute',
//     bottom: 70,
//     right: 20,
//     backgroundColor: '#4CAF50',
//     borderRadius: 50,
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

// });

// export default ManageStaffScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image,ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FONT_FAMILY } from '../config';
import { icons } from '../constants';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import EditButton from '../components/EditButton';
import AddButton from '../components/AddButton';
import { useTheme } from '../components/ThemeProvider';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';

const FloatingPlusIcon = ({ navigation }) => (
  
  // <TouchableOpacity
  //   style={styles.floatingButton}
  //   onPress={() => navigation.navigate('Save')}>
  //   <Image
  //     source={icons.add}
  //     resizeMode="contain"
  //     style={{
  //       width: 30,
  //       height: 30,
  //       tintColor: 'white'
  //     }}
  //   />
  // </TouchableOpacity>
  <AddButton onPress={() => navigation.navigate('Save')} />
);


const ManageStaffScreen = ({ navigation }) => {
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


  const [selectedRole, setSelectedRole] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setSelectedRole('');
      return () => {
        // Cleanup function (optional)
      };
    }, [])
  );

  const staffData = [
    { id: '1', name: 'John Doe', role: 'Manager' },
    { id: '2', name: 'Jane Smith', role: 'Chef' },
    { id: '3', name: 'John Doe', role: 'Manager' },
    { id: '4', name: 'Jane Smith', role: 'Waiter' },
    { id: '5', name: 'Shekru Labs', role: 'Manager' },
    { id: '6', name: 'Jane Smith', role: 'Manager' },
  ];

  const handleEditPress = (staff) => {
    navigation.navigate('Update', { staffData: staff });
  };

  const renderStaffItem = ({ item, index }) => (
    <View style={{ ...styles.listItem, borderBottomWidth: index === staffData.length - 1 ? 0 : 1 ,...borderColorStyle}}>
      <View style={styles.detailsContainer}>
        <Text style={{ ...styles.name, ...styles.text ,color: textStyle.color}}>{item.name}</Text>
        <Text style={{ ...styles.role, ...styles.text,color: textStyle.color }}>{item.role}</Text>
      </View>
      <EditButton onPress={() => handleEditPress(item)} />
    </View>
  );
  
      {/* <TouchableOpacity onPress={() => handleEditPress(item)}>
        <View style={styles.editButtonContainer}>
          <Image
            source={icons.edit}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              marginLeft: 5,
              tintColor: 'black',
            }}
          />
        </View>
      </TouchableOpacity> */}
  //     <EditButton onPress={() => handleEditPress(item)} />
  //   </View>
  // );

  const renderRoleButton = ({ item }) => {
    const shadowColor = isDarkMode ? darkTheme.shadowColor : lightTheme.shadowColor
    const shadowOpacity = isDarkMode ? darkTheme.shadowOpacity : lightTheme.shadowOpacity
    return (
    <TouchableOpacity
      style={{
        marginLeft: 15,
        padding: 15,
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: selectedRole === item ? 'lightblue' : flatListItemStyle.backgroundColor,
        borderRadius: 15,
        borderColor:'grey',
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
      onPress={() => setSelectedRole(item)}
    >
      <Text style={{ color: selectedRole === item ? 'white' :textStyle.color, marginTop: 5, fontSize: 14, fontWeight: 'bold',fontFamily:'ROBOTO' }}>{item}</Text>
    </TouchableOpacity>
  );
};

  return (
    <>
      <TitleBar title="Manage Staff" />
      <View style={[style.labelContainer, pageContainerStyle ]}>
        <View style={[style.container1, containerStyle]}>
      {/* <View style={{ flex: 1, backgroundColor: 'white' }}> */}
        <FlatList
          data={['Manager', 'Chef', 'Waiter', 'Manager2', 'Chef2', 'Waiter2']}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={renderRoleButton}
          style={{
            marginTop: 0, 
            marginBottom: 0,
           
          }}
        />
</View>
     
      </View>
      <View style={[style.pageContainer1, pageContainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
        <View style={[style.container, containerStyle]}>
        <FlatList
          data={staffData.filter((staff) => (selectedRole ? staff.role === selectedRole : true))}
          keyExtractor={(item) => item.id}
          renderItem={renderStaffItem}
          style={{ marginTop: 2, marginBottom: 5 }}
        />

        <FloatingPlusIcon navigation={navigation} />
      {/* </View> */}
     </View>
     </ScrollView>
     </View>
      <BottomBar />
    </>
  );
};

const styles = StyleSheet.create({
 
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
  role: {
    fontSize: 16,
    color: '#555',
  },
  editButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'ROBOTO',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default ManageStaffScreen;



