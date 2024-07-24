import React from 'react';
import {Text, View, Button, StyleSheet, FlatList} from 'react-native';

const ListFlatList = () => {
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
  ];

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}></FlatList>


    </View>
  );
};

const styles= StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    margin: 10,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default ListFlatList;
