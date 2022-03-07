import React from 'react';
import { View, Button, Text } from 'react-native';

export default function R_export({ count, decrement, increment }) {
  return (
    <View>
      <Button title='-' onPress={decrement} />
      <Text>{count}</Text>
      <Button title='+' onPress={increment} />
    </View>
  );
}
