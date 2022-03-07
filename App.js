/* 20220307 */
import React, { useState, useEffect } from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10').then((response) => {
      // console.log(response.data.results);
      setUsers(response.data.results);
    });
  }, []);
  const delHandler = (uuid) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.login.uuid != uuid)
    );
  };
  return (
    <View style={{ marginTop: 40 }}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Image
              source={{ uri: item.picture.thumbnail }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <View style={styles.item}>
              <Text>{item.name.first + ' ' + item.name.last}</Text>
              <Text>{item.location.country}</Text>
            </View>
            <TouchableOpacity
              style={{ justifyContent: 'center' }}
              onPress={() => delHandler(item.login.uuid)}
            >
              {/* <Text style={{ color: 'red' }}>Del</Text> */}
              {/* {<MaterialIcons name='delete' size={24} color='#333' />} */}
              <AntDesign name='deleteuser' size={24} color='red' />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.login.uuid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    width: '70%',
    alignSelf: 'center',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
