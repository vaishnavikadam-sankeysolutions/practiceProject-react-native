import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const Webview = () => {
  return <WebView source={{uri: 'https://reactnative.dev/'}}></WebView>;
};

export default Webview;
