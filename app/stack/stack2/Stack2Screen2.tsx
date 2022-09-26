import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack2Screen2 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']}>
      <Text>stack 2 screen 1</Text>
      <Button
        title="go to stack 2 screen 1"
        onPress={() => {
          navigation.navigate('Stack 2 screen 1');
        }}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Stack2Screen2;
