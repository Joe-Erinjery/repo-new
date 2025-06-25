import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const APIView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/items')
      .then(res => res.json())
      .then(setData)
      .catch(() => setData([]));
  }, []);

  return (
    <View>
      {data.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
    </View>
  );
};

export default APIView;
