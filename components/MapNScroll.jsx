import React from 'react';
import {Text, View, Button, StyleSheet, ScrollView} from 'react-native';

const MapNScroll = () => {
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
    <View>
      <ScrollView>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    margin: 10,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default MapNScroll;
