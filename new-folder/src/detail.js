import React from 'react';
import { View, Text } from 'react-native';

const Detail = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

export default Detail;
