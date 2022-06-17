import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen/LoginScreenIndex';
import GroupScreen from '../screens/GroupScreen/GroupScreenIndex';
import SplashScreen from '../screens/SplashScreen';
const Stack = createNativeStackNavigator();
function chatFLow() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Group"
          component={GroupScreen}
          options={{title: 'Groups'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default function MainStackNavigator() {
  return chatFLow();
}
