// Footer.js
import React from 'react';
import { View, Text as RNText, StyleSheet } from 'react-native';
import { COMPANY_NAME, VERSION, FONT_FAMILY } from '../config';

//const Text = (props) => <RNText {...props} style={[props.style, { fontFamily: FONT_FAMILY }]} />; // Use FONT_FAMILY
const Text = (props) => (
  <RNText {...props} style={[props.style, { fontFamily: `${FONT_FAMILY}, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif` }]} />
);
const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  footerText: {
    color: 'grey',
    fontFamily: FONT_FAMILY,
    //font:'Roboto'
  },
});

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{COMPANY_NAME}</Text>
      <Text style={styles.footerText}>{VERSION}</Text>
    </View>
  );
};

export default Footer;
