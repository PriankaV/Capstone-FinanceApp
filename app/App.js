import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((json) => setData(json.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>{data ? data : "Loading..."}</Text>
    </View>
  );
}