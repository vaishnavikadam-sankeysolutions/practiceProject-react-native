import React from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';

const LoopWithFlatlist = () => {
  const users = [
    {
      id: 1,
      name: 'Vaish',
      email: 'vaish@test.com',
    },
    {
      id: 2,
      name: 'Peter',
      email: 'peter@test.com',
    },
    {
      id: 3,
      name: 'James',
      email: 'james@test.com',
    },
  ];

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <UserData item={item} />}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    fontSize: 24,
    color: 'orange',
    margin: 2,
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
    margin: 4,
  },
});

const UserData = props => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

export default LoopWithFlatlist;
