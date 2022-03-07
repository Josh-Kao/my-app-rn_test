import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount((preCount) => preCount - 1);
  };
  const increment = () => {
    setCount((preCount) => preCount + 1);
  };
  return (
    <View>
      <Button title='-' onPress={decrement} />
      <Text>{count}</Text>
      <Button title='+' onPress={increment} />
    </View>
  );
}
