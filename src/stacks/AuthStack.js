import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Startscreen from '../screens/Startscreen';

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
      <Stack.Screen name="Startscreen" component={Startscreen} options={options} />
      
    </Stack.Navigator>
  );
}
