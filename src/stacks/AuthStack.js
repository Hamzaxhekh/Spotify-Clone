import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Startscreen from '../screens/Startscreen';
import Signup from '../screens/Signup';
import signUpPassword from '../screens/signUpPassword';
import Dateofbirth from '../screens/Dateofbirth';
import Gender from '../screens/Gender';
import Namescreen from '../screens/Namescreen';
import Login from '../screens/Login';
import Home from '../screens/Home';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
  };
  return (
    <Stack.Navigator
      screenOptions={{headerShown: options.headerShown}}
      initialRouteName={'Startscreen'}>
      <Stack.Screen
        name="Startscreen"
        component={Startscreen}
        options={options}
      />
      <Stack.Screen name="Signup" component={Signup} options={options} />
      <Stack.Screen name="Login" component={Login} options={options} />
      <Stack.Screen
        name="signUpPassword"
        component={signUpPassword}
        options={options}
      />
      <Stack.Screen
        name="Dateofbirth"
        component={Dateofbirth}
        options={options}
      />
      <Stack.Screen name="Gender" component={Gender} options={options} />
      <Stack.Screen
        name="Namescreen"
        component={Namescreen}
        options={options}
      />
      <Stack.Screen name="AppStack" component={AppStack} options={options} />
    </Stack.Navigator>
  );
}
