import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Count_Export({ count, decrement, increment }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Button title='-' onPress={decrement} />
      <Text>{count}</Text>
      <Button title='+' onPress={increment} />
    </View>
  );
}
