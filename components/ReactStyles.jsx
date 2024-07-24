import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';


const ReactStyles = () => {
  return (
    <View>
      <Text style={{backgroundColor: 'yellow', color: 'blue', fontSize: 30}}>
        Styles in React-native
      </Text>
      <Text style={styles.textBox}>Styles in React-native</Text>
      <Text style={styles.textBox}>Styles in React-native</Text>
      <Text style={styles.textBox}>Styles in React-native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    color: '#fff',
    backgroundColor: 'blue',
    fontSize: 30,
    height: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 10,
  },
});

export default ReactStyles;
