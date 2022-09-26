import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Stack2Screen1 from './Stack2Screen1';
import Stack2Screen2 from './Stack2Screen2';

const Stack = createStackNavigator();

export enum Stack2Screens {
  Stack2Screen1 = 'Stack 2 screen 1',
  Stack2Screen2 = 'Stack 2 screen 2',
}

export type Stack2ScreensParams = {
  [Stack2Screens.Stack2Screen1]: undefined;
  [Stack2Screens.Stack2Screen2]: {param: string} | undefined;
};

export type Stack2StackScreenProps<
  RouteName extends keyof Stack2ScreensParams = Stack2Screens,
> = StackScreenProps<Stack2ScreensParams, RouteName>;

export type Stack2StackNavigationProp<
  RouteName extends keyof Stack2ScreensParams = Stack2Screens,
> = StackNavigationProp<Stack2ScreensParams, RouteName>;

export type Stack2StackRouteProp<
  RouteName extends keyof Stack2ScreensParams = Stack2Screens,
> = RouteProp<Stack2ScreensParams, RouteName>;

const Stack2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Stack2Screens.Stack2Screen1}
        component={Stack2Screen1}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name={Stack2Screens.Stack2Screen2}
        component={Stack2Screen2}
        options={{headerBackTitle: 'Back'}}></Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Stack2;
