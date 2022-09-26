import {RouteProp} from '@react-navigation/native';
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Stack1Screen1 from '../stack/stack1/Stack1Screen1';
import Stack2 from '../stack/stack2/Stack2';

const BottomTab = createBottomTabNavigator();

export enum BottomTabScreens {
  Stack1Screen1 = 'Stack 1 screen 1',
  Stack2 = 'Stack 2',
}

export type BottomTabScreensParams = {
  [BottomTabScreens.Stack1Screen1]: undefined;
  [BottomTabScreens.Stack2]: undefined;
};

export type Stack1StackScreenProps<
  RouteName extends keyof BottomTabScreensParams = BottomTabScreens,
> = BottomTabScreenProps<BottomTabScreensParams, RouteName>;

export type Stack1StackNavigationProp<
  RouteName extends keyof BottomTabScreensParams = BottomTabScreens,
> = BottomTabNavigationProp<BottomTabScreensParams, RouteName>;

export type Stack1StackRouteProp<
  RouteName extends keyof BottomTabScreensParams = BottomTabScreens,
> = RouteProp<BottomTabScreensParams, RouteName>;

const Stack1 = () => {
  const getOverviewTabIcon = (focused: boolean) => {
    return (
      <Image
        style={[
          styles.image,
          focused ? styles.overviewActive : styles.overviewInactive,
        ]}
        source={require('../assets/icons/overview.png')}></Image>
    );
  };

  const getSettingTabIcon = (focused: boolean) => {
    return (
      <Image
        style={[
          styles.image,
          focused ? styles.settingsActive : styles.settingsInactive,
        ]}
        source={require('../assets/icons/settings.png')}></Image>
    );
  };

  return (
    <BottomTab.Navigator screenOptions={{tabBarLabelStyle: {color: 'black'}}}>
      <BottomTab.Screen
        name={BottomTabScreens.Stack1Screen1}
        component={Stack1Screen1}
        options={{
          tabBarLabel: 'Overview',
          tabBarIcon: ({focused}) => getOverviewTabIcon(focused),
        }}></BottomTab.Screen>
      <BottomTab.Screen
        name={BottomTabScreens.Stack2}
        component={Stack2}
        options={{
          tabBarLabel: 'Settings',
          headerShown: false,
          tabBarIcon: ({focused}) => getSettingTabIcon(focused),
        }}></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: 32,
    height: 32,
  },
  overviewActive: {
    tintColor: 'blue',
  },
  overviewInactive: {
    tintcolor: 'gray',
  },
  settingsActive: {
    tintColor: 'red',
  },
  settingsInactive: {
    tintcolor: 'gray',
  },
});

export default Stack1;
