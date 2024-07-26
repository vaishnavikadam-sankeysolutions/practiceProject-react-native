import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const PlatformCheck = () => {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'black', margin: 10}}>
        Platform: {Platform.OS}
      </Text>

      {Platform.OS == 'android' ? (
        <View
          style={{backgroundColor: 'green', width: 100, height: 100}}></View>
      ) : (
        <View style={{backgroundColor: 'blue', width: 100, height: 100}}></View>
      )}

      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 10,
    color: Platform.OS == 'android' ? 'violet' : 'red',
  },
});

export default PlatformCheck;
