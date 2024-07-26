import React from 'react';
import {View, Text, Button, Pressable, StyleSheet} from 'react-native';

const PressableBtns = () => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => {
          console.warn('normal press on');
        }}
        onLongPress={() => {
          console.warn('Long press');
        }}
        onPressIn={() => {
          console.warn('Press in');
        }}
        onPressOut={() => {
          console.warn('Press out');
        }}>
        <Text style={styles.pressableText}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  pressableText: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
    shadowColor: 'black',
    elevation: 5,
    shadowOpacity: 10,
  },
});

export default PressableBtns;
