import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SettingsMenu = ({ navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
      <Text>Settings</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
      <Text>Notifications</Text>
    </TouchableOpacity>
  </View>
);

export default SettingsMenu;
