import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import {AppLoading} from 'expo'
//import * as Font from 'expo-font'

import Tabs from './navigation/tabs';
import   Home from './screens/Home'
import  Restaurants from './screens/Restaurants'
import  OrderDelivery from './screens/OrderDelivery'
import EnterEmailScreen from './screens/EnterEmailScreen';
import VerifyOTPScreen from './screens/VerifyOTPScreen';

const Stack = createStackNavigator();

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
//     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
//     'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
//     'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
//   });
// };

const App = () => {

  //const [fontsLoaded, setFontsLoaded] = React.useState(false);
  
  // if(!fontsLoaded){
  //   return <AppLoading startAsync={fetchFonts} onFinish={()=>setFontsLoaded(true)}/>
  // }
  

  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName='EnterEmail'
          screenOptions={{
            headerShown: false,
          }}>

        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen name='OrderDelivery' component={OrderDelivery} />
        <Stack.Screen name='Restaurants' component={Restaurants} />
        <Stack.Screen name="EnterEmail" component={EnterEmailScreen} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} options={true}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;