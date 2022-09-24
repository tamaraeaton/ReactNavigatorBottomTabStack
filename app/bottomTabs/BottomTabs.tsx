import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import Stack1Screen1 from '../stack/stack1/Stack1Screen1';
import Stack2 from '../stack/stack2/Stack2';

const BottomTab = createBottomTabNavigator();

const Stack1 = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Stack 1"
        component={Stack1Screen1}></BottomTab.Screen>
      <BottomTab.Screen name="Stack 2" component={Stack2}></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Stack1;
