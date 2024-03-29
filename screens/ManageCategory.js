// import React from 'react';
// import { View,Image, Text, FlatList, TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';
// import icons from '../constants/icons';
// import Footer from '../components/Footer';
// import BottomNavigation from '../BottomNav/BottomNavigation/BottomNavigation';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';
// import AddButton from '../components/AddButton';
// import EditButton from '../components/EditButton';


// const FloatingPlusIcon = ({ navigation }) => (
//     // <TouchableOpacity
//     //   style={style.floatingButton}
//     //   onPress={() => navigation.navigate('SaveCategoryDetails')}
//     // >
//     //   <Image
//     //           source={icons.add}
//     //           resizeMode="contain"
//     //           style={style.addButton}
//     //         />
//     // </TouchableOpacity>
//     <AddButton onPress={() => navigation.navigate('SaveCategoryDetails')} />
//   );


// const ManageCategory = ({navigation}) => {
//   // Dummy data for staff
//   const staffData = [
//     { id: '1', category: 'Veg Starter', quntity: '30 Menu' },
//     { id: '2', category: 'Non-Veg Starter', quntity: '20 Menu' },
//     // { id: '3', name: 'John Doe', role: 'Chef' },
//     // { id: '4', name: 'Jane Smith', role: 'Chef' },
//     // { id: '5', name: 'Shekru Labs', role: 'Chef' },
//     // { id: '6', name: 'Jane Smith', role: 'Chef' },
//     // Add more staff data as needed
//   ];

//   const renderStaffItem = ({ item, index }) => (
//     <View style={{ ...styles.listItem, borderBottomWidth: index === staffData.length - 1 ? 0 : 1 }}>
//       <View style={styles.detailsContainer}>
//         <Text style={{...styles.name,...styles.text}}>{item.category}</Text>
//         <Text style={{...styles.role,...styles.text}}>{item.quntity}</Text>
//       </View>
//       {/* <TouchableOpacity onPress={() => handleEditPress(item.id)}>
      
//             <Image
//               source={icons.edit}
//               resizeMode="contain"
//               style={style.editButton}
//             />
          
//       </TouchableOpacity> */}
//        <EditButton onPress={() => handleEditPress(item)} />
      
//     </View>
//   );

//   const handleEditPress = (staff) => {
//     // Implement logic for handling edit button press
//     // console.log(Edit button pressed for staff with ID: ${staffId});
//      navigation.navigate('UpdateCategoryDetails',{staffData:staff})
//   };

//   return (
//     <>
//     <TitleBar title="Manage Category"/>

    
//     <View style={style.pageContainer}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//         <View style={style.container}>
//       <FlatList
//         data={staffData}
//         keyExtractor={(item) => item.id}
//         renderItem={renderStaffItem}
//       />
      
   
//     <FloatingPlusIcon navigation={navigation} />
//     </View>
//     </ScrollView>
//     </View>
//     <BottomBar/>
    
//     </>
//   );
// };

// const styles = StyleSheet.create({
  
//   listItem: {
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
//   floatingButton: {
//     position: 'absolute',
//     bottom: 70,
//     right: 20,
//     backgroundColor: '#4CAF50', // Change the background color of the button
//     borderRadius: 50, // Adjust the border radius for a circle
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   text: {
//      fontFamily:'Roboto'
//   }
  
// });

// export default ManageCategory;

import React from 'react';
import { View,Image, Text, FlatList, TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';
import icons from '../constants/icons';
import Footer from '../components/Footer';
import BottomNavigation from '../BottomNav/BottomNavigation/BottomNavigation';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import AddButton from '../components/AddButton';
import EditButton from '../components/EditButton';
import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';

const FloatingPlusIcon = ({ navigation }) => (
    // <TouchableOpacity
    //   style={style.floatingButton}
    //   onPress={() => navigation.navigate('SaveCategoryDetails')}
    // >
    //   <Image
    //           source={icons.add}
    //           resizeMode="contain"
    //           style={style.addButton}
    //         />
    // </TouchableOpacity>
    <AddButton onPress={() => navigation.navigate('SaveCategoryDetails')} />
  );





const ManageCategory = ({navigation}) => {
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

  const borderColorStyle = {
    borderColor: isDarkMode ? 'white' : 'black',
    borderBottomColor: isDarkMode ? darkTheme.borderColor : lightTheme.borderColor,
  };

  // Dummy data for staff
  const staffData = [
    { id: '1', category: 'Veg Starter', quntity: '30 Menu' },
    { id: '2', category: 'Non-Veg Starter', quntity: '20 Menu' },
    // { id: '3', name: 'John Doe', role: 'Chef' },
    // { id: '4', name: 'Jane Smith', role: 'Chef' },
    // { id: '5', name: 'Shekru Labs', role: 'Chef' },
    // { id: '6', name: 'Jane Smith', role: 'Chef' },
    // Add more staff data as needed
  ];

  const renderStaffItem = ({ item, index }) => (
    <View style={{ ...styles.listItem, borderBottomWidth: index === staffData.length - 1 ? 0 : 1 ,...borderColorStyle}}>
      <View style={styles.detailsContainer}>
        <Text style={{...styles.name,...styles.text,color: textStyle.color}}>{item.category}</Text>
        <Text style={{...styles.role,...styles.text,color: textStyle.color}}>{item.quntity}</Text>
      </View>
      {/* <TouchableOpacity onPress={() => handleEditPress(item.id)}>
      
            <Image
              source={icons.edit}
              resizeMode="contain"
              style={style.editButton}
            />
          
      </TouchableOpacity> */}
       <EditButton onPress={() => handleEditPress(item)} />
      
    </View>
  );

  const handleEditPress = (staff) => {
    // Implement logic for handling edit button press
    // console.log(Edit button pressed for staff with ID: ${staffId});
     navigation.navigate('UpdateCategoryDetails',{staffData:staff})
  };

  return (
    <>
    <TitleBar title="Manage Category"/>

    
    <View style={[style.pageContainer, pageContainerStyle]}>
        <ScrollView contentContainerStyle={style.scrollContainer}>
        <View style={[style.container, containerStyle]}>
      <FlatList
        data={staffData}
        keyExtractor={(item) => item.id}
        renderItem={renderStaffItem}
      />
      
   
    <FloatingPlusIcon navigation={navigation} />
    </View>
    </ScrollView>
    </View>
    <BottomBar/>
    
    </>
  );
};

const styles = StyleSheet.create({
  
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderTopWidth: 1,  // Add line above each item
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
     fontFamily:'Roboto'
  }
  
});

export default ManageCategory;