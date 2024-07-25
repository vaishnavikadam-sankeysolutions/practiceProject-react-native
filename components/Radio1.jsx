import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Radio1 = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          setSelectedRadio(1);
        }}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.radiobg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectedRadio(2);
        }}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.radiobg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 2,
    margin: 10,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiobg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 3,
  },
});

export default Radio1;
