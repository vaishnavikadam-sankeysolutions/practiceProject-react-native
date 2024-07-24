import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const StateTesting = () => {
  const [name, setName] = useState('Vaish');

  function testUpdate() {
    setName('Vedant');
  }

  return (
    <View>
      <Text>{name}</Text>
      <Button title="Update Name" onPress={testUpdate}></Button>
    </View>
  );
};

export default StateTesting;
