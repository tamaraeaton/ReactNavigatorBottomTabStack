import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Stack1Screens, Stack1StackNavigationProp} from './Stack1';

const Stack1Screen1 = () => {
  const navigation = useNavigation<Stack1StackNavigationProp>();

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']}>
      <Text>stack 1 screen 1</Text>
      <Button
        title="go to stack 1 screen 2"
        onPress={() => {
          navigation.navigate(Stack1Screens.Stack1Screen2);
        }}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Stack1Screen1;
