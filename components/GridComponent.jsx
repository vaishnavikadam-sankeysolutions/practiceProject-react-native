import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

const GridComponent = () => {
  const users = [
    {
      id: 1,
      name: 'Vaish',
    },
    {
      id: 2,
      name: 'Peter',
    },
    {
      id: 3,
      name: 'James',
    },
    {
      id: 4,
      name: 'Tony',
    },
    {
      id: 10,
      name: 'Marky',
    },
    {
      id: 2,
      name: 'Peter',
    },
    {
      id: 3,
      name: 'James',
    },
    {
      id: 4,
      name: 'Tony',
    },
    {
      id: 10,
      name: 'Marky',
    },
    {
      id: 2,
      name: 'Peter',
    },
    {
      id: 3,
      name: 'James',
    },
    {
      id: 4,
      name: 'Tony',
    },
    {
      id: 10,
      name: 'Marky',
    },
    {
      id: 2,
      name: 'Peter',
    },
    {
      id: 3,
      name: 'James',
    },
    {
      id: 4,
      name: 'Tony',
    },
    {
      id: 10,
      name: 'Marky',
    },
  ];

  return (
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
      {users.map(item => (
        <Text style={styles.item}>{item.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 5,
    margin: 5,
    color: '#fff',
    backgroundColor: 'blue',
    height: 120,
    width: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default GridComponent;
