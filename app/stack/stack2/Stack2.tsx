import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Stack2Screen1 from './Stack2Screen1';
import Stack2Screen2 from './Stack2Screen2';

const Stack = createStackNavigator();

const Stack2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stack 2 screen 1"
        component={Stack2Screen1}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Stack 2 screen 2"
        component={Stack2Screen2}
        options={{headerBackTitle: 'Back'}}></Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Stack2;
