import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const RandomDiceRoll = () => Math.floor(Math.random() * 6) + 1;

export default function App() {
  const [diceRolls, setDiceRolls] = useState([]);

  return (
    <View>
      <Button
        title='RollDice'
        onPress={() => setDiceRolls(() => [...diceRolls, RandomDiceRoll()])}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text key={index}>{diceRoll}</Text>
      ))}
    </View>
  );
}
