import React from 'react';
import {Text, View, SectionList, StyleSheet, Button} from 'react-native';

const Sectionlist = () => {
  const users = [
    {
      id: 1,
      name: 'Vaish',
      data: ['C', 'C++', 'Python', 'Ruby'],
    },
    {
      id: 2,
      name: 'Vedant',
      data: ['Java', 'Hybernet', 'Spring MVC', 'Spring Boot'],
    },
    {
      id: 3,
      name: 'Peter',
      data: ['Django', 'ORM', 'Servlet'],
    },
    {
      id: 4,
      name: 'Noa',
      data: ['HTML', 'CSS', 'Bootstrap'],
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 27, color: 'black'}}>
        Section Lists in React-native
      </Text>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 10}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 24, color: 'red'}}>{name}</Text>
        )}></SectionList>
    </View>
  );
};

export default Sectionlist;
