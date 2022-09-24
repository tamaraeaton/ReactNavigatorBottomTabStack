import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack1Screen2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>stack 1 screen 2</Text>
      <Button
        title="go to stack 1 screen 1"
        onPress={() => {
          navigation.navigate('Stack 1');
        }}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Stack1Screen2;
