import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://randomuser.me/api?results=10').then((response) => {
      // console.log(response.data.results);
      setUsers(response.data.results);
    });
  }, []);

  const delHandler = (uuid) => {
    setUsers((pervUsers) =>
      pervUsers.filter((user) => user.login.uuid != uuid)
    );
  };

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View
            style={{
              // alignItems: 'center',
              width: '70%',
              flexDirection: 'row',
              margin: 8,
              padding: 8,
            }}
          >
            <Image
              source={item.picture.thumbnail}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text>{item.name.first + ' ' + item.name.last}</Text>
              <Text>{item.location.country}</Text>
            </View>
            <TouchableOpacity onPress={() => delHandler(item.login.uuid)}>
              <Text style={{ color: 'red' }}>Del</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.login.uuid}
      />

      {/* {users.map((user) => (
        <Text key={user.login.uuid}>{user.name.first}</Text>
      ))} */}
    </View>
  );
}
