import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import BottomTabs from '../../bottomTabs/BottomTabs';
import Stack1Screen2 from './Stack1Screen2';

const Stack = createStackNavigator();

export enum Stack1Screens {
  Stack1BottomTabs = 'Bottom tabs',
  Stack1Screen2 = 'Stack 1 screen 2',
}

export type Stack1ScreensParams = {
  [Stack1Screens.Stack1BottomTabs]: undefined;
  [Stack1Screens.Stack1Screen2]: undefined;
};

export type Stack1StackScreenProps<
  RouteName extends keyof Stack1ScreensParams = Stack1Screens,
> = StackScreenProps<Stack1ScreensParams, RouteName>;

export type Stack1StackNavigationProp<
  RouteName extends keyof Stack1ScreensParams = Stack1Screens,
> = StackNavigationProp<Stack1ScreensParams, RouteName>;

export type Stack1StackRouteProp<
  RouteName extends keyof Stack1ScreensParams = Stack1Screens,
> = RouteProp<Stack1ScreensParams, RouteName>;

const Stack1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Stack1Screens.Stack1BottomTabs}
        component={BottomTabs}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name={Stack1Screens.Stack1Screen2}
        component={Stack1Screen2}
        options={{headerBackTitle: 'Back'}}></Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Stack1;
