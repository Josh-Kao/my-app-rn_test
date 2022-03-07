import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { nanoid } from 'nanoid';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

let index = 0;
export default function App() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addText = () => {
    if (text) {
      setTodoList([...todoList, { text, key: nanoid(), doneState: false }]);
      setText('');
    }
    // console.log(todoList);
  };
  const delTodo = (key) => {
    setTodoList((pervTodoList) =>
      pervTodoList.filter((item) => item.key != key)
    );
  };

  const doneTodo = (key) => {
    setTodoList((pervTodoList) =>
      pervTodoList.map((item) =>
        item.key === key ? { ...item, doneState: true } : item
      )
    );
  };

  return (
    <View style={{ marginTop: statusBarHeight, width: 300 }}>
      <TextInput
        style={{ borderWidth: 1, marginLeft: 40, padding: 10 }}
        onChangeText={setText}
        value={text}
      />
      <View style={{ marginLeft: 40, marginTop: 5 }}>
        <Button title='add' onPress={addText} />
      </View>
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', padding: 5, marginLeft: 40 }}>
            {item.doneState ? (
              <MaterialCommunityIcons
                name='check-circle-outline'
                size={24}
                color='pink'
              />
            ) : (
              <TouchableOpacity onPress={() => doneTodo(item.key)}>
                <MaterialCommunityIcons
                  name='checkbox-blank-circle-outline'
                  size={24}
                  color='pink'
                />
              </TouchableOpacity>
            )}
            <Text style={{ color: 'green', width: '90%' }}>{item.text}</Text>

            <TouchableOpacity onPress={() => delTodo(item.key)}>
              <MaterialCommunityIcons
                name='delete-outline'
                size={24}
                color='red'
              />
            </TouchableOpacity>
          </View>
        )}
        // keyExtractor={(item) => String(item.key)}
      />
    </View>
  );
}
