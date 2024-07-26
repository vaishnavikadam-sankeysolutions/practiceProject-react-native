import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';

const Statusbar = () => {
  const [showStatus, setShowStatus] = useState(false);
  const [barStyle, setBarStyle] = useState('default');

  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={'orange'}
        barStyle={barStyle}
        hidden={showStatus}></StatusBar>

      <Button
        title="Toggle Status Bar"
        onPress={() => setShowStatus(!showStatus)}></Button>
      <Button
        title="Update Style"
        onPress={() => setBarStyle('dark-content')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Statusbar;
