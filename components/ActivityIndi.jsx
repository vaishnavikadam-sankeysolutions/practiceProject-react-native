import React, {useState} from 'react';
import {Text, View, ActivityIndicator, StyleSheet, Button} from 'react-native';

const ActivityIndi = () => {
  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  return (
    <View style={styles.main}>
      {/* <Text>Activity Indicator</Text> */}

      {show ? (
        <ActivityIndicator size={100} color="blue" animating={show} />
      ) : null}

      <Button title="Show Loader" onPress={displayLoader} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActivityIndi;
