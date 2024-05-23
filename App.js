import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider, theme} from './src/components/theme';
import AuthStack from './src/stacks/AuthStack';
import AppStack from './src/stacks/AppStack';

// navigation ref
export const navigationRef = createNavigationContainerRef();

const Stack = createNativeStackNavigator();

export default function App() {
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={'AppStack'}
            screenOptions={{headerShown: options.headerShown}}>
            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
              options={options}
            />
            <Stack.Screen
              name="AppStack"
              component={AppStack}
              options={options}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
