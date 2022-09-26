import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Stack2Screens, Stack2StackNavigationProp} from './Stack2';

const Stack2Screen1 = () => {
  const navigation = useNavigation<Stack2StackNavigationProp>();
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']}>
      <Text>stack 2 screen 1</Text>
      <Button
        title="go to stack 2 screen 2"
        onPress={() => {
          navigation.navigate(Stack2Screens.Stack2Screen2, {
            param: 'param from screen 1',
          });
        }}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Stack2Screen1;
