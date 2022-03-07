import React, { useState, useReducer } from 'react';
import { View, Text, Button } from 'react-native';
const reducer = (state, action) => {
  switch (action.type) {
    case 'decrement':
      return { count: state.count - 1 };
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const decrement = () => {
    dispatch({ type: 'decrement' });
  };
  const increment = () => {
    dispatch({ type: 'increment' });
  };
  return (
    <View>
      <Button title='-' onPress={decrement} />
      <Text>{state.count}</Text>
      <Button title='+' onPress={increment} />
    </View>
  );
}
