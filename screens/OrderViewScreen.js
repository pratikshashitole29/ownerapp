// OrderViewScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleBar from '../components/TitleBar';
import BottomBar from '../components/BottomBar';

const OrderViewScreen = ({ navigation }) => {
  const orderDetails = {
    orderNumber: '12345',
    orderStatus: 'Pending',
    menuCount: '50',
    totalBill: '$150.00',
    orderCreatedOn: '2024-02-28',
    orderCreatedBy: 'John Doe',
  };

  return (
    <>
    <TitleBar title="Order View"/>
    <View style={styles.container}>
      <View style={styles.data}>
        <View style={styles.row}>
          <Text style={styles.value}>{orderDetails.orderNumber}</Text>
          <Text style={styles.title}>Order Number</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.value}>{orderDetails.orderStatus}</Text>
          <Text style={styles.title}>Order Status</Text>
        </View>
      </View>

      <View style={styles.data}>
        <View style={styles.row}>
          <Text style={styles.value}>{orderDetails.menuCount}</Text>
          <Text style={styles.title}>Menu Count</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.value}>{orderDetails.totalBill}</Text>
          <Text style={styles.title}>Total Bill</Text>
        </View>
      </View>

      <View style={styles.data}>
        <View style={styles.row}>
          <Text style={styles.value}>{orderDetails.orderCreatedOn}</Text>
          <Text style={styles.title}>Order Created On</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.value}>{orderDetails.orderCreatedBy}</Text>
          <Text style={styles.title}>Order Created By</Text>
        </View>
      </View>
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
    width: '48%', // Set width to 48% to have two boxes in a row with some spacing
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: 'grey',
    // textAlign: 'center',
  },
  value: {
    fontSize: 18,
    color: 'black',
    // textAlign: 'center',
  },
});

export default OrderViewScreen;