import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const SHT_unmount = () => {
  const [show, setShow] = useState(true);

  return (
    <View>
      <Text style={styles.text}>Here is the parent component</Text>
      <Button
        style={styles.buttons}
        title="Show Component"
        onPress={() => setShow(true)}></Button>
      <Button
        style={styles.buttons}
        title="Hide Component"
        onPress={() => setShow(false)}></Button>
      <Button
        style={styles.buttons}
        title="Toggle Component"
        onPress={() => setShow(!show)}></Button>
      {show ? <User></User> : null}
    </View>
  );
};

const User = () => {
  let timer = setInterval(() => {
    console.warn('Timer called');
  }, 2000);

  useEffect(() => {
    return () => clearInterval(timer);
  });

  return (
    <View>
      <Text style={styles.text}>Here is the user component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'green',
  },
  buttons: {
    marginBottom: 60,
    padding: 7,
  },
});

export default SHT_unmount;
