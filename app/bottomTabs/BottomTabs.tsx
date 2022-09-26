import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Stack1Screen1 from '../stack/stack1/Stack1Screen1';
import Stack2 from '../stack/stack2/Stack2';

const BottomTab = createBottomTabNavigator();

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
          focused ? styles.overviewActive : styles.overviewInactive,
        ]}
        source={require('../assets/icons/settings.png')}></Image>
    );
  };

  return (
    <BottomTab.Navigator screenOptions={{tabBarLabelStyle: {color: 'black'}}}>
      <BottomTab.Screen
        name="Stack 1 screen 1"
        component={Stack1Screen1}
        options={{
          tabBarLabel: 'Overview',
          tabBarIcon: ({focused}) => getOverviewTabIcon(focused),
        }}></BottomTab.Screen>
      <BottomTab.Screen
        name="Stack 2"
        component={Stack2}
        options={{
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
});

export default Stack1;
