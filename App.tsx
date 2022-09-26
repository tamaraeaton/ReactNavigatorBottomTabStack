import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Stack1 from './app/stack/stack1/Stack1';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack1></Stack1>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
