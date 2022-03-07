import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
let cnt = 0;

export default function App() {
  const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get(
  //       'https://mail2.ritek.com.tw/ritekrpt/test/book/book.php'
  //     );
  //     const data = await response.data;
  //     console.log('data=' + data);
  //     setUsers(data);
  //   };
  //   getData();
  //   console.log('users=' + users);
  // }, []);

  useEffect(() => {
    axios
      .get('https://mail2.ritek.com.tw/ritekrpt/test/book/book.php')
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return (
    <View>
      <Text>{users.length === 0 ? `載入中...` : users[0].name}</Text>
      {/* <FlatList
        data={users}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      /> */}
    </View>
  );
}
