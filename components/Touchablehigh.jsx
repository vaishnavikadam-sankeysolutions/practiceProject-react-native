import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';

const Touchablehigh = () => {
  return (
    <View>
      <Text>Touchable Highlights</Text>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#bbb',
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    margin: 10,
    shadowColor: 'black',
    elevation: 6,
    opacity: 4,
    color: 'black',
  },
  primary: {
    backgroundColor: 'blue',
  },
  success: {
    backgroundColor: 'green',
  },
  warning: {
    backgroundColor: 'yellow',
  },
  error: {
    backgroundColor: 'red',
  },
});

export default Touchablehigh;
