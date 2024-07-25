/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';
import CompanyData from './components/CompanyData';
import StateTesting from './components/StateTesting';
import ReactStyles from './components/ReactStyles';
import ExStyles from './style';
import SimpleForm from './components/SimpleForm';
import ListFlatList from './components/ListFlatList';
import MapNScroll from './components/MapNScroll';
import GridComponent from './components/GridComponent';
import LoopWithFlatlist from './components/LoopWithFlatlist';
import Sectionlist from './components/Sectionlist';
import UseEffectHook from './components/UseEffectHook';
import SHT_compo from './components/SHT_unmount';
import SHT_unmount from './components/SHT_unmount';
import ResponsiveUI from './components/ResponsiveUI';
import Touchablehigh from './components/Touchablehigh';
import Radio1 from './components/Radio1';
import DynamicRadio from './components/dynamicRadio';

const App = () => {
  const name = 'Sankey';
  let age = 23;
  let email = 'vaishnavi.k@sankeysolutions.com';

  // const [name_, setName_] = useState('');
  const [namee, setNamee] = useState('');

  function fruit() {
    return 'apple';
  }

  // function fruitssss(){
  //   console.warn("Function is called")
  // }

  const fruitssss = val => {
    console.warn(val);
  };

  return <DynamicRadio></DynamicRadio>
    
      {/* <Text style={{fontSize: 30}}>Hello React Native</Text>
      <Button title="Press here"></Button>
      <Text style={{fontSize: 30}}>Subscribe</Text>
      <Button title="Tap here"></Button>
      <Text style={{fontSize: 20}}>{name}</Text>
      <Text>{fruit()}</Text>
      <Text>{age === 20 ? 'above age' : 'below age'}</Text>
      <Text>{100 * 6}</Text>
      <UserData name="Vaish"></UserData>
      <CompanyData></CompanyData>
      <Button
        title="Fruitsss button 1"
        color={'green'}
        onPress={fruitssss}></Button>
      <Button
        title="Fruitsss button 2"
        color={'green'}
        onPress={() => fruitssss('hello')}></Button>

      <StateTesting></StateTesting>
      <ReactStyles></ReactStyles>
      <Text style={[ExStyles.textBox, {marginTop: 15}]}>
        Styles in react-native
      </Text> */}
      {/* <Text style={{fontSize: 30}}>Your name is: {namee} </Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.textInput}
        value={namee}
        onChangeText={text => setNamee(text)}></TextInput>
      <Button title="Clear Input Value" onPress={() => setNamee('')}></Button> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <ListFlatList></ListFlatList> */}
      {/* <MapNScroll></MapNScroll> */}
      {/* <GridComponent></GridComponent> */}
      {/* <LoopWithFlatlist></LoopWithFlatlist> */}
      {/* <Sectionlist></Sectionlist> */}
      {/* <UseEffectHook></UseEffectHook> */}
      {/* <SHT_unmount></SHT_unmount> */}
      {/* <ResponsiveUI></ResponsiveUI> */} //-----
      {/* <Touchablehigh></Touchablehigh> */}
      // <Radio1></Radio1> //-----
      
    
 
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});

const UserData = props => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Name: {props.name}</Text>
      <Text style={{fontSize: 20}}>Age: 22</Text>
      <Text style={{fontSize: 20}}>Email: vaish@test.com</Text>
    </View>
  );
};

export default App;
