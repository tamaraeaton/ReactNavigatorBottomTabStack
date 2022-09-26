import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Stack2Screens,
  Stack2StackNavigationProp,
  Stack2StackRouteProp,
} from './Stack2';

const Stack2Screen2 = () => {
  const navigation = useNavigation<Stack2StackNavigationProp>();
  const route = useRoute<Stack2StackRouteProp>();

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']}>
      <Text>stack 2 screen 1</Text>
      <Text>stack 2 param: {route.params?.param}</Text>
      <Button
        title="go to stack 2 screen 1"
        onPress={() => {
          navigation.navigate(Stack2Screens.Stack2Screen1);
        }}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Stack2Screen2;
