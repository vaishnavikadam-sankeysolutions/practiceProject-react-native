import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

const SimpleForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);

  const resetFormData = () => {
    setDisplay(false), setUserName(''), setPassword(''), setEmail('');
  };

  return (
    <View>
      <Text style={{fontSize: 27}}>Simple form in React-native</Text>
      <TextInput
        placeholder="Enter user name"
        style={styles.textInput}
        value={userName}
        onChangeText={text => {
          setUserName(text);
        }}></TextInput>
      <View>
        <TextInput
          placeholder="Enter user password"
          style={styles.textInput}
          value={password}
          // secureTextEntry={true}
          secureTextEntry={securePassword}
          onChangeText={text => {
            setPassword(text);
          }}></TextInput>
        <Button
          title={securePassword ? 'Show password' : 'Hide password'}
          onPress={() => setSecurePassword(!securePassword)}></Button>
      </View>
      <TextInput
        placeholder="Enter user email"
        style={styles.textInput}
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}></TextInput>

      <View style={{marginBottom: 10}}>
        <Button
          title="Print details"
          color={'green'}
          onPress={() => setDisplay(true)}></Button>
      </View>
      <Button title="Clear details" onPress={resetFormData}></Button>

      <View>
        {display ? (
          <View>
            <Text>User name is: {userName}</Text>
            <Text>User password is: {password}</Text>
            <Text>User email is: {email}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'blue',
    color: 'blue',
    margin: 10,
  },
});

export default SimpleForm;
