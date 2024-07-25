import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.warn('Do some animations');
  }, [count]);

  useEffect(() => {
    console.warn('Call any APIs here');
  }, [data]);

  return (
    <View>
      <Text style={styles.text}>Life cycle methods with UseEffect Hook</Text>
      <Text style={styles.text}>Count is : {count}</Text>
      <Text style={styles.text}>Data is : {data}</Text>
      <Button title="Update Count" onPress={() => setCount(count + 1)}></Button>
      <Button
        title="Update Data"
        onPress={() => {
          setData(data - 1);
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default UseEffectHook;
