import React from 'react';
import { View } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function HomeScreen() {
  return (
    <View>
      <CustomButton title="Click Me" onPress={() => alert('Button Pressed!')} />
    </View>
  );
}