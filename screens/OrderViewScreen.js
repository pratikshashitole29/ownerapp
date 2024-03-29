// // OrderViewScreen.js
// import React from 'react';
// import { View, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
// import TitleBar from '../components/TitleBar';
// import BottomBar from '../components/BottomBar';
// import style from '../constants/style';
// import { MaterialIcons } from '@expo/vector-icons';
// const OrderViewScreen = ({ navigation }) => {
//   const orderDetails = {
//     orderNumber: '12345',
//     orderStatus: 'Pending',
//     menuCount: '50',
//     totalBill: '150.00',
//     orderCreatedOn: '2024-02-28 8:00AM',
//     orderCreatedBy: 'John Doe',
//   };

//   return (
//     <>
//     <TitleBar title="Order View"/>
//     <View style={style.pageContainer}>
//         <ScrollView contentContainerStyle={style.scrollContainer}>
//         <View style={style.container}>
//       <View style={styles.data}>
//         <View style={styles.row}>
//           <Text style={styles.value}>{orderDetails.orderNumber}</Text>
//           <Text style={styles.title}>Order Number</Text>
//         </View>

//         <View style={styles.row}>
//           <Text style={styles.value}>{orderDetails.orderStatus}</Text>
//           <Text style={styles.title}>Order Status</Text>
//         </View>
//       </View>

//       <View style={styles.data}>
//         <View style={styles.row}>
//           <Text style={styles.value}>{orderDetails.menuCount}</Text>
//           <Text style={styles.title}>Menu Count</Text>
//         </View>

//         <View style={styles.row}>
//           <Text style={styles.value}>{orderDetails.totalBill}</Text>
//           <Text style={styles.title}>Total Bill</Text>
//         </View>
//       </View>

//       <View style={styles.data}>
//         <View style={styles.row}>
//           <Text style={styles.value}>{orderDetails.orderCreatedOn}</Text>
//           <Text style={styles.title}>Order Created On</Text>
//         </View>

//         <View style={styles.row}>
//           <Text style={styles.value}>{orderDetails.orderCreatedBy}</Text>
//           <Text style={styles.title}>Order Created By</Text>
//         </View>
//       </View>

//       {/* Table */}
//       <View style={styles.tableContainer}>
//         <View style={styles.tableRow}>
//           <View style={[styles.tableCell, styles.tableHeaderCell]}>
//             <Text style={[styles.tableText, styles.tableHeaderText]}>Menu</Text>
//           </View>
        
//           <View style={[styles.tableCell, styles.tableHeaderCell]}>
//             <Text style={[styles.tableText, styles.tableHeaderText]}>Quantity</Text>
//           </View>
//           <View style={[styles.tableCell, styles.tableHeaderCell]}>
//             <Text style={[styles.tableText, styles.tableHeaderText]}>Price</Text>
//           </View>
//           <View style={[styles.tableCell, styles.tableHeaderCell]}>
//             <Text style={[styles.tableText, styles.tableHeaderText]}>Total</Text>
//           </View>
          
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}>
//             <Text style={styles.tableText}>Menu 1</Text>
//           </View>
          
//           <View style={styles.tableCell}>
//             <Text style={styles.tableText}>2</Text>
//           </View>
//           <View style={styles.tableCell}>
//             <Text style={styles.tableText}>50</Text>
//           </View>
//           <View style={styles.tableCell}>
//             <Text style={styles.tableText}>100</Text>
//           </View>
         
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}>
//             <Text style={styles.tableText}>Menu 2</Text>
//           </View>
//           <View style={styles.tableCell}>
//             <Text style={styles.tableText}>3</Text>
//           </View>
//           <View style={styles.tableCell}>
//             <Text style={styles.tableText}>100</Text>
//           </View>
//           <View style={styles.tableCell}>
//             <Text style={styles.tableText}>200</Text>
//           </View>
          
          
//         </View>

//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}>
//             <Text style={styles.tableText}></Text>
//           </View>
//           <View style={styles.tableCell}>
//             <Text style={styles.tableText}></Text>
//           </View>
//           <View style={styles.tableCell}>
//             <Text style={[styles.tableText,styles.tableHeaderText]}>Total</Text>
//           </View>
//           <View style={styles.tableCell}>
//             <Text style={styles.tableText}>300</Text>
//           </View>
          
          
//         </View>
//       </View>
//       {/* Download Bill Button */}
//       <TouchableOpacity style={styles.downloadButton} onPress={() => handleDownloadBill()}>
//   <View style={styles.iconContainer}>
//     <MaterialIcons name="download" size={24} color="white" style={styles.icon} />
//     <Text style={styles.downloadButtonText}>Download Bill</Text>
//   </View>
// </TouchableOpacity>

//     </View>
//     </ScrollView>
//     </View>
//     <BottomBar/>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   data: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   row: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     width: '48%',
//   },
//   title: {
//     fontSize: 18,
//     textTransform: 'uppercase',
//     color: 'grey',
//     fontFamily:'ROBOTO'
//   },
//   value: {
//     fontSize: 18,
//     color: 'black',
//     fontFamily:'ROBOTO'
//   },
//   tableContainer: {
//     marginTop: 20,
//     borderWidth: 1,
//     borderColor: 'black',
//     backgroundColor:'white'
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: 'black',
    
//   },
//   tableCell: {
//     flex: 1,
//     padding: 10,
//     borderRightWidth: 1,
//     borderRightColor: 'black',
//   },
//   tableHeaderCell: {
//     backgroundColor: 'orange',
//   },
//   tableText: {
//     textAlign: 'center',
//     fontSize: 16,
//     fontFamily:'ROBOTO'
//   },
//   tableHeaderText: {
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   downloadButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginVertical: 40,
//     // width: 300, // Set the desired width
//     marginLeft:50,
//     marginRight:50
//   },
//   downloadButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontFamily: 'ROBOTO',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     marginRight: 8, // Adjust the spacing between icon and text
//   },
// });

// export default OrderViewScreen;


// OrderViewScreen.js
import React from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';
import style from '../constants/style';
import { MaterialIcons } from '@expo/vector-icons';

import { lightTheme, darkTheme } from '../constants/ThemeStyles';
import { useTheme } from '../components/ThemeProvider';


const OrderViewScreen = ({ navigation }) => {
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

  const orderDetails = {
    orderNumber: '12345',
    orderStatus: 'Pending',
    menuCount: '50',
    totalBill: 'Rs150.00',
    orderCreatedOn: '2024-02-28 8:00AM',
    orderCreatedBy: 'John Doe',
  };

  return (
    <>
     <TitleBar title="Order View" />
      <View style={[style.pageContainer, pageContainerStyle]}>
        <ScrollView contentContainerStyle={[style.scrollContainer]}>
          <View style={[style.container, containerStyle]}>
            {/* ... (existing code) */}
            <View style={styles.data}>
              <View style={styles.row}>
                <Text style={[styles.value, textStyle]}>{orderDetails.orderNumber}</Text>
                <Text style={[styles.title, ]}>Order Number</Text>
              </View>

              <View style={styles.row}>
                <Text style={[styles.value, textStyle]}>{orderDetails.orderStatus}</Text>
                <Text style={[styles.title, ]}>Order Status</Text>
              </View>
            </View>

      <View style={styles.data}>
        <View style={styles.row}>
        <Text style={[styles.value, textStyle]}>{orderDetails.menuCount}</Text>
        <Text style={[styles.title, ]}>Menu Count</Text>
        </View>

        <View style={styles.row}>
        <Text style={[styles.value, textStyle]}>{orderDetails.totalBill}</Text>
        <Text style={[styles.title, ]}>Total Bill</Text>
        </View>
      </View>

      <View style={styles.data}>
        <View style={styles.row}>
        <Text style={[styles.value, textStyle]}>{orderDetails.orderCreatedOn}</Text>
        <Text style={[styles.title, ]}>Order Created On</Text>
        </View>

        <View style={styles.row}>
        <Text style={[styles.value, textStyle]}>{orderDetails.orderCreatedBy}</Text>
        <Text style={[styles.title, ]}>Order Created By</Text>
        </View>
      </View>

      {/* Table */}
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <View style={[styles.tableCell, styles.tableHeaderCell]}>
            <Text style={[styles.tableText, styles.tableHeaderText]}>Menu</Text>
          </View>
        
          <View style={[styles.tableCell, styles.tableHeaderCell]}>
            <Text style={[styles.tableText, styles.tableHeaderText]}>Quantity</Text>
          </View>
          <View style={[styles.tableCell, styles.tableHeaderCell]}>
            <Text style={[styles.tableText, styles.tableHeaderText]}>Price</Text>
          </View>
          <View style={[styles.tableCell, styles.tableHeaderCell]}>
            <Text style={[styles.tableText, styles.tableHeaderText]}>Total</Text>
          </View>
          
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.tableText}>Menu 1</Text>
          </View>
          
          <View style={styles.tableCell}>
            <Text style={styles.tableText}>2</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableText}>Rs50</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableText}>Rs100</Text>
          </View>
         
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.tableText}>Menu 2</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableText}>3</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableText}>Rs100</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableText}>Rs200</Text>
          </View>
          
          
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.tableText}></Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableText}></Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={[styles.tableText,styles.tableHeaderText]}>Total</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableText}>Rs300</Text>
          </View>
          
          
        </View>
      </View>
      {/* Download Bill Button */}
      <TouchableOpacity style={styles.downloadButton} onPress={() => handleDownloadBill()}>
  <View style={styles.iconContainer}>
    <MaterialIcons name="download" size={24} color="white" style={styles.icon} />
    <Text style={styles.downloadButtonText}>Download Bill</Text>
  </View>
</TouchableOpacity>

    </View>
    </ScrollView>
    </View>
    <BottomBar/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '48%',
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: 'grey',
    fontFamily:'ROBOTO'
  },
  value: {
    fontSize: 18,
    color: 'black',
    fontFamily:'ROBOTO'
  },
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor:'white'
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    
  },
  tableCell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  tableHeaderCell: {
    backgroundColor: 'orange',
  },
  tableText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily:'ROBOTO'
  },
  tableHeaderText: {
    color: 'black',
    fontWeight: 'bold',
  },
  downloadButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 40,
    // width: 300, // Set the desired width
    marginLeft:50,
    marginRight:50
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'ROBOTO',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8, // Adjust the spacing between icon and text
  },
});

export default OrderViewScreen;