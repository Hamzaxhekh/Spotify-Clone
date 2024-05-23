import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AlbumList from '../screens/AlbumList';

const Stack = createNativeStackNavigator();
export default function AppStack() {
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
  };
  return (
    <Stack.Navigator
      screenOptions={{headerShown: options.headerShown}}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} options={options} />
      <Stack.Screen name="AlbumList" component={AlbumList} options={options} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
