import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <View>
      <Text>User List:</Text>
      {users.map((user, index) => (
        <Text key={index}>{user[1]}</Text>
      ))}
    </View>
  );
}
