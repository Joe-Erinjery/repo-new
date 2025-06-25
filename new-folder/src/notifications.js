import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const Notifications = () => {
  const triggerAlert = () => {
    Alert.alert("Notification", "Test alert triggered!");
  };

  return (
    <View>
      <Text>Notification Settings</Text>
      <Button title="Test Alert" onPress={triggerAlert} />
    </View>
  );
};

export default Notifications;
