import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import BottomTabs from '../../bottomTabs/BottomTabs';
import Stack1Screen2 from './Stack1Screen2';

const Stack = createStackNavigator();

const Stack1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bottom tabs" component={BottomTabs}></Stack.Screen>
      <Stack.Screen
        name="Stack 1 screen 2"
        component={Stack1Screen2}></Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Stack1;
