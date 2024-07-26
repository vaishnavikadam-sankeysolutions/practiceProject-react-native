import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const DynamicRadio = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);

  const skills = [
    {
      id: 1,
      name: 'JAVA',
    },
    {
      id: 2,
      name: 'Python',
    },
    {
      id: 3,
      name: 'SQL',
    },
    {
      id: 4,
      name: 'React-native',
    },
    {
      id: 5,
      name: 'Node',
    },
  ];

  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setSelectedRadio(item.id);
          }}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio === item.id ? (
                <View style={styles.radiobg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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

export default DynamicRadio;
